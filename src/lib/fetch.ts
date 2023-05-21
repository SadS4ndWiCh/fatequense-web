import { z } from "zod";

type CreateFetchProps = {
  baseURL?: string;
};

type Options = Omit<RequestInit, "body"> & {
  data?: any;
};

export function createFetch({ baseURL = "" }: CreateFetchProps) {
  return {
    get: async <TDataSchema>(
      schema: z.ZodType<TDataSchema>,
      path: string,
      options: Options,
    ) => {
      const res = await fetch(baseURL + path, {
        method: "GET",
        ...options,
      });

      return {
        res,
        data: schema.parse(await res.json()),
      };
    },
    post: async <TDataSchema>(
      schema: z.ZodType<TDataSchema>,
      path: string,
      options: Options,
    ) => {
      const res = await fetch(baseURL + path, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...options.headers,
        },
        body: JSON.stringify(options.data),
        ...options,
      });

      return {
        res,
        data: schema.parse(await res.json()),
      };
    },
    patch: async <TDataSchema>(
      schema: z.ZodType<TDataSchema>,
      path: string,
      options: Options,
    ) => {
      const res = await fetch(baseURL + path, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          ...options.headers,
        },
        body: JSON.stringify(options.data),
        ...options,
      });

      return {
        res,
        data: schema.parse(await res.json()),
      };
    },
  };
}
