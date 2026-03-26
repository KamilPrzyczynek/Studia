import { useState } from 'react';

interface AddTodoFormProps {
    onAdd: (title: string) => void;
}

export function AddTodoForm({ onAdd }: AddTodoFormProps) {
    const [inputValue, setInputValue] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (inputValue.trim()) {
            onAdd(inputValue.trim());
            setInputValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="add-form">
            <input
                className="input"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Dodaj nowe zadanie"
            />
            <button type="submit" className="button primary">
                Dodaj
            </button>
        </form>
    );
}