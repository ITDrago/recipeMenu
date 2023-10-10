import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = "http://localhost:4200/recipes";
export const api = createApi({
  reducerPath: "api",
  tagTypes: ["Recipe"],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getRecipes: builder.query({
      query: (seacrhTern) => `/?_sort=id&_order=desc&q=${seacrhTern}`,
      providesTags: (seacrhTern) => [
        {
          type: "Recipe",
          id: seacrhTern,
        },
      ],
    }),
  }),
});

export const { useGetRecipesQuery } = api;
