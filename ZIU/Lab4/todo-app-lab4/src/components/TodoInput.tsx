import { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

interface TodoInputProps {
    onAdd: (title: string) => void;
}

export default function TodoInput({ onAdd }: TodoInputProps) {
    const [title, setTitle] = useState('');

    const handleSubmit = () => {
        const trimmedTitle = title.trim();

        if (!trimmedTitle) {
            return;
        }

        onAdd(trimmedTitle);
        setTitle('');
    };

    return (
        <Box sx={{ mb: 3 }}>
            <Typography
                component="h2"
                sx={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: '#333333',
                    mb: 1,
                }}
            >
                Dodaj nowe zadanie
            </Typography>

            <Box sx={{ display: 'flex', gap: 1 }}>
                <TextField
                    fullWidth
                    label="Treść zadania"
                    placeholder="Wpisz treść zadania..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleSubmit();
                        }
                    }}
                />

                <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    onClick={handleSubmit}
                    disabled={!title.trim()}
                    sx={{
                        minWidth: 120,
                        borderRadius: '12px',
                    }}
                >
                    Dodaj
                </Button>
            </Box>
        </Box>
    );
}