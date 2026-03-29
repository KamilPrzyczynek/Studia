import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AuthPages.css';

const USERS_STORAGE_KEY = 'todo-app-users';
const ACTIVE_USER_KEY = 'todo-app-active-user';

interface StoredUser {
    firstName: string;
    email: string;
    password: string;
}

export default function LoginPage() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

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
        navigate('/');
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
                        />
                    </div>

                    {errorMessage && <p className="auth-error">{errorMessage}</p>}

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