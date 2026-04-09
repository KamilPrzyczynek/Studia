import { useMemo } from 'react';
import {
    List,
    ListItem,
    ListItemIcon,
    Checkbox,
    IconButton,
    Typography,
    Paper,
    Chip,
    Box,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import type { FilterType, Todo } from '../types/todo.types';

interface TodoListProps {
    todos: Todo[];
    filter: FilterType;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

export default function TodoList({
                                     todos,
                                     filter,
                                     onToggle,
                                     onDelete,
                                 }: TodoListProps) {
    const filteredTodos = useMemo(() => {
        if (filter === 'active') {
            return todos.filter((todo) => !todo.completed);
        }

        if (filter === 'completed') {
            return todos.filter((todo) => todo.completed);
        }

        return todos;
    }, [todos, filter]);

    if (filteredTodos.length === 0) {
        return (
            <Typography
                component="p"
                color="text.secondary"
                sx={{ mt: 4, textAlign: 'center' }}
            >
                Brak zadań. Dodaj pierwsze!
            </Typography>
        );
    }

    return (
        <Paper
            variant="outlined"
            sx={{
                overflow: 'hidden',
                borderRadius: '16px',
                border: '1px solid #DADADA',
                backgroundColor: '#FFFFFF',
            }}
        >
            <List disablePadding>
                {filteredTodos.map((todo, idx) => (
                    <ListItem
                        key={todo.id}
                        divider={idx < filteredTodos.length - 1}
                        sx={{
                            alignItems: 'center',
                            backgroundColor: todo.completed ? '#FAFAFA' : '#FFFFFF',
                            borderBottom:
                                idx < filteredTodos.length - 1 ? '1px solid #EAEAEA' : 'none',
                        }}
                        secondaryAction={
                            <IconButton
                                edge="end"
                                color="error"
                                onClick={() => onDelete(todo.id)}
                                aria-label={`Usuń zadanie ${todo.title}`}
                            >
                                <DeleteIcon />
                            </IconButton>
                        }
                    >
                        <ListItemIcon sx={{ minWidth: 40 }}>
                            <Checkbox
                                checked={todo.completed}
                                onChange={() => onToggle(todo.id)}
                                slotProps={{
                                    input: {
                                        'aria-label': todo.title,
                                    },
                                }}
                            />
                        </ListItemIcon>

                        <Box sx={{ flex: 1, pr: 6 }}>
                            <Typography
                                component="p"
                                sx={{
                                    fontSize: 16,
                                    textDecoration: todo.completed ? 'line-through' : 'none',
                                    color: todo.completed ? '#999999' : '#333333',
                                    mb: todo.dueDate ? 0.5 : 0,
                                }}
                            >
                                {todo.title}
                            </Typography>

                            {todo.dueDate ? (
                                <Typography
                                    component="p"
                                    sx={{
                                        fontSize: 13,
                                        color: '#666666',
                                    }}
                                >
                                    Termin: {todo.dueDate}
                                </Typography>
                            ) : null}
                        </Box>

                        {todo.completed ? (
                            <Chip
                                label="Ukończone"
                                size="small"
                                color="success"
                                sx={{ mr: 1 }}
                            />
                        ) : null}
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
}