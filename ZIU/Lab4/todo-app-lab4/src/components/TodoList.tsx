import type { Todo } from '../types/todo.types';

interface TodoListProps {
    todos: Todo[];
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

export default function TodoList({
                                     todos,
                                     onToggle,
                                     onDelete,
                                 }: TodoListProps) {
    if (todos.length === 0) {
        return <p className="todo-list-empty">Brak zadań do wyświetlenia.</p>;
    }

    return (
        <div className="todo-list-shell">
            <ul className="task-grid">
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        className={`task-card ${
                            todo.completed ? 'task-card--completed' : ''
                        }`}
                    >
                        {/* THUMBNAIL */}
                        <div className="task-card__thumbnail">
                            <img
                                src={`https://picsum.photos/seed/${todo.id}/600/400`}
                                alt="Miniatura zadania"
                            />
                        </div>

                        <div className="task-card__top">
                            <label className="task-card__checkbox-row">
                                <input
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={() => onToggle(todo.id)}
                                    aria-label={todo.title}
                                    className="task-card__checkbox"
                                />
                                <span
                                    className={`task-card__title ${
                                        todo.completed
                                            ? 'task-card__title--completed'
                                            : ''
                                    }`}
                                >
                        {todo.title}
                    </span>
                            </label>
                        </div>

                        <div className="task-card__body">
                            {todo.description ? (
                                <p className="task-card__description">
                                    {todo.description}
                                </p>
                            ) : (
                                <p className="task-card__description task-card__description--empty">
                                    Brak opisu zadania.
                                </p>
                            )}
                        </div>

                        <div className="task-card__meta">
                <span className="task-card__meta-item">
                    {todo.dueDate ? `Termin: ${todo.dueDate}` : 'Termin: brak'}
                </span>

                            <span className={`task-card__priority priority-${todo.priority}`}>
                    {todo.priority === 'high'
                        ? 'Wysoki'
                        : todo.priority === 'medium'
                            ? 'Średni'
                            : 'Niski'}
                </span>
                        </div>

                        <div className="task-card__actions">
                            <button
                                type="button"
                                onClick={() => onDelete(todo.id)}
                                className="task-card__delete-button"
                            >
                                Usuń
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}