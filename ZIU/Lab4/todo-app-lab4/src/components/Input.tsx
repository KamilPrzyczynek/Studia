import './Input.css';

interface InputProps {
    label?: string;
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
    state?: 'default' | 'error' | 'disabled';
    helperText?: string;
    type?: 'text' | 'date';
    multiline?: boolean;
    rows?: number;
}

export function Input({
                          label,
                          placeholder,
                          value,
                          onChange,
                          state = 'default',
                          helperText,
                          type = 'text',
                          multiline = false,
                          rows = 4,
                      }: InputProps) {
    return (
        <div className={`input-group state-${state}`}>
            {label && <label className="input-label">{label}</label>}

            {multiline ? (
                <textarea
                    className="input-field"
                    placeholder={placeholder}
                    value={value}
                    disabled={state === 'disabled'}
                    rows={rows}
                    onChange={(e) => onChange(e.target.value)}
                />
            ) : (
                <input
                    className="input-field"
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    disabled={state === 'disabled'}
                    onChange={(e) => onChange(e.target.value)}
                />
            )}

            {state === 'error' && helperText && (
                <span className="helper-text">{helperText}</span>
            )}
        </div>
    );
}