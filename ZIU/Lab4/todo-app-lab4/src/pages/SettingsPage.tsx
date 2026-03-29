import { useMemo, useState } from 'react';
import './SettingsPage.css';

type AppTheme = 'light' | 'dark';

interface StoredProfileSettings {
    firstName: string;
    email: string;
    theme: AppTheme;
    emailNotifications: boolean;
    pushNotifications: boolean;
}

const STORAGE_KEY = 'todo-app-profile-settings';
const THEME_KEY = 'todo-app-theme';

const defaultSettings: StoredProfileSettings = {
    firstName: 'Jan',
    email: 'jan.kowalski@email.com',
    theme: 'light',
    emailNotifications: true,
    pushNotifications: false,
};

function readStoredSettings(): StoredProfileSettings {
    const raw = localStorage.getItem(STORAGE_KEY);

    if (!raw) {
        return defaultSettings;
    }

    try {
        const parsed = JSON.parse(raw) as Partial<StoredProfileSettings>;

        return {
            firstName: parsed.firstName || defaultSettings.firstName,
            email: parsed.email || defaultSettings.email,
            theme: parsed.theme === 'dark' ? 'dark' : 'light',
            emailNotifications:
                typeof parsed.emailNotifications === 'boolean'
                    ? parsed.emailNotifications
                    : defaultSettings.emailNotifications,
            pushNotifications:
                typeof parsed.pushNotifications === 'boolean'
                    ? parsed.pushNotifications
                    : defaultSettings.pushNotifications,
        };
    } catch {
        localStorage.removeItem(STORAGE_KEY);
        return defaultSettings;
    }
}

function readStoredTheme(): AppTheme {
    const rawTheme = localStorage.getItem(THEME_KEY);
    return rawTheme === 'dark' ? 'dark' : 'light';
}

function applyTheme(theme: AppTheme) {
    document.body.dataset.appTheme = theme;
    document.documentElement.dataset.appTheme = theme;
    localStorage.setItem(THEME_KEY, theme);
}

export default function SettingsPage() {
    const initialSettings = readStoredSettings();

    const [firstName, setFirstName] = useState(initialSettings.firstName);
    const [email, setEmail] = useState(initialSettings.email);
    const [newPassword, setNewPassword] = useState('');
    const [theme, setTheme] = useState<AppTheme>(readStoredTheme());
    const [emailNotifications, setEmailNotifications] = useState(
        initialSettings.emailNotifications
    );
    const [pushNotifications, setPushNotifications] = useState(
        initialSettings.pushNotifications
    );
    const [savedMessage, setSavedMessage] = useState('');

    const initials = useMemo(() => {
        const trimmed = firstName.trim();

        if (!trimmed) {
            return 'JK';
        }

        return trimmed
            .split(' ')
            .map((part) => part[0])
            .join('')
            .slice(0, 2)
            .toUpperCase();
    }, [firstName]);

    const handleThemeToggle = () => {
        const nextTheme: AppTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(nextTheme);
        applyTheme(nextTheme);

        const currentStored = readStoredSettings();
        const updatedSettings: StoredProfileSettings = {
            ...currentStored,
            theme: nextTheme,
        };

        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedSettings));
    };

    const handleSave = () => {
        const payload: StoredProfileSettings = {
            firstName: firstName.trim() || defaultSettings.firstName,
            email: email.trim() || defaultSettings.email,
            theme,
            emailNotifications,
            pushNotifications,
        };

        localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
        applyTheme(theme);

        setSavedMessage(
            newPassword.trim()
                ? 'Zapisano zmiany profilu i zaktualizowano hasło.'
                : 'Zapisano zmiany profilu.'
        );

        setNewPassword('');

        window.setTimeout(() => {
            setSavedMessage('');
        }, 2500);
    };

    return (
        <section className="settings-page">
            <div className="settings-header">
                <h1>Ustawienia profilu</h1>
                <p>Zarządzaj danymi konta i preferencjami</p>
            </div>

            <div className="settings-grid">
                <article className="settings-main-card">
                    <div className="settings-user-row">
                        <div className="settings-avatar">{initials}</div>

                        <div className="settings-user-copy">
                            <h2>{firstName || 'Jan Kowalski'}</h2>
                            <p>{email || 'jan.kowalski@email.com'}</p>
                        </div>
                    </div>

                    <div className="settings-field-group">
                        <label htmlFor="profile-first-name">Imię</label>
                        <input
                            id="profile-first-name"
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="Jan"
                        />
                    </div>

                    <div className="settings-field-group">
                        <label htmlFor="profile-email">E-mail</label>
                        <input
                            id="profile-email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="jan.kowalski@email.com"
                        />
                    </div>

                    <div className="settings-field-group">
                        <label htmlFor="profile-password">Nowe hasło</label>
                        <input
                            id="profile-password"
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            placeholder="••••••••••••"
                        />
                    </div>

                    <div className="settings-save-row">
                        <button
                            type="button"
                            className="settings-save-button"
                            onClick={handleSave}
                        >
                            Zapisz zmiany
                        </button>

                        {savedMessage && (
                            <span className="settings-saved-message">{savedMessage}</span>
                        )}
                    </div>
                </article>

                <aside className="settings-side-card">
                    <h2>Preferencje</h2>

                    <div className="settings-preference-block">
                        <h3>Motyw</h3>
                        <p>Jasny / ciemny</p>

                        <button
                            type="button"
                            className={`theme-toggle-button ${
                                theme === 'dark' ? 'is-dark' : ''
                            }`}
                            onClick={handleThemeToggle}
                            aria-label="Przełącz motyw"
                        >
                            <span className="theme-toggle-knob" />
                        </button>
                    </div>

                    <div className="settings-preference-block">
                        <h3>Powiadomienia</h3>
                        <div className="settings-divider" />

                        <label className="settings-check-row">
                            <input
                                type="checkbox"
                                checked={emailNotifications}
                                onChange={() => setEmailNotifications((prev) => !prev)}
                            />
                            <span>E-mailowe</span>
                        </label>

                        <label className="settings-check-row">
                            <input
                                type="checkbox"
                                checked={pushNotifications}
                                onChange={() => setPushNotifications((prev) => !prev)}
                            />
                            <span>Push</span>
                        </label>
                    </div>
                </aside>
            </div>
        </section>
    );
}