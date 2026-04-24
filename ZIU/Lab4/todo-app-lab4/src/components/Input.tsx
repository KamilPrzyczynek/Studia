import './Input.css';

interface InputProps {
    id: string;
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
                          id,
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
    const errorId = `${id}-error`;

    return (
        <div className={`input-group state-${state}`}>
            {label && (
                <label htmlFor={id} className="input-label">
                    {label}
                </label>
            )}

            {multiline ? (
                <textarea
                    id={id}
                    className="input-field"
                    placeholder={placeholder}
                    value={value}
                    disabled={state === 'disabled'}
                    rows={rows}
                    onChange={(e) => onChange(e.target.value)}
                    aria-invalid={state === 'error'}
                    aria-describedby={state === 'error' ? errorId : undefined}
                />
            ) : (
                <input
                    id={id}
                    className="input-field"
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    disabled={state === 'disabled'}
                    onChange={(e) => onChange(e.target.value)}
                    aria-invalid={state === 'error'}
                    aria-describedby={state === 'error' ? errorId : undefined}
                />
            )}

            {state === 'error' && helperText && (
                <span id={errorId} className="helper-text" role="alert">
          {helperText}
        </span>
            )}
        </div>
    );
}