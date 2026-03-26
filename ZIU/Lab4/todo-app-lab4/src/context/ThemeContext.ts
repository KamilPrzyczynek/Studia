import { createContext } from 'react';

export interface ThemeContextType {
    theme: 'light' | 'dark';
    setTheme: (t: 'light' | 'dark') => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);