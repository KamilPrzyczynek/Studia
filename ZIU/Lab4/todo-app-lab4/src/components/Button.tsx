import './Button.css';

interface ButtonProps {
    label: string;
    variant?:
        | 'primary'
        | 'secondary'
        | 'ghost'
        | 'danger'
        | 'chip'
        | 'chip-active'
        | 'fab'
        | 'disabled';
    size?: 'small' | 'medium' | 'large';
    onClick?: () => void;
    type?: 'button' | 'submit';
}

export function Button({
                           label,
                           variant = 'primary',
                           size = 'medium',
                           onClick,
                           type = 'button',
                       }: ButtonProps) {
    const isDisabled = variant === 'disabled';

    return (
        <button
            type={type}
            className={`btn btn-${variant} btn-${size}`}
            onClick={isDisabled ? undefined : onClick}
            disabled={isDisabled}
        >
            {label}
        </button>
    );
}