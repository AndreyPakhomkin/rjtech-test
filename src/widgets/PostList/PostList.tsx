import React from "react";
import { List, ListItem, Typography } from "@mui/material"
import { Post } from "src/entities/post/types";
import { Link } from "react-router-dom";
import { postStyle } from "src/shared/config/theme";

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
                    sx={postStyle}
                >
                    <Typography variant="h6" color="primary.main">{post.title}</Typography>
                </ListItem>
            ))
            }
        </List >
    )
}

export default PostList