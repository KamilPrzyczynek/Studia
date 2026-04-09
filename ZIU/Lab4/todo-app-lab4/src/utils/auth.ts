export const ACTIVE_USER_KEY = 'todo-app-active-user';

export interface ActiveUser {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    role?: string;
    avatar?: string;
}

export function getActiveUser(): ActiveUser | null {
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

export function saveActiveUser(user: ActiveUser): void {
    localStorage.setItem(ACTIVE_USER_KEY, JSON.stringify(user));
}

export function updateActiveUser(patch: Partial<ActiveUser>): ActiveUser | null {
    const currentUser = getActiveUser();

    if (!currentUser) {
        return null;
    }

    const updatedUser: ActiveUser = {
        ...currentUser,
        ...patch,
    };

    saveActiveUser(updatedUser);
    return updatedUser;
}

export function isAuthenticated(): boolean {
    return getActiveUser() !== null;
}

export function logoutUser(): void {
    localStorage.removeItem(ACTIVE_USER_KEY);
}