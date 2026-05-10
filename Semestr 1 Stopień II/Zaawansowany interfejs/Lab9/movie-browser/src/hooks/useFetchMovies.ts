import { useQuery } from '@tanstack/react-query';
import { tmdbClient } from '../api/tmdbClient';
import { QUERY_KEYS } from '../constants/queryKeys';

export interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path: string | null;
    release_date: string;
    vote_average: number;
    genre_ids: number[];
}

interface MoviesResponse {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}

export function useFetchMovies(page = 1, query = '') {
    const cleanQuery = query.trim();
    const isSearch = cleanQuery.length > 0;

    return useQuery({
        queryKey: isSearch
            ? QUERY_KEYS.movies.search(cleanQuery, page)
            : QUERY_KEYS.movies.popular(page),
        queryFn: async () => {
            const endpoint = isSearch ? '/search/movie' : '/movie/popular';
            const params: Record<string, string | number> = { page };

            if (isSearch) {
                params.query = cleanQuery;
            }

            const { data } = await tmdbClient.get<MoviesResponse>(endpoint, {
                params,
            });

            return data;
        },
        enabled: !isSearch || cleanQuery.length >= 2,
        placeholderData: (previousData) => previousData,
        staleTime: 1000 * 60 * 3,
    });
}