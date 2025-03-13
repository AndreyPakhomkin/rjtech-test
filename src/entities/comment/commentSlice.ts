import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Comment } from "./types";
import { commentApi } from "./commentApi";

interface CommentsState {
    comments: Record<number, Comment[]>;
    loading: boolean;
    error: string | null;
}

const initialState: CommentsState = {
    comments: {},
    loading: false,
    error: null,
};

const postSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addMatcher(commentApi.endpoints.getComments.matchPending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addMatcher(commentApi.endpoints.getComments.matchFulfilled, (state, action: PayloadAction<Comment[]>) => {
                state.loading = false;
                action.payload.forEach((comment) => {
                    if (!state.comments[comment.postId]) {
                        state.comments[comment.postId] = [];
                    }
                    state.comments[comment.postId].push(comment);
                });
            })
            .addMatcher(commentApi.endpoints.getComments.matchRejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Error fetching comments";
            });
    },
});

export default postSlice.reducer;