import './Input.css';

interface InputProps {
    label?: string;
    placeholder?: string;
    value: string;
    onChange: (val: string) => void;
    state?: 'default' | 'error' | 'disabled';
    helperText?: string;
}

export function Input({ label, placeholder, value, onChange, state = 'default', helperText }: InputProps) {
    return (
        <div className={`input-group state-${state}`}>
            {label && <label className="input-label">{label}</label>}
            <input
                className="input-field"
                placeholder={placeholder}
                value={value}
                disabled={state === 'disabled'}
                onChange={(e) => onChange(e.target.value)}
            />
            {state === 'error' && helperText && <span className="helper-text">{helperText}</span>}
        </div>
    );
}