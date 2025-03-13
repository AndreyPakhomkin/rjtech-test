import React, { useEffect, useRef } from "react";
import PostList from 'src/widgets/PostList';
import { useGetPostsQuery } from "src/entities/post/postApi";
import { Box, Typography } from "@mui/material";
import { useAppSelector } from "src/shared/hooks/storeHooks";
import { useAppDispatch } from "src/shared/hooks/storeHooks";

const PostListPage: React.FC = () => {
    const dispatch = useAppDispatch();

    const loaderRef = useRef<HTMLDivElement>(null);
    const storedPosts = useAppSelector(state => state.posts.posts);
    const hasPosts = Object.keys(storedPosts).length > 0;
    const page = useAppSelector(state => state.posts.page);

    const prevPageRef = useRef<number>(page);

    const { error, isLoading, isFetching } = useGetPostsQuery(page, {
        skip: prevPageRef.current === page || page < 0
    });

    useEffect(() => {
        const savedScrollPosition = sessionStorage.getItem('scrollPosition');
        if (savedScrollPosition) {
            requestAnimationFrame(() => {
                window.scrollTo(0, parseInt(savedScrollPosition, 10));
            });
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            sessionStorage.setItem('scrollPosition', window.scrollY.toString());
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        console.log('useEffect isFetching page:', page)
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !isFetching && !isLoading) {
                    dispatch({ type: 'posts/incrementPage' });
                }
            },
            { threshold: 0.1 }
        );

        if (loaderRef.current) {
            observer.observe(loaderRef.current);
        }

        return () => observer.disconnect();
    }, [isFetching, isLoading, dispatch]);

    return (
        <Box sx={{ margin: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h4" color="primary.main">Posts</Typography>

            {hasPosts && <PostList posts={Object.values(storedPosts)} />}

            <Box ref={loaderRef} sx={{ height: '20px', color: 'primary.light' }}>
                {isFetching && <Typography >Loading {hasPosts && 'more '}posts...</Typography>}
            </Box>

            {error && <Typography variant="h6" color="error">Error loading posts</Typography>}
        </Box>
    )
}

export default PostListPage