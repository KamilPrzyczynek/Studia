import type { Todo } from '../types/todo.types';

interface TodoItemProps {
    todo: Todo;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
    return (
        <li className="todo-item">
            <label className="todo-left">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => onToggle(todo.id)}
                />
                <span
                    style={{
                        textDecoration: todo.completed ? 'line-through' : 'none',
                        color: todo.completed ? '#888' : '#222',
                    }}
                >
          {todo.title}
        </span>
            </label>

            <button className="button danger" onClick={() => onDelete(todo.id)}>
                Usuń
            </button>
        </li>
    );
}