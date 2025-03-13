import React from "react";
import { List, ListItem, Typography } from "@mui/material"
import { Post } from "src/entities/post/types";
import { Link } from "react-router-dom";

interface PostListProps {
    posts: Post[]
}

const PostList: React.FC<PostListProps> = ({ posts }) => {

    return (
        <List>
            {posts.map(post => (
                <ListItem
                    component={Link}
                    to={`/post/${post.id}`}
                    key={post.id}
                    sx={{
                        display: 'block',
                        textDecoration: 'none',
                        cursor: 'pointer',
                        '&:hover': {
                            backgroundColor: '#f5f5f5'
                        }
                    }}
                >
                    <Typography variant="h5" sx={{ color: 'primary.main' }}>{post.title}</Typography>
                    <Typography variant="h6" sx={{ color: 'secondary.main' }}>{post.body}</Typography>
                </ListItem>
            ))
            }
        </List >
    )
}

export default PostList