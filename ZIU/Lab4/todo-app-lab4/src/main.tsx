import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import App from './App';
import './index.css';
import muiTheme from './theme/muiTheme';
import { TodoProvider } from './context/TodoProvider';

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
        <ThemeProvider theme={muiTheme}>
            <CssBaseline />
            <TodoProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </TodoProvider>
        </ThemeProvider>
    </React.StrictMode>
);