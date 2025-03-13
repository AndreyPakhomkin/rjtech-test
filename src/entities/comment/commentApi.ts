import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Comment } from './types';

export const commentApi = createApi({
    reducerPath: 'commentApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
        getComments: builder.query<Comment[], number>({
            query: () => `/comments`,
        })
    })
})

export const { useGetCommentsQuery } = commentApi;