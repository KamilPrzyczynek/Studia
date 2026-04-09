import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import {
    Box,
    Checkbox,
    Chip,
    IconButton,
    Typography,
} from '@mui/material';

type TodoItemType = {
    id: string;
    title: string;
    completed: boolean;
    priority?: 'low' | 'medium' | 'high';
    date?: string;
};

type TodoListProps = {
    todos: TodoItemType[];
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
};

const priorityMap = {
    low: { label: 'Niski', bg: '#F1F1F1', color: '#666' },
    medium: { label: 'Średni', bg: '#ECECEC', color: '#4F4F4F' },
    high: { label: 'Wysoki', bg: '#E7E7E7', color: '#2E2E2E' },
};

export default function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
    if (!todos.length) {
        return (
            <Box
                sx={{
                    border: '1px dashed #D8D8D8',
                    borderRadius: '18px',
                    bgcolor: '#FCFCFC',
                    p: 4,
                    textAlign: 'center',
                }}
            >
                <Typography sx={{ fontSize: 15, color: '#7A7A7A' }}>
                    Brak zadań do wyświetlenia.
                </Typography>
            </Box>
        );
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.25 }}>
            {todos.map((todo) => {
                const priority = priorityMap[todo.priority ?? 'medium'];

                return (
                    <Box
                        key={todo.id}
                        sx={{
                            border: '1px solid #E3E3E3',
                            borderRadius: '18px',
                            bgcolor: todo.completed ? '#F7F7F7' : '#FFFFFF',
                            px: 2,
                            py: 1.5,
                            transition: 'all .18s ease',
                            '&:hover': {
                                borderColor: '#D6D6D6',
                                bgcolor: '#FCFCFC',
                            },
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                gap: 2,
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1.25,
                                    minWidth: 0,
                                }}
                            >
                                <Checkbox
                                    checked={todo.completed}
                                    onChange={() => onToggle(todo.id)}
                                    disableRipple
                                    sx={{
                                        p: 0.25,
                                        color: '#A0A0A0',
                                        '&.Mui-checked': {
                                            color: '#2F2F2F',
                                        },
                                        '& .MuiSvgIcon-root': {
                                            fontSize: 22,
                                        },
                                    }}
                                />

                                <Box sx={{ minWidth: 0 }}>
                                    <Typography
                                        sx={{
                                            fontSize: 15,
                                            fontWeight: 600,
                                            color: '#1E1E1E',
                                            textDecoration: todo.completed ? 'line-through' : 'none',
                                            opacity: todo.completed ? 0.55 : 1,
                                            mb: 0.5,
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                        }}
                                    >
                                        {todo.title}
                                    </Typography>

                                    <Box
                                        sx={{
                                            display: 'flex',
                                            gap: 1,
                                            alignItems: 'center',
                                            flexWrap: 'wrap',
                                        }}
                                    >
                                        <Chip
                                            label={priority.label}
                                            size="small"
                                            sx={{
                                                height: 24,
                                                borderRadius: '999px',
                                                bgcolor: priority.bg,
                                                color: priority.color,
                                                fontWeight: 700,
                                                fontSize: 12,
                                                border: '1px solid #E0E0E0',
                                            }}
                                        />

                                        {todo.date ? (
                                            <Typography sx={{ fontSize: 12, color: '#8A8A8A' }}>
                                                {todo.date}
                                            </Typography>
                                        ) : null}
                                    </Box>
                                </Box>
                            </Box>

                            <IconButton
                                onClick={() => onDelete(todo.id)}
                                sx={{
                                    width: 36,
                                    height: 36,
                                    borderRadius: '12px',
                                    border: '1px solid #E3E3E3',
                                    color: '#757575',
                                    bgcolor: '#FAFAFA',
                                    flexShrink: 0,
                                    '&:hover': {
                                        bgcolor: '#F1F1F1',
                                    },
                                }}
                            >
                                <DeleteOutlineRoundedIcon sx={{ fontSize: 18 }} />
                            </IconButton>
                        </Box>
                    </Box>
                );
            })}
        </Box>
    );
}