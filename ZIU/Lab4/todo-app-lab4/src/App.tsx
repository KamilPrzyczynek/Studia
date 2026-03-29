import { NavLink, Navigate, Route, Routes } from 'react-router-dom';
import TasksPage from './pages/TasksPage';
import TaskDetailsPage from './pages/TaskDetailsPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
import './App.css';

export default function App() {
    return (
        <div className="app-shell">
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

            <main className="page-container">
                <Routes>
                    <Route path="/" element={<Navigate to="/tasks" replace />} />
                    <Route path="/tasks" element={<TasksPage />} />
                    <Route path="/tasks/:id" element={<TaskDetailsPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/settings" element={<SettingsPage />} />
                </Routes>
            </main>
        </div>
    );
}