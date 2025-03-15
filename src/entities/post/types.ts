export interface Post {
    id: number,
    title: string,
    body: string
}

export interface PostsState {
    posts: Record<number, Post>;
    loading: boolean;
    error: string | null;
    page: number;
}