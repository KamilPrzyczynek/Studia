import { useMemo, useReducer, useState } from 'react';
import { AddTodoForm } from './components/AddTodoForm';
import { FilterBar } from './components/FilterBar';
import { TodoList } from './components/TodoList';
import { todoReducer } from './reducers/todoReducer';
import type { FilterType, Todo } from './types/todo.types';
import './styles.css';

const initialTodos: Todo[] = [
  {
    id: crypto.randomUUID(),
    title: 'Przygotować projekt w Figmie',
    completed: false,
    createdAt: new Date(),
  },
  {
    id: crypto.randomUUID(),
    title: 'Zrobić komponent TodoItem',
    completed: true,
    createdAt: new Date(),
  },
  {
    id: crypto.randomUUID(),
    title: 'Dodać filtrowanie listy',
    completed: false,
    createdAt: new Date(),
  },
];

function App() {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);
  const [filter, setFilter] = useState<FilterType>('all');

  const handleAdd = (title: string) => {
    dispatch({ type: 'ADD', payload: title });
  };

  const handleToggle = (id: string) => {
    dispatch({ type: 'TOGGLE', payload: id });
  };

  const handleDelete = (id: string) => {
    dispatch({ type: 'DELETE', payload: id });
  };

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      if (filter === 'active') return !todo.completed;
      if (filter === 'completed') return todo.completed;
      return true;
    });
  }, [todos, filter]);

  const activeCount = todos.filter((t) => !t.completed).length;

  return (
      <main className="app">
        <section className="todo-card">
          <header className="header">
            <h1>Lista zadań</h1>
            <p>
              Aktywne: {activeCount} / Wszystkie: {todos.length}
            </p>
          </header>

          <AddTodoForm onAdd={handleAdd} />

          <FilterBar activeFilter={filter} onFilterChange={setFilter} />

          <TodoList
              todos={filteredTodos}
              onToggle={handleToggle}
              onDelete={handleDelete}
          />
        </section>
      </main>
  );
}

export default App;