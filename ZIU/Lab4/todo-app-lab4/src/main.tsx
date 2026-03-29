import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const savedTheme = localStorage.getItem('todo-app-theme');

if (savedTheme === 'dark' || savedTheme === 'light') {
    document.body.dataset.appTheme = savedTheme;
    document.documentElement.dataset.appTheme = savedTheme;
} else {
    document.body.dataset.appTheme = 'light';
    document.documentElement.dataset.appTheme = 'light';
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);