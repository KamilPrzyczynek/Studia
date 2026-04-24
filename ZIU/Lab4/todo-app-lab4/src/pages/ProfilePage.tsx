import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ProfilePage.css';
import { getActiveUser, logoutUser, type ActiveUser } from '../utils/auth';
import { UserAvatar } from '../components/UserAvatar';

type AppTheme = 'light' | 'dark';

const THEME_KEY = 'todo-app-theme';

interface TaskItem {
    id: string | number;
    title?: string;
    description?: string;
    completed?: boolean;
    done?: boolean;
    status?: string;
    ownerEmail?: string;
    userEmail?: string;
    email?: string;
    assignedTo?: string;
    assignedUserEmail?: string;
    userId?: string;
    ownerId?: string;
}

function readJson<T>(key: string, fallback: T): T {
    const raw = localStorage.getItem(key);

    if (!raw) {
        return fallback;
    }

    try {
        return JSON.parse(raw) as T;
    } catch {
        localStorage.removeItem(key);
        return fallback;
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

function getTasksStorageKey(user: ActiveUser | null): string {
    const email = user?.email?.trim().toLowerCase();

    if (!email) {
        return 'todo-app-tasks-guest';
    }

    return `todo-app-tasks-${email}`;
}

function readTasksForUser(user: ActiveUser | null): TaskItem[] {
    const storageKey = getTasksStorageKey(user);
    return readJson<TaskItem[]>(storageKey, []);
}

function getUserDisplayName(user: ActiveUser | null): string {
    if (!user) {
        return 'Użytkownik';
    }

    const firstName = user.firstName?.trim() ?? '';
    const lastName = user.lastName?.trim() ?? '';
    const joined = `${firstName} ${lastName}`.trim();

    if (joined) {
        return joined;
    }

    if (firstName) {
        return firstName;
    }

    if (user.email?.trim()) {
        return user.email.trim();
    }

    return 'Użytkownik';
}

function isTaskCompleted(task: TaskItem): boolean {
    if (typeof task.completed === 'boolean') {
        return task.completed;
    }

    if (typeof task.done === 'boolean') {
        return task.done;
    }

    if (typeof task.status === 'string') {
        const normalized = task.status.toLowerCase();

        return (
            normalized === 'done' ||
            normalized === 'completed' ||
            normalized === 'finished' ||
            normalized === 'ukończone' ||
            normalized === 'zakończone'
        );
    }

    return false;
}

export default function ProfilePage() {
    const navigate = useNavigate();
    const location = useLocation();

    const [theme, setTheme] = useState<AppTheme>(readTheme());
    const [refreshKey, setRefreshKey] = useState(0);

    useEffect(() => {
        applyTheme(readTheme());
    }, []);

    useEffect(() => {
        const refreshProfileData = () => {
            setRefreshKey((prev) => prev + 1);
        };

        window.addEventListener('storage', refreshProfileData);
        window.addEventListener('focus', refreshProfileData);

        return () => {
            window.removeEventListener('storage', refreshProfileData);
            window.removeEventListener('focus', refreshProfileData);
        };
    }, []);

    const activeUser = useMemo(() => {
        return getActiveUser();
    }, [location.pathname, refreshKey]);

    const tasks = useMemo(() => {
        return readTasksForUser(activeUser);
    }, [activeUser, location.pathname, refreshKey]);

    const fullName = useMemo(() => {
        return getUserDisplayName(activeUser);
    }, [activeUser]);

    const completedTasksCount = useMemo(() => {
        return tasks.filter(isTaskCompleted).length;
    }, [tasks]);

    const activeTasksCount = useMemo(() => {
        return tasks.filter((task) => !isTaskCompleted(task)).length;
    }, [tasks]);

    const allTasksCount = tasks.length;

    const userRole = activeUser?.role?.trim() || 'Użytkownik';

    const handleToggleTheme = () => {
        const nextTheme: AppTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(nextTheme);
        applyTheme(nextTheme);
    };

    const handleLogout = () => {
        logoutUser();
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
                    <UserAvatar
                        firstName={activeUser?.firstName}
                        lastName={activeUser?.lastName}
                        email={activeUser?.email}
                        avatar={activeUser?.avatar}
                        size="large"
                    />

                    <div className="profile-user-info">
                        <h1>{fullName}</h1>
                        <span className="profile-role-badge">{userRole}</span>
                    </div>
                </div>

                <div className="profile-divider" aria-hidden="true" />

                <section className="profile-section">
                    <h2>Statystyki</h2>

                    <div className="profile-stats-grid">
                        <article className="profile-stat-card">
                            <span className="profile-stat-label">Ukończone zadania</span>
                            <strong className="profile-stat-value">{completedTasksCount}</strong>
                            <div className="profile-stat-bar" aria-hidden="true" />
                        </article>

                        <article className="profile-stat-card">
                            <span className="profile-stat-label">Aktywne zadania</span>
                            <strong className="profile-stat-value">{activeTasksCount}</strong>
                            <div className="profile-stat-bar" aria-hidden="true" />
                        </article>

                        <article className="profile-stat-card">
                            <span className="profile-stat-label">Wszystkie zadania</span>
                            <strong className="profile-stat-value">{allTasksCount}</strong>
                            <div className="profile-stat-bar" aria-hidden="true" />
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
                            <div className="profile-action-icon" aria-hidden="true">
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
                            <div className="profile-action-icon profile-action-icon-settings" aria-hidden="true">
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
                            <div className="profile-action-icon profile-action-icon-logout" aria-hidden="true">
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
                                className={`profile-theme-toggle ${theme === 'dark' ? 'is-dark' : ''}`}
                                onClick={handleToggleTheme}
                                aria-label={`Przełącz motyw aplikacji. Aktualny motyw: ${theme === 'dark' ? 'ciemny' : 'jasny'}`}
                                aria-pressed={theme === 'dark'}
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