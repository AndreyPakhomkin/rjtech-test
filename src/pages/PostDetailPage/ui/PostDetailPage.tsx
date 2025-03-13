import React from "react";
import { Box, Typography } from "@mui/material";
import PostDetail from "src/widgets/PostDetail";
import { useParams } from "react-router-dom";
import { useAppSelector } from "src/shared/hooks/storeHooks";

const PostDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const postId = id ? parseInt(id) : 0;

    const post = useAppSelector(state => state.posts.posts[postId])

    return (
        <Box sx={{ margin: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h4">Post details</Typography>
            {post ? (
                <PostDetail post={post} />
            ) : (
                <Box>Пост не найден</Box>
            )}
        </Box>
    );
};

export default PostDetailPage;
