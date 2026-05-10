import { useInfiniteQuery } from '@tanstack/react-query';
import { tmdbClient } from '../api/tmdbClient';
import type { Movie } from './useFetchMovies';

interface MoviesResponse {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}

export function useInfiniteMovies(query = '') {
    const cleanQuery = query.trim();
    const isSearch = cleanQuery.length > 0;

    return useInfiniteQuery({
        queryKey: ['movies', 'infinite', cleanQuery],
        queryFn: async ({ pageParam = 1 }) => {
            const endpoint = isSearch ? '/search/movie' : '/movie/popular';
            const params: Record<string, string | number> = {
                page: pageParam,
            };

            if (isSearch) {
                params.query = cleanQuery;
            }

            const { data } = await tmdbClient.get<MoviesResponse>(endpoint, {
                params,
            });

            return data;
        },
        initialPageParam: 1,
        enabled: !isSearch || cleanQuery.length >= 2,
        getNextPageParam: (lastPage) => {
            return lastPage.page < lastPage.total_pages
                ? lastPage.page + 1
                : undefined;
        },
    });
}