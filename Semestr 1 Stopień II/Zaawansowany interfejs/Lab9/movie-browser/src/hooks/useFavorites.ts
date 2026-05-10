import { useCallback, useState } from 'react';
import type { Movie } from './useFetchMovies';

const STORAGE_KEY = 'movie-browser-favorites';

function loadFavorites(): Movie[] {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]');
    } catch {
        return [];
    }
}

export function useFavorites() {
    const [favorites, setFavorites] = useState<Movie[]>(loadFavorites);

    const toggleFavorite = useCallback(async (movie: Movie) => {
        setFavorites((previousFavorites) => {
            const exists = previousFavorites.some((item) => item.id === movie.id);

            const nextFavorites = exists
                ? previousFavorites.filter((item) => item.id !== movie.id)
                : [...previousFavorites, movie];

            localStorage.setItem(STORAGE_KEY, JSON.stringify(nextFavorites));

            return nextFavorites;
        });
    }, []);

    const isFavorite = useCallback(
        (id: number) => favorites.some((movie) => movie.id === id),
        [favorites]
    );

    return {
        favorites,
        toggleFavorite,
        isFavorite,
    };
}