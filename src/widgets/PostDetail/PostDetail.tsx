import { Box } from "@mui/material"
import { Post } from "src/entities/post/types"
import Typography from "@mui/material/Typography"
import { postStyle } from "src/shared/config/theme"

interface PostDetailProps {
    post: Post
}

const PostDetail: React.FC<PostDetailProps> = ({ post }) => {

    return (
        <Box sx={postStyle}>
            <Typography variant="h5" color="primary.main">{post.title}</Typography>
            <Typography variant="h6" color="secondary.main">{post.body}</Typography>
        </Box>
    )
}

export default PostDetail