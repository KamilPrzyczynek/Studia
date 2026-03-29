import { useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button } from '../components/Button';
import { mockTodos } from '../data/mockTodos';
import './TaskDetailsPage.css';

const mockComments = [
    {
        id: 'c1',
        author: 'Anna Kowalska',
        text: 'Makieta wygląda dobrze, ale warto jeszcze dopracować spacing sekcji.',
    },
    {
        id: 'c2',
        author: 'Jan Nowak',
        text: 'Zwróć uwagę na wersję mobilną i zachowanie filtrów po zmianie ekranu.',
    },
];

export default function TaskDetailsPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [comment, setComment] = useState('');

    const todo = useMemo(
        () => mockTodos.find((item) => item.id === id) ?? null,
        [id]
    );

    if (!todo) {
        return (
            <section className="details-page">
                <div className="details-not-found">
                    <h1>Nie znaleziono zadania</h1>
                    <p>Podane zadanie nie istnieje albo nie zostało jeszcze dodane.</p>
                    <Link to="/tasks" className="details-back-link">
                        Wróć do listy zadań
                    </Link>
                </div>
            </section>
        );
    }

    const priorityLabel =
        todo.priority === 'high'
            ? 'Wysoki'
            : todo.priority === 'medium'
                ? 'Średni'
                : 'Niski';

    const statusLabel = todo.completed ? 'Ukończone' : 'W toku';

    return (
        <section className="details-page">
            <div className="details-breadcrumb">
                <Link to="/tasks">Dashboard</Link>
                <span> / </span>
                <Link to="/tasks">Zadania</Link>
                <span> / </span>
                <span>Szczegóły</span>
            </div>

            <div className="details-grid">
                <article className="details-main-card">
                    <div className="details-main-header">
                        <h1>{todo.title}</h1>
                        <p>{todo.dueDate}</p>
                    </div>

                    <div className="details-section">
                        <h2>Opis</h2>
                        <p>{todo.description}</p>
                    </div>

                    <div className="details-section">
                        <h2>Komentarze</h2>

                        <div className="details-comments">
                            {mockComments.map((item) => (
                                <div key={item.id} className="details-comment-card">
                                    <div className="details-comment-avatar" />
                                    <div className="details-comment-copy">
                                        <h3>{item.author}</h3>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="details-add-comment">
                            <input
                                type="text"
                                placeholder="Dodaj komentarz..."
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                            />
                            <button type="button">Dodaj</button>
                        </div>
                    </div>
                </article>

                <aside className="details-meta-card">
                    <h2>Metadane</h2>

                    <div className="details-meta-block">
                        <span className="details-meta-label">Termin</span>
                        <div className="details-meta-value details-meta-box">
                            {todo.dueDate}
                        </div>
                    </div>

                    <div className="details-meta-block">
                        <span className="details-meta-label">Priorytet</span>
                        <div className="details-meta-value details-pill">
                            {priorityLabel}
                        </div>
                    </div>

                    <div className="details-meta-block">
                        <span className="details-meta-label">Status</span>
                        <div className="details-meta-value details-pill status-pill">
                            {statusLabel}
                        </div>
                    </div>

                    <div className="details-action-group">
                        <Button
                            label="Edytuj"
                            variant="primary"
                            size="large"
                            onClick={() => navigate('/tasks')}
                        />
                        <Button
                            label="Usuń"
                            variant="secondary"
                            size="large"
                            onClick={() => navigate('/tasks')}
                        />
                    </div>
                </aside>
            </div>
        </section>
    );
}