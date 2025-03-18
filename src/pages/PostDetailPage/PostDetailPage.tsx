import React from "react";
import { Box } from "@mui/material";
import PostDetail from "src/widgets/PostDetail/PostDetail";
import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "src/shared/hooks/storeHooks";
import { buttonStyle } from "src/shared/config/theme";
import CommentsList from "src/widgets/CommentsList/CommentsList";

const PostDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const postId = id ? parseInt(id) : 0;
    const post = useAppSelector(state => state.posts.posts[postId])

    return (
        <Box sx={{ margin: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box component={Link} to='/' sx={buttonStyle}>
                GO BACK
            </Box>
            {post ? (
                <>
                    <PostDetail post={post} />
                    <CommentsList postId={post.id} />
                </>
            ) : (
                <Box>Post not found</Box>
            )}
        </Box>
    );
};

export default PostDetailPage;
