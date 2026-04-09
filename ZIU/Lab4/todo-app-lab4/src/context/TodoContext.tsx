import { createContext } from 'react';
import type { Dispatch } from 'react';
import type { Todo, TodoAction } from '../types/todo.types';

export interface TodoState {
    todos: Todo[];
}

export interface TodoContextValue {
    state: TodoState;
    dispatch: Dispatch<TodoAction>;
}

export const TodoContext = createContext<TodoContextValue | undefined>(undefined);