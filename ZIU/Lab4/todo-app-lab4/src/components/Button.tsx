import './Button.css';

interface ButtonProps {
    label: string;
    variant?: 'primary' | 'secondary' | 'ghost' | 'disabled';
    size?: 'medium' | 'large';
    onClick?: () => void;
    type?: 'button' | 'submit';
}

export function Button({
                           label,
                           variant = 'primary',
                           size = 'medium',
                           onClick,
                           type = 'button'
                       }: ButtonProps) {
    return (
        <button
            type={type}
            className={`btn btn-${variant} btn-${size}`}
            onClick={variant === 'disabled' ? undefined : onClick}
            disabled={variant === 'disabled'}
        >
            {label}
        </button>
    );
}