import './UserAvatar.css';

interface UserAvatarProps {
    firstName?: string;
    lastName?: string;
    email?: string;
    avatar?: string;
    size?: 'small' | 'medium' | 'large';
}

function getInitials(firstName?: string, lastName?: string, email?: string) {
    const first = firstName?.trim()?.[0] ?? '';
    const last = lastName?.trim()?.[0] ?? '';

    const initials = `${first}${last}`.toUpperCase();

    if (initials) {
        return initials;
    }

    if (email?.trim()) {
        return email.trim()[0].toUpperCase();
    }

    return 'U';
}

export function UserAvatar({
                               firstName,
                               lastName,
                               email,
                               avatar,
                               size = 'medium',
                           }: UserAvatarProps) {
    const initials = getInitials(firstName, lastName, email);

    if (avatar?.trim()) {
        return (
            <div className={`user-avatar user-avatar-${size}`}>
                <img src={avatar} alt="Avatar użytkownika" className="user-avatar-image" />
            </div>
        );
    }

    return (
        <div className={`user-avatar user-avatar-${size}`}>
            <span>{initials}</span>
        </div>
    );
}