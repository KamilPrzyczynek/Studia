import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import TasksPage from './pages/TasksPage';
import TaskDetailsPage from './pages/TaskDetailsPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
import { ProtectedRoute } from './components/ProtectedRoute';
import Nav from './components/Nav';
import './App.css';

export default function App() {
    const location = useLocation();

    const hideGlobalHeader =
        location.pathname === '/' ||
        location.pathname === '/login' ||
        location.pathname === '/register';

    return (
        <div className="app-shell">
            {!hideGlobalHeader && <Nav />}

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