export type Priority = 'low' | 'medium' | 'high';
export type FilterType = 'all' | 'active' | 'completed';
export type SortType = 'date-asc' | 'date-desc' | 'priority' | 'alphabetical';

export interface Todo {
    id: string;
    title: string;
    description: string;
    completed: boolean;
    createdAt: string;
    dueDate: string;
    priority: Priority;
    ownerEmail: string;
}

export type TodoAction =
    | {
    type: 'ADD';
    payload: {
        title: string;
        description: string;
        dueDate: string;
        priority: Priority;
        ownerEmail: string;
    };
}
    | {
    type: 'TOGGLE';
    payload: string;
}
    | {
    type: 'DELETE';
    payload: string;
}
    | {
    type: 'EDIT';
    payload: {
        id: string;
        title: string;
        description: string;
        dueDate: string;
        priority: Priority;
    };
};