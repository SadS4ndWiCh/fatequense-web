import { ZodFetcher, createZodFetcher } from "zod-fetch";
import { env } from "~/env.mjs";

type Methods = 'get' | 'post' | 'patch';

const fetcher = createZodFetcher();

export const api: Record<Methods, ZodFetcher<typeof fetch>> = {
  get(schema, url, options) {
    return fetcher(schema, new URL(url.toString(), env.NEXT_PUBLIC_API_BASE_URL), {
      method: 'GET',
      ...options
    })
  },
  post(schema, url, options) {
    return fetcher(schema, new URL(url.toString(), env.NEXT_PUBLIC_API_BASE_URL), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers
      },
      ...options
    })
  },
  patch(schema, url, options) {
    return fetcher(schema, new URL(url.toString(), env.NEXT_PUBLIC_API_BASE_URL), {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers
      },
      ...options
    })
  },
}