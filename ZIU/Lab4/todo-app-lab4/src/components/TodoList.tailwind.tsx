import type { Todo } from '../types/todo.types';

interface TodoListProps {
    todos: Todo[];
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

export default function TodoListTailwind({
                                             todos,
                                             onToggle,
                                             onDelete,
                                         }: TodoListProps) {
    if (todos.length === 0) {
        return (
            <p className="mt-8 text-center text-gray-400">
                Brak zadań. Dodaj pierwsze!
            </p>
        );
    }

    return (
        <ul className="overflow-hidden rounded-xl border border-gray-200 divide-y divide-gray-200">
            {todos.map((todo) => (
                <li
                    key={todo.id}
                    className={`flex items-center gap-3 px-4 py-3 ${
                        todo.completed ? 'bg-gray-50' : 'bg-white'
                    }`}
                >
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => onToggle(todo.id)}
                        aria-label={todo.title}
                        className="h-4 w-4 cursor-pointer rounded border-gray-300 text-brand-500 focus:ring-2 focus:ring-brand-500"
                    />

                    <div className="flex-1">
                        <span
                            className={`block text-sm ${
                                todo.completed
                                    ? 'text-gray-400 line-through'
                                    : 'text-gray-800'
                            }`}
                        >
                            {todo.title}
                        </span>

                        {todo.dueDate ? (
                            <span className="mt-1 block text-xs text-gray-500">
                                Termin: {todo.dueDate}
                            </span>
                        ) : null}
                    </div>

                    <button
                        type="button"
                        onClick={() => onDelete(todo.id)}
                        className="ml-auto text-sm font-medium text-red-600 transition-colors hover:text-red-700"
                    >
                        Usuń
                    </button>
                </li>
            ))}
        </ul>
    );
}