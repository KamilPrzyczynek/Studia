import { useNavigate } from 'react-router-dom';
import './HomePage.css';

export default function HomePage() {
    const navigate = useNavigate();

    return (
        <section className="home-page">
            <header className="home-header">
                <div className="home-logo-box">LOGO</div>

                <nav className="home-nav">
                    <button
                        type="button"
                        className="home-nav-link home-nav-link-active"
                        onClick={() => navigate('/')}
                    >
                        Start
                    </button>

                    <button
                        type="button"
                        className="home-nav-link"
                        onClick={() => navigate('/tasks')}
                    >
                        Dashboard
                    </button>

                    <button
                        type="button"
                        className="home-nav-link"
                        onClick={() => navigate('/profile')}
                    >
                        Profil
                    </button>
                </nav>

                <div className="home-header-actions">
                    <button
                        type="button"
                        className="home-login-button"
                        onClick={() => navigate('/login')}
                    >
                        Logowanie
                    </button>

                    <button
                        type="button"
                        className="home-register-button"
                        onClick={() => navigate('/register')}
                    >
                        Rejestracja
                    </button>
                </div>
            </header>

            <main className="home-main">
                <section className="home-hero">
                    <div className="home-hero-copy">
                        <h1>Nowoczesne zarządzanie zadaniami w jednym miejscu</h1>
                        <p>
                            Organizuj listy zadań, ustawiaj priorytety, filtruj widoki i
                            przechodź szybko do szczegółów projektu oraz ustawień konta.
                        </p>

                        <div className="home-hero-actions">
                            <button
                                type="button"
                                className="home-primary-button"
                                onClick={() => navigate('/tasks')}
                            >
                                Przejdź do dashboardu
                            </button>

                            <button
                                type="button"
                                className="home-secondary-button"
                                onClick={() => navigate('/settings')}
                            >
                                Zobacz profil
                            </button>
                        </div>
                    </div>
                </section>

                <section className="home-cards-section">
                    <h2>Najważniejsze sekcje aplikacji</h2>

                    <div className="home-cards-grid">
                        <article className="home-card">
                            <h3>Dashboard zadań</h3>
                            <p>
                                Zarządzaj listą zadań, wyszukuj elementy, filtruj widok i
                                dodawaj nowe zadania przez panel boczny.
                            </p>
                            <button
                                type="button"
                                className="home-primary-small-button"
                                onClick={() => navigate('/tasks')}
                            >
                                Otwórz
                            </button>
                        </article>

                        <article className="home-card">
                            <h3>Szczegóły zadania</h3>
                            <p>
                                Zobacz opis, komentarze, metadane i przejdź do szczegółów
                                wybranego zadania na osobnej podstronie.
                            </p>
                            <button
                                type="button"
                                className="home-outline-small-button"
                                onClick={() => navigate('/tasks/task-1')}
                            >
                                Szczegóły
                            </button>
                        </article>

                        <article className="home-card">
                            <h3>Profil użytkownika</h3>
                            <p>
                                Zarządzaj ustawieniami profilu, preferencjami, motywem oraz
                                powiadomieniami zapisanymi lokalnie.
                            </p>
                            <button
                                type="button"
                                className="home-outline-profile-button"
                                onClick={() => navigate('/settings')}
                            >
                                Profil użytkownika
                            </button>
                        </article>
                    </div>
                </section>
            </main>

            <footer className="home-footer">
                <div className="home-footer-links">
                    <span>Start</span>
                    <span>Dashboard</span>
                    <span>Profil</span>
                </div>

                <span className="home-footer-version">version 1.0</span>
            </footer>
        </section>
    );
}