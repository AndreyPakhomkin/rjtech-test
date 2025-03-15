import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post } from "./types";
import { postApi } from "./postApi";
import { PostsState } from "./types";

const initialState: PostsState = {
    posts: {},
    loading: false,
    error: null,
    page: -1
};

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        incrementPage: (state) => {
            if (state.page < 10) {
                state.page += 1;
            }
        }
    },
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
                state.error = action.error.message || "Error fetching posts";
            });
    },
});

export default postSlice.reducer;