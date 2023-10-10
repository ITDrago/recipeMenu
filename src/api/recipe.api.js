import { api } from "./api";

export const recipeApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addRecipe: builder.mutation({
      query: (recipe) => ({
        body: recipe,
        url: "/",
        method: "POST",
      }),
      invalidatesTags: () => [
        {
          type: "Recipe",
        },
      ],
    }),
  }),
});

export const { useAddRecipeMutation } = recipeApi;
