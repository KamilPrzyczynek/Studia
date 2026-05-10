import { http, HttpResponse, delay } from 'msw';

const TMDB_BASE = 'https://api.themoviedb.org/3';

export const handlers = [
    http.get(`${TMDB_BASE}/movie/popular`, async () => {
        await delay(600);

        return HttpResponse.json(
            {
                status_message: 'Invalid API key.',
                status_code: 7,
            },
            { status: 401 }
        );
    }),
];