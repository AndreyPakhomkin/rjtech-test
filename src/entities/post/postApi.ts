import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Post } from './types';

export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
        getPosts: builder.query<Post[], number>({
            query: (page) => `posts?_limit=10&_start=${page * 10}`,
        }),
        getPostById: builder.query<Post, number>({
            query: (id) => `posts/${id}`,
        }),
    })
})

export const { useGetPostsQuery, useGetPostByIdQuery } = postApi;