import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfilePage.css';

type AppTheme = 'light' | 'dark';

const ACTIVE_USER_KEY = 'todo-app-active-user';
const THEME_KEY = 'todo-app-theme';

interface ActiveUser {
    firstName: string;
    email: string;
}

function readActiveUser(): ActiveUser | null {
    const raw = localStorage.getItem(ACTIVE_USER_KEY);

    if (!raw) {
        return null;
    }

    try {
        return JSON.parse(raw) as ActiveUser;
    } catch {
        localStorage.removeItem(ACTIVE_USER_KEY);
        return null;
    }
}

function readTheme(): AppTheme {
    return localStorage.getItem(THEME_KEY) === 'dark' ? 'dark' : 'light';
}

function applyTheme(theme: AppTheme) {
    document.body.dataset.appTheme = theme;
    document.documentElement.dataset.appTheme = theme;
    localStorage.setItem(THEME_KEY, theme);
}

export default function ProfilePage() {
    const navigate = useNavigate();
    const [theme, setTheme] = useState<AppTheme>(readTheme());

    const activeUser = readActiveUser();

    const fullName = activeUser?.firstName?.trim()
        ? `${activeUser.firstName} Kowalski`
        : 'Jan Kowalski';

    const initials = useMemo(() => {
        return fullName
            .split(' ')
            .map((part) => part[0])
            .join('')
            .slice(0, 2)
            .toUpperCase();
    }, [fullName]);

    const handleToggleTheme = () => {
        const nextTheme: AppTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(nextTheme);
        applyTheme(nextTheme);
    };

    const handleLogout = () => {
        localStorage.removeItem(ACTIVE_USER_KEY);
        navigate('/login');
    };

    return (
        <section className="profile-page">
            <div className="profile-shell">
                <div className="profile-topbar">
                    <div className="profile-logo-box">LOGO</div>

                    <button
                        type="button"
                        className="profile-settings-button"
                        onClick={() => navigate('/settings')}
                    >
                        Edytuj ustawienia
                    </button>
                </div>

                <div className="profile-header">
                    <div className="profile-avatar">{initials}</div>

                    <div className="profile-user-info">
                        <h1>{fullName}</h1>
                        <span className="profile-role-badge">Projektant UX</span>
                    </div>
                </div>

                <div className="profile-divider" />

                <section className="profile-section">
                    <h2>Statystyki</h2>

                    <div className="profile-stats-grid">
                        <article className="profile-stat-card">
                            <span className="profile-stat-label">Ukończone zadania</span>
                            <strong className="profile-stat-value">24</strong>
                            <div className="profile-stat-bar" />
                        </article>

                        <article className="profile-stat-card">
                            <span className="profile-stat-label">Aktywne projekty</span>
                            <strong className="profile-stat-value">5</strong>
                            <div className="profile-stat-bar" />
                        </article>

                        <article className="profile-stat-card">
                            <span className="profile-stat-label">Komentarze</span>
                            <strong className="profile-stat-value">18</strong>
                            <div className="profile-stat-bar" />
                        </article>
                    </div>
                </section>

                <section className="profile-lower-grid">
                    <article className="profile-actions-card">
                        <h2>Akcje</h2>

                        <button
                            type="button"
                            className="profile-action-row"
                            onClick={() => navigate('/profile')}
                        >
                            <div className="profile-action-icon">
                                <span className="icon-user-head" />
                                <span className="icon-user-body" />
                            </div>

                            <div className="profile-action-copy">
                                <strong>Mój profil</strong>
                                <span>Zobacz dane użytkownika i aktywność</span>
                            </div>

                            <span className="profile-action-arrow">›</span>
                        </button>

                        <button
                            type="button"
                            className="profile-action-row"
                            onClick={() => navigate('/settings')}
                        >
                            <div className="profile-action-icon profile-action-icon-settings">
                                <span className="icon-gear-outer" />
                                <span className="icon-gear-inner" />
                            </div>

                            <div className="profile-action-copy">
                                <strong>Ustawienia konta</strong>
                                <span>Zmień hasło, e-mail i preferencje</span>
                            </div>

                            <span className="profile-action-arrow">›</span>
                        </button>

                        <button
                            type="button"
                            className="profile-action-row"
                            onClick={handleLogout}
                        >
                            <div className="profile-action-icon profile-action-icon-logout">
                                <span className="icon-door" />
                                <span className="icon-exit-line" />
                                <span className="icon-exit-arrow" />
                            </div>

                            <div className="profile-action-copy">
                                <strong>Wyloguj</strong>
                                <span>Zakończ bieżącą sesję użytkownika</span>
                            </div>

                            <span className="profile-action-arrow">›</span>
                        </button>
                    </article>

                    <aside className="profile-theme-card">
                        <h2>Motyw aplikacji</h2>
                        <p>Przełącz między trybem jasnym i ciemnym</p>

                        <div className="profile-theme-row">
                            <span className={theme === 'light' ? 'is-active' : ''}>Light</span>

                            <button
                                type="button"
                                className={`profile-theme-toggle ${
                                    theme === 'dark' ? 'is-dark' : ''
                                }`}
                                onClick={handleToggleTheme}
                                aria-label="Przełącz motyw aplikacji"
                            >
                <span className="profile-theme-knob">
                  <span className="profile-theme-knob-dot" />
                </span>
                            </button>

                            <span className={theme === 'dark' ? 'is-active' : ''}>Dark</span>
                        </div>

                        <div className="profile-theme-demo-row">
                            <div className="profile-demo-surface">Surface</div>
                            <div className="profile-demo-primary">Primary</div>
                        </div>
                    </aside>
                </section>

                <div className="profile-footer-hint" />
            </div>
        </section>
    );
}