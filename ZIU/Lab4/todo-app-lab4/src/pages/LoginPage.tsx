import { useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import './AuthPages.css';
import { getActiveUser } from '../utils/auth';

const USERS_STORAGE_KEY = 'todo-app-users';
const ACTIVE_USER_KEY = 'todo-app-active-user';

interface StoredUser {
    firstName: string;
    email: string;
    password: string;
}

export default function LoginPage() {
    const navigate = useNavigate();
    const location = useLocation();

    const activeUser = getActiveUser();
    const redirectTo = (location.state as { from?: string } | null)?.from || '/';

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    if (activeUser) {
        return <Navigate to="/" replace />;
    }

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        const rawUsers = localStorage.getItem(USERS_STORAGE_KEY);
        const users: StoredUser[] = rawUsers ? JSON.parse(rawUsers) : [];

        const foundUser = users.find(
            (user) =>
                user.email.trim().toLowerCase() === email.trim().toLowerCase() &&
                user.password === password
        );

        if (!foundUser) {
            setErrorMessage('Niepoprawny e-mail lub hasło.');
            return;
        }

        localStorage.setItem(
            ACTIVE_USER_KEY,
            JSON.stringify({
                firstName: foundUser.firstName,
                email: foundUser.email,
            })
        );

        setErrorMessage('');
        navigate(redirectTo, { replace: true });
    };

    return (
        <section className="auth-page">
            <div className="auth-card">
                <div className="auth-card-header">
                    <h1>Logowanie</h1>
                    <p>Zaloguj się, aby przejść do aplikacji</p>
                </div>

                <form className="auth-form" onSubmit={handleLogin}>
                    <div className="auth-field">
                        <label htmlFor="login-email">E-mail</label>
                        <input
                            id="login-email"
                            type="email"
                            placeholder="jan.kowalski@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            aria-invalid={!!errorMessage}
                            aria-describedby={errorMessage ? 'login-error' : undefined}
                        />
                    </div>

                    <div className="auth-field">
                        <label htmlFor="login-password">Hasło</label>
                        <input
                            id="login-password"
                            type="password"
                            placeholder="••••••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            aria-invalid={!!errorMessage}
                            aria-describedby={errorMessage ? 'login-error' : undefined}
                        />
                    </div>

                    {errorMessage && (
                        <p id="login-error" className="auth-error" role="alert">
                            {errorMessage}
                        </p>
                    )}

                    <div className="auth-actions">
                        <button type="submit" className="auth-primary-button">
                            Zaloguj się
                        </button>

                        <Link to="/register" className="auth-secondary-button">
                            Utwórz konto
                        </Link>
                    </div>
                </form>
            </div>
        </section>
    );
}