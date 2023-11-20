import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IStory } from "@src/Components/interfaces";
import { endpoints } from "./endpoints";

export const pictorialApi = createApi({
  reducerPath: "pictorialApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pictorial/api/",
  }),
  endpoints: (builder) => ({
    getStories: builder.query<IStory[], void>({
      query: () => endpoints.stories(),
    }),
  }),
});

export const { useGetStoriesQuery } = pictorialApi;
