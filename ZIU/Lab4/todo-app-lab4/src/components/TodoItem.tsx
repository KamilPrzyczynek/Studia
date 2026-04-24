import './TodoItem.css';
import { Button } from './Button';
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
                    aria-label={`Oznacz zadanie ${todo.title} jako ${
                        todo.completed ? 'nieukończone' : 'ukończone'
                    }`}
                />

                <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
          {todo.title}
        </span>
            </label>

            <Button
                label="Usuń"
                variant="ghost"
                size="small"
                ariaLabel={`Usuń zadanie ${todo.title}`}
                onClick={() => onDelete(todo.id)}
            />
        </li>
    );
}