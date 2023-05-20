import { createFetch } from "./fetch";
import { env } from '../env.mjs';

export const api = createFetch({ baseURL: env.NEXT_PUBLIC_API_BASE_URL });
