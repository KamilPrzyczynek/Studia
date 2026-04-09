import AddRoundedIcon from '@mui/icons-material/AddRounded';
import {
    Box,
    Fab,
    ToggleButton,
    ToggleButtonGroup,
    Typography,
} from '@mui/material';
import { useMemo, useState } from 'react';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';

type FilterType = 'all' | 'active' | 'completed';

type Todo = {
    id: string;
    title: string;
    completed: boolean;
    priority: 'low' | 'medium' | 'high';
    date?: string;
};

const initialTodos: Todo[] = [
    { id: '1', title: 'Przestylować dashboard header', completed: false, priority: 'high', date: '12.04.2026' },
    { id: '2', title: 'Dopiąć spacing na task page', completed: false, priority: 'medium', date: '13.04.2026' },
    { id: '3', title: 'Poprawić checkboxy i listę', completed: true, priority: 'low', date: '14.04.2026' },
];

export default function TasksPage() {
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState<FilterType>('all');
    const [showInput, setShowInput] = useState(false);
    const [todos, setTodos] = useState<Todo[]>(initialTodos);

    const filteredTodos = useMemo(() => {
        return todos.filter((todo) => {
            const matchesFilter =
                filter === 'all'
                    ? true
                    : filter === 'active'
                        ? !todo.completed
                        : todo.completed;

            const matchesSearch = todo.title.toLowerCase().includes(search.toLowerCase());

            return matchesFilter && matchesSearch;
        });
    }, [todos, filter, search]);

    const handleAdd = (payload: { title: string; priority: 'low' | 'medium' | 'high' }) => {
        setTodos((prev) => [
            {
                id: crypto.randomUUID(),
                title: payload.title,
                completed: false,
                priority: payload.priority,
                date: new Date().toLocaleDateString('pl-PL'),
            },
            ...prev,
        ]);
        setShowInput(false);
    };

    const handleToggle = (id: string) => {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const handleDelete = (id: string) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };

    return (
        <DashboardLayout
            headerTitle="Moje zadania"
            headerSubtitle="Lista zadań z filtrowaniem i priorytetami"
            search={search}
            onSearchChange={setSearch}
        >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Box>
                    <Typography
                        sx={{
                            fontSize: { xs: 28, md: 34 },
                            fontWeight: 700,
                            letterSpacing: '-0.03em',
                            color: '#181818',
                            mb: 1,
                        }}
                    >
                        Task page
                    </Typography>

                    <Typography sx={{ fontSize: 14, color: '#767676', maxWidth: 620 }}>
                        Ten sam układ, tylko bardziej projektowy: ciaśniejsze proporcje, prostsze
                        szarości i lżejsze komponenty.
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', lg: 'row' },
                        justifyContent: 'space-between',
                        alignItems: { xs: 'stretch', lg: 'center' },
                        gap: 1.5,
                    }}
                >
                    <ToggleButtonGroup
                        exclusive
                        value={filter}
                        onChange={(_, value) => value && setFilter(value)}
                        sx={{
                            gap: 1,
                            flexWrap: 'wrap',
                            '& .MuiToggleButton-root': {
                                px: 1.75,
                                py: 0.9,
                                borderRadius: '999px !important',
                                border: '1px solid #DDDDDD !important',
                                bgcolor: '#FAFAFA',
                                color: '#666',
                                textTransform: 'none',
                                fontSize: 13,
                                fontWeight: 700,
                            },
                            '& .Mui-selected': {
                                bgcolor: '#2E2E2E !important',
                                color: '#FFF !important',
                                borderColor: '#2E2E2E !important',
                            },
                        }}
                    >
                        <ToggleButton value="all">Wszystkie</ToggleButton>
                        <ToggleButton value="active">Aktywne</ToggleButton>
                        <ToggleButton value="completed">Ukończone</ToggleButton>
                    </ToggleButtonGroup>
                </Box>

                {showInput && <TodoInput onAdd={handleAdd} />}

                <Box sx={{ maxWidth: 920 }}>
                    <TodoList
                        todos={filteredTodos}
                        onToggle={handleToggle}
                        onDelete={handleDelete}
                    />
                </Box>
            </Box>

            <Fab
                onClick={() => setShowInput((prev) => !prev)}
                sx={{
                    position: 'fixed',
                    right: 32,
                    bottom: 32,
                    width: 58,
                    height: 58,
                    boxShadow: 'none',
                    bgcolor: '#2F2F2F',
                    color: '#FFF',
                    '&:hover': {
                        bgcolor: '#242424',
                        boxShadow: 'none',
                    },
                }}
            >
                <AddRoundedIcon />
            </Fab>
        </DashboardLayout>
    );
}