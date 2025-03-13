import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { buttonStyle, commentsStyle } from "src/shared/config/theme";
import { useAppSelector } from "src/shared/hooks/storeHooks";
import CommentItem from "src/shared/ui/Comment";
import { useGetCommentsQuery } from "src/entities/comment/commentApi";

interface CommentsListProps {
    postId: number
}

const CommentsList: React.FC<CommentsListProps> = ({ postId }) => {
    const comments = useAppSelector(state => state.comments.comments[postId]);
    const hasComments = comments !== undefined;
    const [showComments, setShowComments] = useState<boolean>(false);

    const { error, isLoading } = useGetCommentsQuery(postId, {
        skip: !showComments || hasComments
    });

    const handleShowComments = () => {
        setShowComments(true);
    }

    return (
        <Box>
            {!showComments ? (
                <Button variant='outlined' sx={buttonStyle} onClick={handleShowComments}>
                    Show comments
                </Button>
            ) : (
                <>
                    {isLoading ?
                        <Typography variant="h6" color="primary.main">Loading...</Typography>
                        : error ?
                            <Typography variant="h6" color="error">Error fetching comments</Typography>
                            :
                            <Box sx={commentsStyle}>
                                <Typography variant="h6" color="primary.main">Comments:</Typography>
                                {comments.map((comment) => (
                                    <CommentItem key={comment.id} comment={comment} />
                                ))}
                            </Box>

                    }
                </>
            )}
        </Box>
    )
}

export default CommentsList