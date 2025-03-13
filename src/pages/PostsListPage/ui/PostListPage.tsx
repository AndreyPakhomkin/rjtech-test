import React, { useState } from "react";
import PostList from 'src/widgets/PostList';
import { useGetPostsQuery } from "src/entities/post/postApi";
import { Box, Typography } from "@mui/material";
import { useAppSelector } from "src/shared/hooks/storeHooks";

const PostListPage: React.FC = () => {
    const [page, setPage] = useState(0);
    const storedPosts = useAppSelector(state => state.posts.posts);
    const hasPosts = Object.keys(storedPosts).length > 0;

    const { error, isLoading } = useGetPostsQuery(page, {
        skip: hasPosts
    });

    return (
        <Box sx={{ margin: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h4">Posts list</Typography>

            {isLoading && !hasPosts &&
                <Typography variant="h6">Loading...</Typography>
            }
            {error &&
                <Typography variant="h6">Error loading posts</Typography>
            }
            {!isLoading && hasPosts &&
                <PostList posts={Object.values(storedPosts)} />
            }
        </Box>
    )
}

export default PostListPage