import React, { useRef } from "react";
import PostList from "src/widgets/PostList/PostList";
import { useGetPostsQuery } from "src/entities/post/postApi";
import { Box, Typography } from "@mui/material";
import { useAppSelector } from "src/shared/hooks/storeHooks";
import { useInfiniteScroll } from "src/features/infiniteScroll";
import { useRestoreScroll } from "src/features/restoreScroll";
import { incrementPage } from "src/entities/post/postSlice";

const PostListPage: React.FC = () => {
    const storedPosts = useAppSelector(state => state.posts.posts);
    const page = useAppSelector(state => state.posts.page);
    const loaderRef = useRef<HTMLDivElement>(null);
    const prevPageRef = useRef<number>(page);
    const hasPosts = Object.keys(storedPosts).length > 0;

    const { error, isLoading, isFetching } = useGetPostsQuery(page, {
        skip: prevPageRef.current === page || page < 0
    });

    useRestoreScroll();
    useInfiniteScroll({
        ref: loaderRef,
        isFetching,
        isLoading,
        action: incrementPage
    });

    return (
        <Box sx={{ margin: "1rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Typography variant="h4" color="primary.main">Posts</Typography>

            {hasPosts && <PostList posts={Object.values(storedPosts)} />}

            <Box ref={loaderRef} sx={{ height: "20px", color: "primary.light" }}>
                {isFetching && <Typography>Loading {hasPosts && "more "}posts...</Typography>}
            </Box>

            {error && <Typography variant="h6" color="error">Error loading posts</Typography>}
        </Box>
    );
};

export default PostListPage;
