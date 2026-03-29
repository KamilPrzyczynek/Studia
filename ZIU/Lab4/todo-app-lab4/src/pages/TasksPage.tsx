import { useMemo, useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { FilterBar } from '../components/FilterBar';
import { Card } from '../components/Card';
import { todoReducer } from '../reducers/todoReducer';
import { mockTodos } from '../data/mockTodos';
import type {
    FilterType,
    Priority,
    PriorityFilter,
    Todo,
} from '../types/todo.types';
import './TasksPage.css';

interface FormState {
    title: string;
    description: string;
    dueDate: string;
    priority: Priority;
}

const emptyForm: FormState = {
    title: '',
    description: '',
    dueDate: '',
    priority: 'medium',
};

export default function TasksPage() {
    const navigate = useNavigate();

    const [todos, dispatch] = useReducer(todoReducer, mockTodos as Todo[]);
    const [filter, setFilter] = useState<FilterType>('all');
    const [priorityFilter, setPriorityFilter] = useState<PriorityFilter>('all');
    const [search, setSearch] = useState('');
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [form, setForm] = useState<FormState>(emptyForm);
    const [formError, setFormError] = useState('');

    const activeCount = todos.filter((todo) => !todo.completed).length;

    const filteredTodos = useMemo(() => {
        const normalizedSearch = search.trim().toLowerCase();

        return todos.filter((todo) => {
            const matchesStatus =
                filter === 'all'
                    ? true
                    : filter === 'active'
                        ? !todo.completed
                        : todo.completed;

            const matchesPriority =
                priorityFilter === 'all' ? true : todo.priority === priorityFilter;

            const matchesSearch =
                normalizedSearch.length === 0
                    ? true
                    : todo.title.toLowerCase().includes(normalizedSearch) ||
                    todo.description.toLowerCase().includes(normalizedSearch);

            return matchesStatus && matchesPriority && matchesSearch;
        });
    }, [todos, filter, priorityFilter, search]);

    const resetForm = () => {
        setForm(emptyForm);
        setFormError('');
    };

    const openAddPanel = () => {
        resetForm();
        setIsFormOpen(true);
    };

    const closePanel = () => {
        setIsFormOpen(false);
        setFormError('');
    };

    const handleToggle = (id: string) => {
        dispatch({ type: 'TOGGLE', payload: id });
    };

    const handleOpenDetails = (id: string) => {
        navigate(`/tasks/${id}`);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.title.trim()) {
            setFormError('Tytuł zadania jest wymagany.');
            return;
        }

        dispatch({
            type: 'ADD',
            payload: {
                title: form.title.trim(),
                description: form.description.trim(),
                dueDate: form.dueDate,
                priority: form.priority,
            },
        });

        closePanel();
        resetForm();
    };

    return (
        <div className="tasks-page">
            <section className="tasks-toolbar">
                <div className="tasks-search">
                    <Input
                        placeholder="Szukaj zadań..."
                        value={search}
                        onChange={setSearch}
                    />
                </div>
            </section>

            <nav className="tasks-filters">
                <FilterBar
                    activeFilter={filter}
                    activePriority={priorityFilter}
                    onFilterChange={setFilter}
                    onPriorityChange={setPriorityFilter}
                />
            </nav>

            <section className="tasks-heading">
                <h1>Moje zadania</h1>
                <p>Lista zadań z filtrowaniem i priorytetami</p>
                <div className="tasks-counter">
                    Aktywne: <strong>{activeCount}</strong> / Wszystkie:{' '}
                    <strong>{todos.length}</strong>
                </div>
            </section>

            <section className="tasks-list">
                {filteredTodos.length > 0 ? (
                    filteredTodos.map((todo) => (
                        <Card
                            key={todo.id}
                            todo={todo}
                            onToggle={handleToggle}
                            onOpen={handleOpenDetails}
                        />
                    ))
                ) : (
                    <div className="tasks-empty">
                        Brak zadań pasujących do wybranego filtru.
                    </div>
                )}
            </section>

            <div className="tasks-fab">
                <Button
                    label="+ Dodaj zadanie"
                    variant="fab"
                    size="large"
                    onClick={openAddPanel}
                />
            </div>

            {isFormOpen && (
                <div className="tasks-overlay" onClick={closePanel}>
                    <div className="tasks-add-layout">
                        <div className="tasks-add-backdrop desktop-only" />
                        <aside
                            className="tasks-side-panel"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="tasks-panel-header">
                                <div>
                                    <h2>Dodaj zadanie</h2>
                                    <p>Uzupełnij pola formularza</p>
                                </div>

                                <button
                                    type="button"
                                    className="tasks-close"
                                    onClick={closePanel}
                                    aria-label="Zamknij formularz"
                                >
                                    ×
                                </button>
                            </div>

                            <form className="tasks-form" onSubmit={handleSubmit}>
                                <div className="tasks-form-block">
                                    <label className="tasks-label">Tytuł</label>
                                    <Input
                                        placeholder="Np. Przygotować makiety do prezentacji"
                                        value={form.title}
                                        onChange={(value) => {
                                            setForm((prev) => ({ ...prev, title: value }));
                                            if (formError) setFormError('');
                                        }}
                                        state={formError ? 'error' : 'default'}
                                        helperText={formError}
                                    />
                                </div>

                                <div className="tasks-form-block">
                                    <label className="tasks-label">Opis</label>
                                    <Input
                                        placeholder="Dodaj krótki opis zadania..."
                                        value={form.description}
                                        onChange={(value) =>
                                            setForm((prev) => ({ ...prev, description: value }))
                                        }
                                        multiline
                                        rows={7}
                                    />
                                </div>

                                <div className="tasks-form-block">
                                    <label className="tasks-label">Termin</label>
                                    <div className="tasks-field-with-icon">
                                        <Input
                                            type="date"
                                            value={form.dueDate}
                                            onChange={(value) =>
                                                setForm((prev) => ({ ...prev, dueDate: value }))
                                            }
                                        />
                                        <span className="tasks-calendar-icon" aria-hidden="true" />
                                    </div>
                                </div>

                                <div className="tasks-form-block">
                                    <label className="tasks-label">Priorytet</label>
                                    <div className="tasks-select-wrapper">
                                        <select
                                            className="tasks-priority-select"
                                            value={form.priority}
                                            onChange={(e) =>
                                                setForm((prev) => ({
                                                    ...prev,
                                                    priority: e.target.value as Priority,
                                                }))
                                            }
                                        >
                                            <option value="low">Niski</option>
                                            <option value="medium">Średni</option>
                                            <option value="high">Wysoki</option>
                                        </select>
                                        <span className="tasks-select-arrow" aria-hidden="true" />
                                    </div>
                                </div>

                                <div className="tasks-form-actions">
                                    <Button
                                        label="Dodaj"
                                        variant="primary"
                                        size="large"
                                        type="submit"
                                    />
                                    <Button
                                        label="Anuluj"
                                        variant="secondary"
                                        size="large"
                                        onClick={closePanel}
                                    />
                                </div>
                            </form>
                        </aside>
                    </div>
                </div>
            )}
        </div>
    );
}