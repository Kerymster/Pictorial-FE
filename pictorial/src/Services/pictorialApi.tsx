import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IStory } from "@src/interfaces";
import { endpoints } from "./endpoints";

export const pictorialApi = createApi({
  reducerPath: "pictorialApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  endpoints: (builder) => ({
    getStories: builder.query<IStory[], void>({
      query: () => endpoints.stories(),
    }),
    addStory: builder.mutation<void, Partial<IStory>>({
      query: (story) => ({
        url: endpoints.stories(),
        method: "POST",
        body: story,
      }),
    }),
  }),
});

export const { useGetStoriesQuery, useAddStoryMutation } = pictorialApi;
