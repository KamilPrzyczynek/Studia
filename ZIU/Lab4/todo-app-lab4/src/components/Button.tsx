import './Button.css';

interface ButtonProps {
    label: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
    size?: 'small' | 'medium' | 'large';
    ariaLabel?: string;
    ariaPressed?: boolean;
    ariaExpanded?: boolean;
    ariaControls?: string;
    disabled?: boolean;
}

export function Button({
                           label,
                           onClick,
                           type = 'button',
                           variant = 'primary',
                           size = 'medium',
                           ariaLabel,
                           ariaPressed,
                           ariaExpanded,
                           ariaControls,
                           disabled = false,
                       }: ButtonProps) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`btn btn-${variant} btn-${size}`}
            aria-label={ariaLabel}
            aria-pressed={ariaPressed}
            aria-expanded={ariaExpanded}
            aria-controls={ariaControls}
        >
            {label}
        </button>
    );
}