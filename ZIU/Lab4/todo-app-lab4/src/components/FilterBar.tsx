import { Button } from './Button';
import type { FilterType, PriorityFilter } from '../types/todo.types';
import './FilterBar.css';

interface FilterBarProps {
    activeFilter: FilterType;
    activePriority: PriorityFilter;
    onFilterChange: (filter: FilterType) => void;
    onPriorityChange: (priority: PriorityFilter) => void;
}

export function FilterBar({
                              activeFilter,
                              activePriority,
                              onFilterChange,
                              onPriorityChange,
                          }: FilterBarProps) {
    return (
        <div className="filter-bar">
            <Button
                label="Wszystkie"
                variant={activeFilter === 'all' ? 'chip-active' : 'chip'}
                size="small"
                onClick={() => onFilterChange('all')}
            />

            <Button
                label="Aktywne"
                variant={activeFilter === 'active' ? 'chip-active' : 'chip'}
                size="small"
                onClick={() => onFilterChange('active')}
            />

            <Button
                label="Ukończone"
                variant={activeFilter === 'completed' ? 'chip-active' : 'chip'}
                size="small"
                onClick={() => onFilterChange('completed')}
            />

            <Button
                label="Wszystkie priorytety"
                variant={activePriority === 'all' ? 'chip-active' : 'chip'}
                size="small"
                onClick={() => onPriorityChange('all')}
            />

            <Button
                label="Wysoki"
                variant={activePriority === 'high' ? 'chip-active' : 'chip'}
                size="small"
                onClick={() => onPriorityChange('high')}
            />

            <Button
                label="Średni"
                variant={activePriority === 'medium' ? 'chip-active' : 'chip'}
                size="small"
                onClick={() => onPriorityChange('medium')}
            />

            <Button
                label="Niski"
                variant={activePriority === 'low' ? 'chip-active' : 'chip'}
                size="small"
                onClick={() => onPriorityChange('low')}
            />
        </div>
    );
}