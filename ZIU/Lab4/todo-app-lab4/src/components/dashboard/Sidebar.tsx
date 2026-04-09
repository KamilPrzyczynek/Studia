import {
    Drawer,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography,
    Divider,
    Avatar,
    Box,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TaskIcon from '@mui/icons-material/Task';
import SettingsIcon from '@mui/icons-material/Settings';
import { NavLink } from 'react-router-dom';

const DRAWER_WIDTH = 240;

const navItems = [
    { label: 'Dashboard', icon: DashboardIcon, path: '/dashboard' },
    { label: 'Zadania', icon: TaskIcon, path: '/tasks' },
    { label: 'Ustawienia', icon: SettingsIcon, path: '/settings' },
];

export default function Sidebar() {
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: DRAWER_WIDTH,
                flexShrink: 0,
                display: { xs: 'none', sm: 'block' },
                '& .MuiDrawer-paper': {
                    width: DRAWER_WIDTH,
                    boxSizing: 'border-box',
                    bgcolor: '#F5F5F5',
                    color: '#333333',
                    borderRight: '1px solid #DADADA',
                },
            }}
        >
            <Toolbar
                sx={{
                    minHeight: '88px !important',
                    px: 4,
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Box
                    sx={{
                        width: 120,
                        height: 36,
                        borderRadius: '8px',
                        bgcolor: '#D9D9D9',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Typography component="span" sx={{ fontSize: 14, fontWeight: 700, color: '#555' }}>
                        LOGO
                    </Typography>
                </Box>
            </Toolbar>

            <Divider sx={{ borderColor: '#DADADA' }} />

            <List sx={{ px: 2, py: 2 }}>
                {navItems.map((item) => {
                    const Icon = item.icon;

                    return (
                        <ListItemButton
                            key={item.label}
                            component={NavLink}
                            to={item.path}
                            sx={{
                                minHeight: 44,
                                borderRadius: '10px',
                                mb: 1,
                                color: '#666666',
                                '&.active': {
                                    bgcolor: '#E9E9E9',
                                    color: '#333333',
                                    fontWeight: 700,
                                },
                                '&:hover': {
                                    bgcolor: '#EEEEEE',
                                },
                            }}
                        >
                            <ListItemIcon sx={{ minWidth: 40, color: 'inherit' }}>
                                <Icon />
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Typography
                                        component="span"
                                        sx={{ fontSize: 15, fontWeight: 'inherit' }}
                                    >
                                        {item.label}
                                    </Typography>
                                }
                            />
                        </ListItemButton>
                    );
                })}
            </List>

            <Box sx={{ flexGrow: 1 }} />

            <Box
                sx={{
                    p: 2,
                    mx: 2,
                    mb: 2,
                    borderRadius: '12px',
                    border: '1px solid #DADADA',
                    background: '#FAFAFA',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                }}
            >
                <Avatar
                    sx={{
                        width: 36,
                        height: 36,
                        bgcolor: '#D9D9D9',
                        color: '#555555',
                        fontSize: 14,
                        fontWeight: 700,
                    }}
                >
                    U
                </Avatar>

                <Box>
                    <Typography component="p" sx={{ fontSize: 14, fontWeight: 700, color: '#333333' }}>
                        Użytkownik
                    </Typography>
                    <Typography component="p" sx={{ fontSize: 12, color: '#666666' }}>
                        Konto aktywne
                    </Typography>
                </Box>
            </Box>
        </Drawer>
    );
}