import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserAvatar } from './UserAvatar';
import { getActiveUser, logoutUser } from '../utils/auth';
import './Nav.css';

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const activeUser = getActiveUser();

    const handleToggle = () => {
        setIsOpen((prev) => !prev);
    };

    const handleLogout = () => {
        logoutUser();
        navigate('/login');
    };

    return (
        <header className="nav">
            <div className="nav__content">
                <div className="nav__left">
                    <div className="nav__logo">LOGO</div>

                    <nav className="nav__desktop" aria-label="Nawigacja główna">
                        <NavLink to="/tasks" className="nav__link">
                            Zadania
                        </NavLink>
                        <NavLink to="/profile" className="nav__link">
                            Profil
                        </NavLink>
                        <NavLink to="/settings" className="nav__link">
                            Ustawienia
                        </NavLink>
                    </nav>
                </div>

                <div className="nav__right">
                    {activeUser && (
                        <span className="nav__username">{activeUser.firstName}</span>
                    )}

                    <UserAvatar
                        firstName={activeUser?.firstName}
                        lastName={activeUser?.lastName}
                        email={activeUser?.email}
                        avatar={activeUser?.avatar}
                        size="medium"
                    />

                    <button
                        type="button"
                        className="nav__logout"
                        onClick={handleLogout}
                    >
                        Wyloguj
                    </button>

                    <button
                        type="button"
                        className="nav__hamburger"
                        onClick={handleToggle}
                        aria-label={isOpen ? 'Zamknij menu' : 'Otwórz menu'}
                        aria-expanded={isOpen}
                        aria-controls="mobile-navigation"
                    >
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                    </button>
                </div>
            </div>

            <nav
                id="mobile-navigation"
                className={`nav__menu ${isOpen ? 'nav__menu--open' : ''}`}
                aria-label="Nawigacja mobilna"
            >
                <ul>
                    <li>
                        <NavLink to="/tasks" onClick={() => setIsOpen(false)}>
                            Zadania
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/profile" onClick={() => setIsOpen(false)}>
                            Profil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/settings" onClick={() => setIsOpen(false)}>
                            Ustawienia
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}