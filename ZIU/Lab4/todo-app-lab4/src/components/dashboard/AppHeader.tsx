import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Badge,
    Box,
} from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

export default function AppHeader() {
    return (
        <AppBar
            position="fixed"
            elevation={0}
            color="inherit"
            sx={{
                width: { sm: 'calc(100% - 240px)' },
                ml: { sm: '240px' },
                height: 88,
                justifyContent: 'center',
                bgcolor: '#FFFFFF',
                borderBottom: '1px solid #DADADA',
                boxShadow: 'none',
            }}
        >
            <Toolbar
                sx={{
                    minHeight: '88px !important',
                    px: { xs: 2, sm: 4 },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <Box>
                    <Typography
                        component="h1"
                        sx={{
                            fontSize: 28,
                            fontWeight: 700,
                            color: '#333333',
                            lineHeight: 1.2,
                            mb: 0.5,
                        }}
                    >
                        Dashboard
                    </Typography>

                    <Typography
                        component="p"
                        sx={{
                            fontSize: 14,
                            color: '#666666',
                        }}
                    >
                        Przegląd aktywności i statystyk zadań
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <IconButton
                        aria-label="Przełącz motyw"
                        sx={{
                            width: 40,
                            height: 40,
                            borderRadius: '10px',
                            border: '1px solid #D0D0D0',
                            color: '#555555',
                            bgcolor: '#FFFFFF',
                        }}
                    >
                        <DarkModeOutlinedIcon fontSize="small" />
                    </IconButton>

                    <IconButton
                        aria-label="Powiadomienia"
                        sx={{
                            width: 40,
                            height: 40,
                            borderRadius: '10px',
                            border: '1px solid #D0D0D0',
                            color: '#555555',
                            bgcolor: '#FFFFFF',
                        }}
                    >
                        <Badge badgeContent={3} color="error">
                            <NotificationsNoneIcon fontSize="small" />
                        </Badge>
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
}