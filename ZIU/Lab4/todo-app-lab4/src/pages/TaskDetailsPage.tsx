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
            <section className="details-page" aria-labelledby="details-not-found-title">
                <div className="details-not-found">
                    <h1 id="details-not-found-title">Nie znaleziono zadania</h1>
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
        <section className="details-page" aria-labelledby="task-details-title">
            <nav className="details-breadcrumb" aria-label="Ścieżka nawigacji">
                <Link to="/tasks">Dashboard</Link>
                <span aria-hidden="true"> / </span>
                <Link to="/tasks">Zadania</Link>
                <span aria-hidden="true"> / </span>
                <span aria-current="page">Szczegóły</span>
            </nav>

            <div className="details-grid">
                <article className="details-main-card">
                    <header className="details-main-header">
                        <h1 id="task-details-title">{todo.title}</h1>
                        <p>{todo.dueDate}</p>
                    </header>

                    <section className="details-section" aria-labelledby="task-description-heading">
                        <h2 id="task-description-heading">Opis</h2>
                        <p>{todo.description}</p>
                    </section>

                    <section className="details-section" aria-labelledby="task-comments-heading">
                        <h2 id="task-comments-heading">Komentarze</h2>

                        <div className="details-comments">
                            {mockComments.map((item) => (
                                <article key={item.id} className="details-comment-card">
                                    <div className="details-comment-avatar" aria-hidden="true" />
                                    <div className="details-comment-copy">
                                        <h3>{item.author}</h3>
                                        <p>{item.text}</p>
                                    </div>
                                </article>
                            ))}
                        </div>

                        <form
                            className="details-add-comment"
                            aria-label="Formularz dodawania komentarza"
                            onSubmit={(event) => {
                                event.preventDefault();
                                setComment('');
                            }}
                        >
                            <label htmlFor="comment-input" className="visually-hidden">
                                Dodaj komentarz
                            </label>
                            <input
                                id="comment-input"
                                type="text"
                                placeholder="Dodaj komentarz..."
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                            />
                            <button type="submit">Dodaj</button>
                        </form>
                    </section>
                </article>

                <aside className="details-meta-card" aria-labelledby="task-meta-heading">
                    <h2 id="task-meta-heading">Metadane</h2>

                    <dl className="details-meta-list">
                        <div className="details-meta-block">
                            <dt className="details-meta-label">Termin</dt>
                            <dd className="details-meta-value details-meta-box">
                                {todo.dueDate}
                            </dd>
                        </div>

                        <div className="details-meta-block">
                            <dt className="details-meta-label">Priorytet</dt>
                            <dd className="details-meta-value details-pill">
                                {priorityLabel}
                            </dd>
                        </div>

                        <div className="details-meta-block">
                            <dt className="details-meta-label">Status</dt>
                            <dd className="details-meta-value details-pill status-pill">
                                {statusLabel}
                            </dd>
                        </div>
                    </dl>

                    <div className="details-action-group" aria-label="Akcje zadania">
                        <Button
                            label="Edytuj"
                            variant="primary"
                            size="large"
                            ariaLabel={`Edytuj zadanie ${todo.title}`}
                            onClick={() => navigate('/tasks')}
                        />
                        <Button
                            label="Usuń"
                            variant="secondary"
                            size="large"
                            ariaLabel={`Usuń zadanie ${todo.title}`}
                            onClick={() => navigate('/tasks')}
                        />
                    </div>
                </aside>
            </div>
        </section>
    );
}