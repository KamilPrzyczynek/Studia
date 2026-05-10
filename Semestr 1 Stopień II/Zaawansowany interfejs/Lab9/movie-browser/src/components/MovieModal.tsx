import { useMovieDetails } from '../hooks/useMovieDetails';
import { SkeletonCard } from './SkeletonCard';
import { ErrorBanner } from './ErrorBanner';

const IMG_BASE = 'https://image.tmdb.org/t/p/w500';

interface MovieModalProps {
    movieId: number | null;
    onClose: () => void;
}

export function MovieModal({ movieId, onClose }: MovieModalProps) {
    const { data, isLoading, isError, error, refetch } = useMovieDetails(movieId);

    if (movieId === null) {
        return null;
    }

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <section className="movie-modal" onClick={(event) => event.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    Zamknij
                </button>

                {isLoading && <SkeletonCard />}

                {isError && (
                    <ErrorBanner
                        message={error instanceof Error ? error.message : 'Nieznany błąd'}
                        onRetry={() => refetch()}
                    />
                )}

                {data && (
                    <div className="modal-content">
                        {data.poster_path ? (
                            <img src={`${IMG_BASE}${data.poster_path}`} alt={data.title} />
                        ) : (
                            <div className="no-poster">Brak plakatu</div>
                        )}

                        <div>
                            <h2>{data.title}</h2>
                            <p className="modal-meta">
                                {data.release_date?.slice(0, 4) || 'Brak daty'} ·{' '}
                                {data.runtime ? `${data.runtime} min` : 'Brak czasu'} · ⭐{' '}
                                {data.vote_average.toFixed(1)}
                            </p>

                            <p>{data.overview || 'Brak opisu filmu.'}</p>

                            <div className="genres">
                                {data.genres.map((genre) => (
                                    <span key={genre.id}>{genre.name}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </div>
    );
}