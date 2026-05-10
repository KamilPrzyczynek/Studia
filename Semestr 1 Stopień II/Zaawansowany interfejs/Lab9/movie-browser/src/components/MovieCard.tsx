import { useCallback, useState } from 'react';
import type { Movie } from '../hooks/useFetchMovies';

const IMG_BASE = 'https://image.tmdb.org/t/p/w500';

interface MovieCardProps {
    movie: Movie;
    isFavorite: (id: number) => boolean;
    toggleFavorite: (movie: Movie) => Promise<void>;
    onOpenDetails: (id: number) => void;
}

export function MovieCard({
                              movie,
                              isFavorite,
                              toggleFavorite,
                              onOpenDetails,
                          }: MovieCardProps) {
    const [optimisticFavorite, setOptimisticFavorite] = useState<boolean | null>(
        null
    );

    const displayedFavorite = optimisticFavorite ?? isFavorite(movie.id);

    const handleFavoriteClick = useCallback(async () => {
        setOptimisticFavorite(!displayedFavorite);

        try {
            await toggleFavorite(movie);
            setOptimisticFavorite(null);
        } catch {
            setOptimisticFavorite(null);
        }
    }, [displayedFavorite, movie, toggleFavorite]);

    return (
        <article className="movie-card">
            <button
                className="movie-poster-button"
                onClick={() => onOpenDetails(movie.id)}
                aria-label={`Pokaż szczegóły filmu ${movie.title}`}
            >
                {movie.poster_path ? (
                    <img src={`${IMG_BASE}${movie.poster_path}`} alt={movie.title} />
                ) : (
                    <div className="no-poster">Brak plakatu</div>
                )}
            </button>

            <div className="movie-card-body">
                <h3>{movie.title}</h3>
                <p>
                    {movie.release_date?.slice(0, 4) || 'Brak daty'} · ⭐{' '}
                    {movie.vote_average.toFixed(1)}
                </p>

                <button
                    className={`favorite-button ${displayedFavorite ? 'active' : ''}`}
                    onClick={handleFavoriteClick}
                    aria-label={
                        displayedFavorite
                            ? 'Usuń film z ulubionych'
                            : 'Dodaj film do ulubionych'
                    }
                >
                    {displayedFavorite ? '❤️ Ulubiony' : '🤍 Dodaj'}
                </button>
            </div>
        </article>
    );
}