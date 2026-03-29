import type { Todo } from '../types/todo.types';

export const mockTodos: Todo[] = [
    {
        id: 'task-1',
        title: 'Przygotować widok dashboardu',
        description:
            'Przenieść layout z Figmy do Reacta zgodnie z projektem. Uporządkować sekcje, nagłówki, karty zadań oraz spacing między blokami. Sprawdzić zgodność z widokiem desktop i mobile.',
        completed: false,
        createdAt: new Date('2026-03-10'),
        dueDate: '2026-03-12',
        priority: 'high',
    },
    {
        id: 'task-2',
        title: 'Dodać filtrowanie zadań',
        description:
            'Obsłużyć statusy i priorytety w pasku filtrów. Filtry mają działać razem z wyszukiwarką oraz poprawnie aktualizować listę widocznych zadań.',
        completed: false,
        createdAt: new Date('2026-03-11'),
        dueDate: '2026-03-14',
        priority: 'medium',
    },
    {
        id: 'task-3',
        title: 'Sprawdzić checkboxy i stan ukończenia',
        description:
            'Kliknięcie pola ma zmieniać completed, a ukończone zadanie powinno mieć odpowiedni styl i być poprawnie filtrowane w zakładce Ukończone.',
        completed: true,
        createdAt: new Date('2026-03-11'),
        dueDate: '2026-03-15',
        priority: 'low',
    },
    {
        id: 'task-4',
        title: 'Dodać panel nowego zadania',
        description:
            'Slide-over ma zawierać pola tytułu, opisu, terminu i priorytetu. Styl formularza powinien być zgodny z makietą E2, łącznie z przyciskami akcji.',
        completed: false,
        createdAt: new Date('2026-03-12'),
        dueDate: '2026-03-18',
        priority: 'high',
    },
    {
        id: 'task-5',
        title: 'Uzupełnić widok szczegółów',
        description:
            'Kliknięcie karty ma otwierać osobną podstronę szczegółów zadania z breadcrumb, sekcją opisu, komentarzami i panelem metadanych po prawej stronie.',
        completed: false,
        createdAt: new Date('2026-03-13'),
        dueDate: '2026-03-20',
        priority: 'medium',
    },
];