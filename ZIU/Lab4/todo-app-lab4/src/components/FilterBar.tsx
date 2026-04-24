import type { FilterType } from '../types/todo.types';

interface FilterBarProps {
    activeFilter: FilterType;
    onFilterChange: (filter: FilterType) => void;
}

export function FilterBar({ activeFilter, onFilterChange }: FilterBarProps) {
    return (
        <nav className="filter-bar" aria-label="Filtry zadań">
            <button
                type="button"
                className={`button ${activeFilter === 'all' ? 'active' : ''}`}
                aria-pressed={activeFilter === 'all'}
                onClick={() => onFilterChange('all')}
            >
                Wszystkie
            </button>

            <button
                type="button"
                className={`button ${activeFilter === 'active' ? 'active' : ''}`}
                aria-pressed={activeFilter === 'active'}
                onClick={() => onFilterChange('active')}
            >
                Aktywne
            </button>

            <button
                type="button"
                className={`button ${activeFilter === 'completed' ? 'active' : ''}`}
                aria-pressed={activeFilter === 'completed'}
                onClick={() => onFilterChange('completed')}
            >
                Ukończone
            </button>
        </nav>
    );
}