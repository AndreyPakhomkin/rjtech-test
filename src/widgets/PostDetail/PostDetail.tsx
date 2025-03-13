import { Box } from "@mui/material"
import { Post } from "src/entities/post/types"
import Typography from "@mui/material/Typography"

interface PostDetailProps {
    post: Post
}

const PostDetail: React.FC<PostDetailProps> = ({ post }) => {

    console.log(post)
    return (
        <Box>
            <Typography variant="h5" sx={{ color: 'primary.main' }}>{post.title}</Typography>
            <Typography variant="h6" sx={{ color: 'secondary.main' }}>{post.body}</Typography>
        </Box>
    )
}

export default PostDetail