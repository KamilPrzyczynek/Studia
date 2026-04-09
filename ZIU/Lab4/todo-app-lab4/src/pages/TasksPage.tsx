import { useState } from 'react';
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

    const completedCount = todos.filter((todo) => todo.completed).length;
    const activeCount = todos.length - completedCount;

    return (
        <Box
            sx={{
                p: { xs: 2, sm: 4 },
                backgroundColor: '#FFFFFF',
                minHeight: '100%',
            }}
        >
            <Paper
                elevation={0}
                sx={{
                    p: { xs: 2, sm: 3 },
                    borderRadius: '16px',
                    border: '1px solid #DADADA',
                    backgroundColor: '#FAFAFA',
                }}
            >
                <Box sx={{ mb: 3 }}>
                    <Typography
                        component="h1"
                        sx={{
                            fontSize: 28,
                            fontWeight: 700,
                            color: '#333333',
                            mb: 1,
                        }}
                    >
                        Moje zadania
                    </Typography>

                    <Typography
                        component="p"
                        sx={{
                            fontSize: 14,
                            color: '#666666',
                            lineHeight: 1.6,
                        }}
                    >
                        Wszystkie: <strong>{todos.length}</strong> | Aktywne:{' '}
                        <strong>{activeCount}</strong> | Ukończone:{' '}
                        <strong>{completedCount}</strong>
                    </Typography>
                </Box>

                <TodoInput onAdd={handleAdd} />

                <Box sx={{ mb: 3 }}>
                    <FilterBar
                        activeFilter={filter}
                        onFilterChange={setFilter}
                    />
                </Box>

                <TodoList
                    todos={todos}
                    filter={filter}
                    onToggle={handleToggle}
                    onDelete={handleDelete}
                />
            </Paper>
        </Box>
    );
}