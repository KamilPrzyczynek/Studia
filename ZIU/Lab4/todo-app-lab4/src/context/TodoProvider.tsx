import { useMemo, useReducer, type ReactNode } from 'react';
import { TodoContext } from './TodoContext';
import { todoReducer } from '../reducers/todoReducer';
import type { Todo } from '../types/todo.types';

const initialTodos: Todo[] = [
    {
        id: crypto.randomUUID(),
        title: 'Przygotować makiety do prezentacji',
        description: '',
        dueDate: '',
        priority: 'medium',
        completed: false,
        createdAt: new Date().toISOString(),
        ownerEmail: '',
    },
    {
        id: crypto.randomUUID(),
        title: 'Uzupełnić dokumentację projektu',
        description: '',
        dueDate: '',
        priority: 'low',
        completed: true,
        createdAt: new Date().toISOString(),
        ownerEmail: '',
    },
    {
        id: crypto.randomUUID(),
        title: 'Sprawdzić poprawki w interfejsie',
        description: '',
        dueDate: '',
        priority: 'high',
        completed: false,
        createdAt: new Date().toISOString(),
        ownerEmail: '',
    },
];

export function TodoProvider({ children }: { children: ReactNode }) {
    const [todos, dispatch] = useReducer(todoReducer, initialTodos);

    const value = useMemo(
        () => ({
            state: { todos },
            dispatch,
        }),
        [todos]
    );

    return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}