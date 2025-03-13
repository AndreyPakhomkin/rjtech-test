import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Post } from './types';

export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    keepUnusedDataFor: 0,
    endpoints: (builder) => ({
        getPosts: builder.query<Post[], number>({
            query: (page) => `posts?_limit=10&_start=${page * 10}`,
            forceRefetch({ currentArg, previousArg }) {
                return currentArg !== previousArg
            },
            transformResponse: (response: Post[]) => {
                return response;
            }
        })
    })
})

export const { useGetPostsQuery } = postApi;