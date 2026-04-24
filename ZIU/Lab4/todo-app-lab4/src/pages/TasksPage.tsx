import { useMemo, useRef, useState } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';
import { FilterBar } from '../components/FilterBar';
import { ModalDialog } from '../components/ModalDialog';
import { useTodoContext } from '../context/useTodoContext';
import type { FilterType } from '../types/todo.types';
import './TasksPage.css';

export default function TasksPage() {
    const { state, dispatch } = useTodoContext();
    const { todos } = state;

    const [filter, setFilter] = useState<FilterType>('all');
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const addButtonRef = useRef<HTMLButtonElement>(null);

    const handleAdd = (title: string) => {
        const trimmedTitle = title.trim();

        if (!trimmedTitle) {
            return;
        }

        dispatch({
            type: 'ADD',
            payload: {
                title: trimmedTitle,
                description: '',
                dueDate: '',
                priority: 'medium',
                ownerEmail: '',
            },
        });

        setIsAddModalOpen(false);
    };

    const handleToggle = (id: string) => {
        dispatch({ type: 'TOGGLE', payload: id });
    };

    const handleDelete = (id: string) => {
        dispatch({ type: 'DELETE', payload: id });
    };

    const filteredTodos = useMemo(() => {
        return todos.filter((todo) => {
            if (filter === 'active') {
                return !todo.completed;
            }

            if (filter === 'completed') {
                return todo.completed;
            }

            return true;
        });
    }, [todos, filter]);

    const completedCount = todos.filter((todo) => todo.completed).length;
    const activeCount = todos.length - completedCount;

    return (
        <Box className="tasks-page">
            <Paper elevation={0} className="tasks-card">
                <Box className="tasks-header">
                    <Typography component="h1" className="tasks-title">
                        Moje zadania
                    </Typography>

                    <Typography component="p" className="tasks-subtitle">
                        Wszystkie: <strong>{todos.length}</strong> | Aktywne:{' '}
                        <strong>{activeCount}</strong> | Ukończone:{' '}
                        <strong>{completedCount}</strong>
                    </Typography>

                    <p className="visually-hidden" role="status" aria-live="polite">
                        Wyświetlono {filteredTodos.length} zadań. Aktywny filtr:{' '}
                        {filter === 'all'
                            ? 'wszystkie'
                            : filter === 'active'
                                ? 'aktywne'
                                : 'ukończone'}
                        .
                    </p>
                </Box>

                <Box className="tasks-add">
                    <button
                        ref={addButtonRef}
                        type="button"
                        className="btn btn-fab"
                        onClick={() => setIsAddModalOpen(true)}
                        aria-haspopup="dialog"
                        aria-expanded={isAddModalOpen}
                    >
                        + Dodaj zadanie
                    </button>
                </Box>

                <FilterBar activeFilter={filter} onFilterChange={setFilter} />

                <TodoList
                    todos={filteredTodos}
                    onToggle={handleToggle}
                    onDelete={handleDelete}
                />
            </Paper>

            <ModalDialog
                isOpen={isAddModalOpen}
                title="Dodaj nowe zadanie"
                onClose={() => setIsAddModalOpen(false)}
                triggerRef={addButtonRef}
            >
                <TodoInput onAdd={handleAdd} />
            </ModalDialog>
        </Box>
    );
}