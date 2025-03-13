import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post } from "./types";
import { postApi } from "./postApi";

interface PostsState {
    posts: Record<number, Post>;
    loading: boolean;
    error: string | null;
}

const initialState: PostsState = {
    posts: {},
    loading: false,
    error: null,
};

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addMatcher(postApi.endpoints.getPosts.matchPending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addMatcher(postApi.endpoints.getPosts.matchFulfilled, (state, action: PayloadAction<Post[]>) => {
                state.loading = false;
                action.payload.forEach((post) => {
                    state.posts[post.id] = post;
                });
            })
            .addMatcher(postApi.endpoints.getPosts.matchRejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Error fething posts";
            });
    },
});

export default postSlice.reducer;