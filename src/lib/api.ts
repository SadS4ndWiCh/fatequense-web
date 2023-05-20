import { env } from '../env.mjs';
import { createFetch } from './fetch';

export const api = createFetch({ baseURL: env.NEXT_PUBLIC_API_BASE_URL });
