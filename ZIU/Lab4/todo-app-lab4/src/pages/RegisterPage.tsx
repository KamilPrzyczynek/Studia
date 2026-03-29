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

export default function RegisterPage() {
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();

        if (!firstName.trim() || !email.trim() || !password.trim()) {
            setErrorMessage('Uzupełnij wszystkie wymagane pola.');
            return;
        }

        if (password !== repeatPassword) {
            setErrorMessage('Hasła nie są takie same.');
            return;
        }

        const rawUsers = localStorage.getItem(USERS_STORAGE_KEY);
        const users: StoredUser[] = rawUsers ? JSON.parse(rawUsers) : [];

        const alreadyExists = users.some(
            (user) => user.email.trim().toLowerCase() === email.trim().toLowerCase()
        );

        if (alreadyExists) {
            setErrorMessage('Konto z tym adresem e-mail już istnieje.');
            return;
        }

        const newUser: StoredUser = {
            firstName: firstName.trim(),
            email: email.trim(),
            password,
        };

        const updatedUsers = [...users, newUser];

        localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(updatedUsers));
        localStorage.setItem(
            ACTIVE_USER_KEY,
            JSON.stringify({
                firstName: newUser.firstName,
                email: newUser.email,
            })
        );

        setErrorMessage('');
        navigate('/');
    };

    return (
        <section className="auth-page">
            <div className="auth-card auth-card-register">
                <div className="auth-card-header">
                    <h1>Rejestracja</h1>
                    <p>Załóż konto i rozpocznij pracę z aplikacją</p>
                </div>

                <form className="auth-form" onSubmit={handleRegister}>
                    <div className="auth-field">
                        <label htmlFor="register-first-name">Imię</label>
                        <input
                            id="register-first-name"
                            type="text"
                            placeholder="Jan"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>

                    <div className="auth-field">
                        <label htmlFor="register-email">E-mail</label>
                        <input
                            id="register-email"
                            type="email"
                            placeholder="jan.kowalski@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="auth-field">
                        <label htmlFor="register-password">Hasło</label>
                        <input
                            id="register-password"
                            type="password"
                            placeholder="••••••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="auth-field">
                        <label htmlFor="register-repeat-password">Powtórz hasło</label>
                        <input
                            id="register-repeat-password"
                            type="password"
                            placeholder="••••••••••••"
                            value={repeatPassword}
                            onChange={(e) => setRepeatPassword(e.target.value)}
                        />
                    </div>

                    {errorMessage && <p className="auth-error">{errorMessage}</p>}

                    <div className="auth-actions">
                        <button type="submit" className="auth-primary-button">
                            Załóż konto
                        </button>

                        <Link to="/login" className="auth-secondary-button">
                            Mam już konto
                        </Link>
                    </div>
                </form>
            </div>
        </section>
    );
}