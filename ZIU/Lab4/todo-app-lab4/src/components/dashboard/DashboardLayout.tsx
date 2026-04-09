import { Box, Typography, Paper } from '@mui/material';
import Sidebar from './Sidebar';
import AppHeader from './AppHeader';
import StatsGrid from './StatsGrid';

export default function DashboardLayout() {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                bgcolor: '#FFFFFF',
            }}
        >
            <Sidebar />

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    ml: { xs: 0, sm: '240px' },
                    pt: '88px',
                    minHeight: '100vh',
                    bgcolor: '#FFFFFF',
                }}
            >
                <AppHeader />

                <Box
                    sx={{
                        px: { xs: 2, sm: 4 },
                        py: 4,
                    }}
                >
                    <Box sx={{ mb: 4 }}>
                        <StatsGrid />
                    </Box>

                    <Paper
                        elevation={0}
                        sx={{
                            p: 3,
                            borderRadius: '16px',
                            border: '1px solid #DADADA',
                            bgcolor: '#FAFAFA',
                            boxShadow: 'none',
                        }}
                    >
                        <Typography
                            component="h2"
                            sx={{
                                fontSize: 20,
                                fontWeight: 700,
                                color: '#333333',
                                mb: 1,
                            }}
                        >
                            Ostatnie informacje
                        </Typography>

                        <Typography
                            component="p"
                            sx={{
                                fontSize: 14,
                                color: '#666666',
                                lineHeight: 1.6,
                            }}
                        >
                            Tutaj możesz później dodać sekcję z ostatnimi zadaniami,
                            aktywnością użytkownika albo timeline.
                        </Typography>
                    </Paper>
                </Box>
            </Box>
        </Box>
    );
}