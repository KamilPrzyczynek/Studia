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
                />
                <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
          {todo.title}
        </span>
            </label>

            <Button
                label="Usuń"
                variant="ghost"
                size="small"
                onClick={() => onDelete(todo.id)}
            />
        </li>
    );
}