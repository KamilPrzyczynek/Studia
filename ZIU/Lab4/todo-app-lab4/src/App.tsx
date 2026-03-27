import { useReducer, useState } from 'react';
import { todoReducer } from './reducers/todoReducer';
import { ThemeProvider } from './context/ThemeProvider';
import { useTheme } from "./context/useTheme";
import { Card } from './components/Card';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { TodoList } from './components/TodoList';
import './App.css';

function AppContent() {
  const [taskTitle, setTaskTitle] = useState('');
  const { theme, setTheme } = useTheme();

  return (
      <div className="dashboard-layout">
        <header className="navbar">
          <div className="logo-box">LOGO</div>
          <div className="nav-links">
            <div className="nav-item"></div>
            <div className="nav-item"></div>
            <div className="nav-item"></div>
          </div>
          <div className="nav-right">
            <Button
                label={theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                variant="ghost"
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            />
            <div className="avatar-circle"></div>
          </div>
        </header>

        <section className="hero-section">
          <div className="hero-h1-placeholder"></div>
          <div className="hero-body-placeholders">
            <div className="hero-line-1"></div>
            <div className="hero-line-2"></div>
          </div>
          <Button label="Primary Button" variant="primary" size="large" />
        </section>

        <main className="main-content">
          <div className="grid-cards">
            <Card><div className="card-title-skeleton"></div><div className="card-body-skeleton"></div></Card>
            <Card><div className="card-title-skeleton"></div><div className="card-body-skeleton"></div></Card>
            <Card><div className="card-title-skeleton"></div><div className="card-body-skeleton"></div></Card>
            <Card><div className="card-title-skeleton"></div><div className="card-body-skeleton"></div></Card>
            <Card><div className="card-title-skeleton"></div><div className="card-body-skeleton"></div></Card>
            <Card><div className="card-title-skeleton"></div><div className="card-body-skeleton"></div></Card>
          </div>
        </main>

        <footer className="footer">
          <div className="footer-links">
            <div className="footer-item"></div>
            <div className="footer-item"></div>
            <div className="footer-item"></div>
          </div>
          <div className="version-text">version 1.0</div>
        </footer>
      </div>
  );
}

export default function App() {
  return (
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
  );
}