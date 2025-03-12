import { configureStore } from '@reduxjs/toolkit';
import { postApi } from '@/entities/Post/postApi';
import { commentApi } from '@/entities/Comment/commentApi';

export const store = configureStore({
    reducer: {
        [postApi.reducerPath]: postApi.reducer,
        [commentApi.reducerPath]: commentApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(postApi.middleware, commentApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
