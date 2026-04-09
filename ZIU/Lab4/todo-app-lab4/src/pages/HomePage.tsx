import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import { getActiveUser, logoutUser } from '../utils/auth';

export default function HomePage() {
    const navigate = useNavigate();
    const activeUser = getActiveUser();

    const handleLogout = () => {
        logoutUser();
        navigate('/login');
    };

    return (
        <div className="home-page">
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
                    {activeUser ? (
                        <>
                            <span className="home-user-badge">Witaj, {activeUser.firstName}</span>
                            <button
                                type="button"
                                className="home-register-button"
                                onClick={handleLogout}
                            >
                                Wyloguj
                            </button>
                        </>
                    ) : (
                        <>
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
                        </>
                    )}
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
                                onClick={() => navigate('/profile')}
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
                            <p>Zarządzaj listą zadań, wyszukuj elementy i filtruj widok.</p>
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
                            <p>Zobacz opis, komentarze i metadane wybranego zadania.</p>
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
                            <p>Zarządzaj ustawieniami profilu, motywem i powiadomieniami.</p>
                            <button
                                type="button"
                                className="home-outline-profile-button"
                                onClick={() => navigate('/settings')}
                            >
                                Ustawienia
                            </button>
                        </article>
                    </div>
                </section>
            </main>
        </div>
    );
}