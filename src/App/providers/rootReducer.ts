import { combineReducers } from '@reduxjs/toolkit';
import { postApi } from 'src/entities/post/postApi';
import { commentApi } from 'src/entities/comment/commentApi';
import postsReducer from 'src/entities/post/postSlice';
import commentsReducer from 'src/entities/comment/commentSlice';

const rootReducer = combineReducers({
    [postApi.reducerPath]: postApi.reducer,
    [commentApi.reducerPath]: commentApi.reducer,
    posts: postsReducer,
    comments: commentsReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>; 