import './Card.css';
import type { Todo } from '../types/todo.types';

interface CardProps {
    todo: Todo;
    onToggle: (id: string) => void;
    onOpen: (id: string) => void;
}

function getPriorityLabel(priority: Todo['priority']) {
    if (priority === 'high') return 'Wysoki';
    if (priority === 'medium') return 'Średni';
    return 'Niski';
}

export function Card({ todo, onToggle, onOpen }: CardProps) {
    return (
        <article
            className={`task-card ${todo.completed ? 'is-completed' : ''}`}
            role="button"
            tabIndex={0}
            aria-label={`Otwórz szczegóły zadania ${todo.title}`}
            onClick={() => onOpen(todo.id)}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onOpen(todo.id);
                }
            }}
        >
            <div className="task-card-left">
                <button
                    type="button"
                    className={`task-checkbox ${todo.completed ? 'checked' : ''}`}
                    onClick={(e) => {
                        e.stopPropagation();
                        onToggle(todo.id);
                    }}
                    aria-label={
                        todo.completed
                            ? 'Oznacz jako nieukończone'
                            : 'Oznacz jako ukończone'
                    }
                >
                    {todo.completed ? '✓' : ''}
                </button>

                <div className="task-copy">
                    <h3 className={`task-title ${todo.completed ? 'completed' : ''}`}>
                        {todo.title}
                    </h3>
                    <p className="task-description">
                        {todo.description || 'Brak opisu zadania'}
                    </p>
                </div>
            </div>

            <div className="task-card-right">
        <span className={`priority-badge priority-${todo.priority}`}>
          {getPriorityLabel(todo.priority)}
        </span>
                <span className="task-date">
          {todo.dueDate ? todo.dueDate : 'Brak terminu'}
        </span>
            </div>
        </article>
    );
}