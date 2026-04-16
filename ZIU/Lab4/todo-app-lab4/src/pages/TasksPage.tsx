import { useMemo, useState } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';
import { FilterBar } from '../components/FilterBar';
import { useTodoContext } from '../context/useTodoContext';
import type { FilterType } from '../types/todo.types';
import './TasksPage.css';

export default function TasksPage() {
    const { state, dispatch } = useTodoContext();
    const { todos } = state;

    const [filter, setFilter] = useState<FilterType>('all');

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
                </Box>

                <Box className="tasks-add">
                    <TodoInput onAdd={handleAdd} />
                </Box>

                <FilterBar
                    activeFilter={filter}
                    onFilterChange={setFilter}
                />

                <TodoList
                    todos={filteredTodos}
                    onToggle={handleToggle}
                    onDelete={handleDelete}
                />
            </Paper>
        </Box>
    );
}