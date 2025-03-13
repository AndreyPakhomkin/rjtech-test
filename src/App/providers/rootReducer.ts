import { combineReducers } from '@reduxjs/toolkit';
import { postApi } from 'src/entities/post/postApi';
import { commentApi } from 'src/entities/comment/commentApi';
import postsReducer from 'src/entities/post/postSlice';

const rootReducer = combineReducers({
    [postApi.reducerPath]: postApi.reducer,
    [commentApi.reducerPath]: commentApi.reducer,
    posts: postsReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>; 