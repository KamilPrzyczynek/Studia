import { NavLink, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import TasksPage from './pages/TasksPage';
import TaskDetailsPage from './pages/TaskDetailsPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
import './App.css';

export default function App() {
    const location = useLocation();

    const hideGlobalHeader =
        location.pathname === '/' ||
        location.pathname === '/login' ||
        location.pathname === '/register';

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

                        <div className="header-avatar" />
                    </div>
                </header>
            )}

            <main className="page-container">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/tasks" element={<TasksPage />} />
                    <Route path="/tasks/:id" element={<TaskDetailsPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/settings" element={<SettingsPage />} />
                </Routes>
            </main>
        </div>
    );
}