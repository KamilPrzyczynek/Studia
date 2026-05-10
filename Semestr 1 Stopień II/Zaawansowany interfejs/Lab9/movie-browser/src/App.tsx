import { useMemo, useState } from 'react';
import { useDebounce } from './hooks/useDebounce';
import { useFetchMovies } from './hooks/useFetchMovies';
import { useFavorites } from './hooks/useFavorites';
import { MovieCard } from './components/MovieCard';
import { MovieModal } from './components/MovieModal';
import { SkeletonCard } from './components/SkeletonCard';
import { ErrorBanner } from './components/ErrorBanner';
import { EmptyState } from './components/EmptyState';
import { InfiniteMovieList } from './components/InfiniteMovieList';
import './App.css';

export default function App() {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [selectedMovieId, setSelectedMovieId] = useState<number | null>(null);
  const [infiniteMode, setInfiniteMode] = useState(false);

  const debouncedQuery = useDebounce(query, 300);
  const { favorites, isFavorite, toggleFavorite } = useFavorites();

  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
    isPlaceholderData,
  } = useFetchMovies(page, debouncedQuery);

  const movies = data?.results ?? [];
  const canGoPrevious = page > 1;
  const canGoNext = data ? page < data.total_pages : false;

  const title = useMemo(() => {
    if (debouncedQuery.trim().length >= 2) {
      return `Wyniki dla: ${debouncedQuery}`;
    }

    return 'Popularne filmy';
  }, [debouncedQuery]);

  function handleSearchChange(value: string) {
    setQuery(value);
    setPage(1);
  }

  return (
      <div className="app">
        <header className="hero">
          <div>
            <p className="eyebrow">Movie Browser</p>
            <h1>Przeglądaj filmy z TMDB</h1>
            <p className="lead">
              Wyszukuj filmy, sprawdzaj szczegóły i zapisuj ulubione lokalnie.
            </p>
          </div>

          <div className="favorites-box">
            <span>Ulubione</span>
            <strong>{favorites.length}</strong>
          </div>
        </header>

        <main className="content">
          <section className="toolbar">
            <input
                value={query}
                onChange={(event) => handleSearchChange(event.target.value)}
                placeholder="Szukaj filmu, min. 2 znaki"
                aria-label="Szukaj filmu"
            />

            <button
                className="mode-button"
                onClick={() => setInfiniteMode((current) => !current)}
            >
              {infiniteMode ? 'Paginacja klasyczna' : 'Infinite scroll'}
            </button>

            {!infiniteMode && (
                <div className="pagination">
                  <button
                      onClick={() => setPage((currentPage) => currentPage - 1)}
                      disabled={!canGoPrevious}
                  >
                    Poprzednia
                  </button>

                  <span>Strona {page}</span>

                  <button
                      onClick={() => setPage((currentPage) => currentPage + 1)}
                      disabled={!canGoNext}
                  >
                    Następna
                  </button>
                </div>
            )}
          </section>

          <section className="section-heading">
            <h2>{title}</h2>
            {isPlaceholderData && !infiniteMode && (
                <span>Ładowanie kolejnej strony...</span>
            )}
          </section>

          {infiniteMode ? (
              <InfiniteMovieList
                  query={debouncedQuery}
                  onOpenDetails={setSelectedMovieId}
              />
          ) : (
              <>
                {isLoading && (
                    <section className="movie-grid">
                      {Array.from({ length: 12 }).map((_, index) => (
                          <SkeletonCard key={index} />
                      ))}
                    </section>
                )}

                {isError && (
                    <ErrorBanner
                        message={
                          error instanceof Error ? error.message : 'Nieznany błąd'
                        }
                        onRetry={() => refetch()}
                    />
                )}

                {!isLoading && !isError && movies.length === 0 && <EmptyState />}

                {!isLoading && !isError && movies.length > 0 && (
                    <section
                        className={`movie-grid ${
                            isPlaceholderData ? 'is-placeholder' : ''
                        }`}
                    >
                      {movies.map((movie) => (
                          <MovieCard
                              key={movie.id}
                              movie={movie}
                              isFavorite={isFavorite}
                              toggleFavorite={toggleFavorite}
                              onOpenDetails={setSelectedMovieId}
                          />
                      ))}
                    </section>
                )}
              </>
          )}
        </main>

        <MovieModal
            movieId={selectedMovieId}
            onClose={() => setSelectedMovieId(null)}
        />
      </div>
  );
}