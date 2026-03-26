import type { FilterType } from '../types/todo.types';

interface FilterBarProps {
    activeFilter: FilterType;
    onFilterChange: (filter: FilterType) => void;
}

export function FilterBar({ activeFilter, onFilterChange }: FilterBarProps) {
    return (
        <div className="filter-bar">
            <button
                className={`button ${activeFilter === 'all' ? 'active' : ''}`}
                onClick={() => onFilterChange('all')}
            >
                Wszystkie
            </button>

            <button
                className={`button ${activeFilter === 'active' ? 'active' : ''}`}
                onClick={() => onFilterChange('active')}
            >
                Aktywne
            </button>

            <button
                className={`button ${activeFilter === 'completed' ? 'active' : ''}`}
                onClick={() => onFilterChange('completed')}
            >
                Ukończone
            </button>
        </div>
    );
}