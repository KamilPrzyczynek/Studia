import './TodoItem.css';
import { Button } from './Button';

export function TodoItem({ todo, onToggle, onDelete }: any) {
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
            <Button label="Usuń" variant="ghost" onClick={() => onDelete(todo.id)} />
        </li>
    );
}