import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { postApi } from 'src/entities/post/postApi';
import { commentApi } from 'src/entities/comment/commentApi';

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(postApi.middleware, commentApi.middleware)
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
