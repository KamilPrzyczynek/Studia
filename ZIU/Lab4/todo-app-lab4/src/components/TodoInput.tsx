import AddRoundedIcon from '@mui/icons-material/AddRounded';
import {
    Box,
    Button,
    InputBase,
    MenuItem,
    Select,
    Typography,
} from '@mui/material';
import { useState } from 'react';

type Priority = 'low' | 'medium' | 'high';

type TodoInputProps = {
    onAdd: (payload: { title: string; priority: Priority }) => void;
};

export default function TodoInput({ onAdd }: TodoInputProps) {
    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState<Priority>('medium');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const trimmed = title.trim();
        if (!trimmed) return;

        onAdd({ title: trimmed, priority });
        setTitle('');
        setPriority('medium');
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                border: '1px solid #E3E3E3',
                borderRadius: '20px',
                bgcolor: '#FFFFFF',
                px: 2,
                py: 2,
            }}
        >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                <Typography sx={{ fontSize: 15, fontWeight: 700, color: '#212121' }}>
                    Dodaj zadanie
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        gap: 1.25,
                    }}
                >
                    <Box
                        sx={{
                            flex: 1,
                            height: 46,
                            px: 1.5,
                            borderRadius: '14px',
                            border: '1px solid #DDDDDD',
                            bgcolor: '#FAFAFA',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <InputBase
                            fullWidth
                            placeholder="Np. Dokończyć widok task page"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            sx={{
                                fontSize: 14,
                                '& input::placeholder': {
                                    color: '#9A9A9A',
                                    opacity: 1,
                                },
                            }}
                        />
                    </Box>

                    <Select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value as Priority)}
                        size="small"
                        sx={{
                            minWidth: 148,
                            height: 46,
                            borderRadius: '14px',
                            bgcolor: '#FAFAFA',
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#DDDDDD',
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#CFCFCF',
                            },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#BDBDBD',
                            },
                        }}
                    >
                        <MenuItem value="low">Niski</MenuItem>
                        <MenuItem value="medium">Średni</MenuItem>
                        <MenuItem value="high">Wysoki</MenuItem>
                    </Select>

                    <Button
                        type="submit"
                        startIcon={<AddRoundedIcon />}
                        sx={{
                            height: 46,
                            px: 2.25,
                            borderRadius: '14px',
                            textTransform: 'none',
                            fontWeight: 700,
                            bgcolor: '#2F2F2F',
                            color: '#FFF',
                            boxShadow: 'none',
                            '&:hover': {
                                bgcolor: '#242424',
                                boxShadow: 'none',
                            },
                        }}
                    >
                        Dodaj
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}