import { useEffect, useRef } from 'react';
import { useInfiniteMovies } from '../hooks/useInfiniteMovies';
import { useFavorites } from '../hooks/useFavorites';
import { MovieCard } from './MovieCard';
import { SkeletonCard } from './SkeletonCard';
import { ErrorBanner } from './ErrorBanner';
import { EmptyState } from './EmptyState';

interface InfiniteMovieListProps {
    query: string;
    onOpenDetails: (id: number) => void;
}

export function InfiniteMovieList({
                                      query,
                                      onOpenDetails,
                                  }: InfiniteMovieListProps) {
    const sentinelRef = useRef<HTMLDivElement | null>(null);
    const { isFavorite, toggleFavorite } = useFavorites();

    const {
        data,
        isLoading,
        isError,
        error,
        refetch,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
    } = useInfiniteMovies(query);

    const movies = data?.pages.flatMap((page) => page.results) ?? [];

    useEffect(() => {
        const element = sentinelRef.current;

        if (!element) {
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                const firstEntry = entries[0];

                if (
                    firstEntry.isIntersecting &&
                    hasNextPage &&
                    !isFetchingNextPage
                ) {
                    fetchNextPage();
                }
            },
            { threshold: 0.2 }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

    if (isLoading) {
        return (
            <section className="movie-grid">
                {Array.from({ length: 12 }).map((_, index) => (
                    <SkeletonCard key={index} />
                ))}
            </section>
        );
    }

    if (isError) {
        return (
            <ErrorBanner
                message={error instanceof Error ? error.message : 'Nieznany błąd'}
                onRetry={() => refetch()}
            />
        );
    }

    if (movies.length === 0) {
        return <EmptyState />;
    }

    return (
        <>
            <section className="movie-grid">
                {movies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                        isFavorite={isFavorite}
                        toggleFavorite={toggleFavorite}
                        onOpenDetails={onOpenDetails}
                    />
                ))}

                {isFetchingNextPage &&
                    Array.from({ length: 4 }).map((_, index) => (
                        <SkeletonCard key={`next-${index}`} />
                    ))}
            </section>

            <div ref={sentinelRef} className="scroll-sentinel">
                {hasNextPage ? 'Ładowanie kolejnych filmów...' : 'To już wszystkie wyniki'}
            </div>
        </>
    );
}