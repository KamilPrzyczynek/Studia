export type PasswordStrength = 'słabe' | 'średnie' | 'silne';

export function getPasswordStrength(password: string): PasswordStrength {
    if (!password.trim()) {
        return 'słabe';
    }

    let score = 0;

    if (password.length >= 8) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;

    if (score <= 2) return 'słabe';
    if (score === 3) return 'średnie';
    return 'silne';
}