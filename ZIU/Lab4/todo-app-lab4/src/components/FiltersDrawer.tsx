import { useEffect, useMemo, useState } from 'react';
import type { FilterType, Priority, SortType, Todo } from '../types/todo.types';
import './FiltersDrawer.css';

interface FiltersDrawerProps {
    isOpen: boolean;
    todos: Todo[];
    appliedStatus: FilterType;
    appliedPriorities: Priority[];
    appliedSort: SortType;
    search: string;
    onClose: () => void;
    onApply: (payload: {
        status: FilterType;
        priorities: Priority[];
        sort: SortType;
    }) => void;
    onReset: () => void;
}

function getPriorityRank(priority: Priority) {
    if (priority === 'high') return 0;
    if (priority === 'medium') return 1;
    return 2;
}

export function FiltersDrawer({
                                  isOpen,
                                  todos,
                                  appliedStatus,
                                  appliedPriorities,
                                  appliedSort,
                                  search,
                                  onClose,
                                  onApply,
                                  onReset,
                              }: FiltersDrawerProps) {
    const [tempStatus, setTempStatus] = useState<FilterType>(appliedStatus);
    const [tempPriorities, setTempPriorities] = useState<Priority[]>(appliedPriorities);
    const [tempSort, setTempSort] = useState<SortType>(appliedSort);

    useEffect(() => {
        if (isOpen) {
            setTempStatus(appliedStatus);
            setTempPriorities(appliedPriorities);
            setTempSort(appliedSort);
        }
    }, [isOpen, appliedStatus, appliedPriorities, appliedSort]);

    const togglePriority = (priority: Priority) => {
        setTempPriorities((prev) =>
            prev.includes(priority)
                ? prev.filter((item) => item !== priority)
                : [...prev, priority]
        );
    };

    const previewCount = useMemo(() => {
        const normalizedSearch = search.trim().toLowerCase();

        const filtered = todos.filter((todo) => {
            const matchesStatus =
                tempStatus === 'all'
                    ? true
                    : tempStatus === 'active'
                        ? !todo.completed
                        : todo.completed;

            const matchesPriority =
                tempPriorities.length === 0 ? true : tempPriorities.includes(todo.priority);

            const matchesSearch =
                normalizedSearch.length === 0
                    ? true
                    : todo.title.toLowerCase().includes(normalizedSearch) ||
                    todo.description.toLowerCase().includes(normalizedSearch);

            return matchesStatus && matchesPriority && matchesSearch;
        });

        const sorted = [...filtered].sort((a, b) => {
            if (tempSort === 'date-asc') {
                return a.dueDate.localeCompare(b.dueDate);
            }

            if (tempSort === 'date-desc') {
                return b.dueDate.localeCompare(a.dueDate);
            }

            if (tempSort === 'priority') {
                return getPriorityRank(a.priority) - getPriorityRank(b.priority);
            }

            return a.title.localeCompare(b.title, 'pl');
        });

        return sorted.length;
    }, [todos, tempStatus, tempPriorities, tempSort, search]);

    if (!isOpen) {
        return null;
    }

    return (
        <div className="filters-overlay" onClick={onClose} role="presentation">
            <aside
                className="filters-drawer"
                role="dialog"
                aria-modal="true"
                aria-labelledby="filters-drawer-title"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="filters-header">
                    <div>
                        <h2 id="filters-drawer-title">Filtry i sortowanie</h2>
                        <p>Dopasuj widok listy zadań</p>
                    </div>

                    <button
                        type="button"
                        className="filters-close"
                        onClick={onClose}
                        aria-label="Zamknij panel filtrów"
                    >
                        ×
                    </button>
                </div>

                <section className="filters-section">
                    <h3>Status</h3>

                    <label className="filters-option">
                        <input
                            type="radio"
                            name="status"
                            checked={tempStatus === 'all'}
                            onChange={() => setTempStatus('all')}
                        />
                        <span>Wszystkie</span>
                    </label>

                    <label className="filters-option">
                        <input
                            type="radio"
                            name="status"
                            checked={tempStatus === 'active'}
                            onChange={() => setTempStatus('active')}
                        />
                        <span>Aktywne</span>
                    </label>

                    <label className="filters-option">
                        <input
                            type="radio"
                            name="status"
                            checked={tempStatus === 'completed'}
                            onChange={() => setTempStatus('completed')}
                        />
                        <span>Ukończone</span>
                    </label>
                </section>

                <section className="filters-section">
                    <h3>Priorytet</h3>

                    <label className="filters-option">
                        <input
                            type="checkbox"
                            checked={tempPriorities.includes('high')}
                            onChange={() => togglePriority('high')}
                        />
                        <span>Wysoki</span>
                    </label>

                    <label className="filters-option">
                        <input
                            type="checkbox"
                            checked={tempPriorities.includes('medium')}
                            onChange={() => togglePriority('medium')}
                        />
                        <span>Średni</span>
                    </label>

                    <label className="filters-option">
                        <input
                            type="checkbox"
                            checked={tempPriorities.includes('low')}
                            onChange={() => togglePriority('low')}
                        />
                        <span>Niski</span>
                    </label>
                </section>

                <section className="filters-section">
                    <h3>Sortowanie</h3>

                    <label className="filters-option">
                        <input
                            type="radio"
                            name="sort"
                            checked={tempSort === 'date-asc'}
                            onChange={() => setTempSort('date-asc')}
                        />
                        <span>Data rosnąco</span>
                    </label>

                    <label className="filters-option">
                        <input
                            type="radio"
                            name="sort"
                            checked={tempSort === 'date-desc'}
                            onChange={() => setTempSort('date-desc')}
                        />
                        <span>Data malejąco</span>
                    </label>

                    <label className="filters-option">
                        <input
                            type="radio"
                            name="sort"
                            checked={tempSort === 'priority'}
                            onChange={() => setTempSort('priority')}
                        />
                        <span>Priorytet</span>
                    </label>

                    <label className="filters-option">
                        <input
                            type="radio"
                            name="sort"
                            checked={tempSort === 'alphabetical'}
                            onChange={() => setTempSort('alphabetical')}
                        />
                        <span>Alfabetycznie</span>
                    </label>
                </section>

                <div className="filters-preview">
                    <span>Podgląd wyników</span>
                    <strong>{previewCount} zadania</strong>
                </div>

                <div className="filters-actions">
                    <button
                        type="button"
                        className="filters-apply-button"
                        onClick={() =>
                            onApply({
                                status: tempStatus,
                                priorities: tempPriorities,
                                sort: tempSort,
                            })
                        }
                    >
                        Zastosuj
                    </button>

                    <button
                        type="button"
                        className="filters-reset-button"
                        onClick={onReset}
                    >
                        Resetuj
                    </button>
                </div>
            </aside>
        </div>
    );
}