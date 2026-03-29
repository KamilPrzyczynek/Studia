export type Priority = 'low' | 'medium' | 'high';
export type FilterType = 'all' | 'active' | 'completed';
export type PriorityFilter = 'all' | Priority;

export interface Todo {
    id: string;
    title: string;
    description: string;
    completed: boolean;
    createdAt: Date;
    dueDate: string;
    priority: Priority;
}

export type TodoAction =
    | {
    type: 'ADD';
    payload: {
        title: string;
        description: string;
        dueDate: string;
        priority: Priority;
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