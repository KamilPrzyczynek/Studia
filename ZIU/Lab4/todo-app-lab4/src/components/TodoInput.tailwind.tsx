import { useState } from 'react';

interface TodoInputProps {
    onAdd: (title: string) => void;
}

export default function TodoInputTailwind({ onAdd }: TodoInputProps) {
    const [title, setTitle] = useState('');

    const handleSubmit = () => {
        const trimmedTitle = title.trim();

        if (!trimmedTitle) {
            return;
        }

        onAdd(trimmedTitle);
        setTitle('');
    };

    return (
        <div className="mb-6">
            <h2 className="mb-2 text-lg font-semibold text-gray-800">
                Dodaj nowe zadanie
            </h2>

            <div className="flex gap-2">
                <input
                    type="text"
                    placeholder="Wpisz treść zadania..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleSubmit();
                        }
                    }}
                    className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-sm placeholder:text-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-brand-500"
                />

                <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={!title.trim()}
                    className="rounded-lg bg-brand-500 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-40"
                >
                    Dodaj
                </button>
            </div>
        </div>
    );
}