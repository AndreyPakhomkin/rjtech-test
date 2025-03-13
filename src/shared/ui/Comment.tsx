import React from "react"
import { Box, Typography } from "@mui/material"
import { Comment } from "src/entities/comment/types"
import { commentItemStyle } from "../config/theme"

interface CommentProps {
    comment: Comment
}

const CommentItem: React.FC<CommentProps> = ({ comment }) => {
    return (
        <Box sx={commentItemStyle}>
            <Typography color="primary.main">{comment.name}</Typography>
            <Typography color="primary.light">{comment.email}</Typography>
            <Typography color="secondary.main">{comment.body}</Typography>
        </Box>
    )
}

export default CommentItem