import { NavLink, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import TasksPage from './pages/TasksPage';
import TaskDetailsPage from './pages/TaskDetailsPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
import { ProtectedRoute } from './components/ProtectedRoute';
import { UserAvatar } from './components/UserAvatar';
import { getActiveUser, logoutUser } from './utils/auth';
import './App.css';

export default function App() {
    const location = useLocation();
    const navigate = useNavigate();
    const activeUser = getActiveUser();

    const hideGlobalHeader =
        location.pathname === '/' ||
        location.pathname === '/login' ||
        location.pathname === '/register';

    const handleLogout = () => {
        logoutUser();
        navigate('/login');
    };

    return (
        <div className="app-shell">
            {!hideGlobalHeader && (
                <header className="app-header">
                    <div className="header-content">
                        <div className="logo-box">LOGO</div>

                        <nav className="top-nav desktop-only">
                            <NavLink
                                to="/tasks"
                                className={({ isActive }) =>
                                    isActive ? 'top-nav-link active' : 'top-nav-link'
                                }
                            >
                                Zadania
                            </NavLink>

                            <NavLink
                                to="/profile"
                                className={({ isActive }) =>
                                    isActive ? 'top-nav-link active' : 'top-nav-link'
                                }
                            >
                                Profil
                            </NavLink>

                            <NavLink
                                to="/settings"
                                className={({ isActive }) =>
                                    isActive ? 'top-nav-link active' : 'top-nav-link'
                                }
                            >
                                Ustawienia
                            </NavLink>
                        </nav>

                        <div className="app-header-right">
                            {activeUser && (
                                <span className="header-user-name">{activeUser.firstName}</span>
                            )}

                            <UserAvatar
                                firstName={activeUser?.firstName}
                                lastName={activeUser?.lastName}
                                email={activeUser?.email}
                                avatar={activeUser?.avatar}
                                size="medium"
                            />

                            <button
                                type="button"
                                className="header-logout-button"
                                onClick={handleLogout}
                            >
                                Wyloguj
                            </button>
                        </div>
                    </div>
                </header>
            )}

            <main className="page-container">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />

                    <Route
                        path="/tasks"
                        element={
                            <ProtectedRoute>
                                <TasksPage />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/tasks/:id"
                        element={
                            <ProtectedRoute>
                                <TaskDetailsPage />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/profile"
                        element={
                            <ProtectedRoute>
                                <ProfilePage />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/settings"
                        element={
                            <ProtectedRoute>
                                <SettingsPage />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </main>
        </div>
    );
}