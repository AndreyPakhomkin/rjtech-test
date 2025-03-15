export interface Comment {
    id: number,
    postId: number,
    name: string,
    email: string,
    body: string
}

export interface CommentsState {
    comments: Record<number, Comment[]>;
    loading: boolean;
    error: string | null;
}