import { useEffect, useMemo, useState } from 'react';
import './SettingsPage.css';
import {
    getActiveUser,
    saveActiveUser,
    type ActiveUser,
} from '../utils/auth';
import { UserAvatar } from '../components/UserAvatar';

type AppTheme = 'light' | 'dark';

interface StoredProfileSettings {
    theme: AppTheme;
    emailNotifications: boolean;
    pushNotifications: boolean;
}

const SETTINGS_STORAGE_KEY = 'todo-app-profile-settings';
const THEME_KEY = 'todo-app-theme';

const defaultSettings: StoredProfileSettings = {
    theme: 'light',
    emailNotifications: true,
    pushNotifications: false,
};

function readStoredSettings(): StoredProfileSettings {
    const raw = localStorage.getItem(SETTINGS_STORAGE_KEY);

    if (!raw) {
        return defaultSettings;
    }

    try {
        const parsed = JSON.parse(raw) as Partial<StoredProfileSettings>;

        return {
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
        localStorage.removeItem(SETTINGS_STORAGE_KEY);
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

function getDisplayName(user: ActiveUser | null, firstName: string, lastName: string) {
    const joined = `${firstName.trim()} ${lastName.trim()}`.trim();

    if (joined) {
        return joined;
    }

    if (firstName.trim()) {
        return firstName.trim();
    }

    if (user?.email?.trim()) {
        return user.email.trim();
    }

    return 'Użytkownik';
}

export default function SettingsPage() {
    const activeUser = getActiveUser();
    const initialSettings = readStoredSettings();

    const [firstName, setFirstName] = useState(activeUser?.firstName ?? '');
    const [lastName, setLastName] = useState(activeUser?.lastName ?? '');
    const [email, setEmail] = useState(activeUser?.email ?? '');
    const [avatar, setAvatar] = useState(activeUser?.avatar ?? '');
    const [newPassword, setNewPassword] = useState('');
    const [theme, setTheme] = useState<AppTheme>(readStoredTheme());
    const [emailNotifications, setEmailNotifications] = useState(
        initialSettings.emailNotifications
    );
    const [pushNotifications, setPushNotifications] = useState(
        initialSettings.pushNotifications
    );
    const [savedMessage, setSavedMessage] = useState('');

    useEffect(() => {
        applyTheme(theme);
    }, [theme]);

    const displayName = useMemo(() => {
        return getDisplayName(activeUser, firstName, lastName);
    }, [activeUser, firstName, lastName]);

    const handleThemeToggle = () => {
        const nextTheme: AppTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(nextTheme);
        applyTheme(nextTheme);

        const currentStored = readStoredSettings();
        const updatedSettings: StoredProfileSettings = {
            ...currentStored,
            theme: nextTheme,
        };

        localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(updatedSettings));
    };

    const handleSave = () => {
        if (!activeUser) {
            return;
        }

        const updatedUser: ActiveUser = {
            ...activeUser,
            firstName: firstName.trim() || activeUser.firstName,
            lastName: lastName.trim(),
            email: email.trim() || activeUser.email,
            avatar: avatar.trim(),
        };

        saveActiveUser(updatedUser);

        const settingsPayload: StoredProfileSettings = {
            theme,
            emailNotifications,
            pushNotifications,
        };

        localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settingsPayload));
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
                        <UserAvatar
                            firstName={firstName}
                            lastName={lastName}
                            email={email}
                            avatar={avatar}
                            size="large"
                        />

                        <div className="settings-user-copy">
                            <h2>{displayName}</h2>
                            <p>{email || 'brak e-maila'}</p>
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
                        <label htmlFor="profile-last-name">Nazwisko</label>
                        <input
                            id="profile-last-name"
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Kowalski"
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
                        <label htmlFor="profile-avatar">Link do avatara</label>
                        <input
                            id="profile-avatar"
                            type="text"
                            value={avatar}
                            onChange={(e) => setAvatar(e.target.value)}
                            placeholder="https://..."
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
                            className={`theme-toggle-button ${theme === 'dark' ? 'is-dark' : ''}`}
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