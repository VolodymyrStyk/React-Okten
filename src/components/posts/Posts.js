import {useSelector} from "react-redux";
import {useEffect} from "react";
import {
    usePostsFetcher, usePostsSetLoading, usePostsSetError,
} from "../../redux";

export const Posts = () => {
    const {isLoading, posts, error} = useSelector(({posts}) => posts);

    const postsFetcher = usePostsFetcher();
    const postsLoading = usePostsSetLoading();
    const postsError = usePostsSetError();

    const fetchPosts = async () => {
        try {
            postsLoading();
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const payload = await response.json();
            postsFetcher(payload);
        } catch (e) {
            postsError('Failed to fetch data');
            console.log(e, 'kurwa');
        }

    }
    useEffect(() => {
        fetchPosts();
    }, [])
    if (error) {
        return (
            <h1>{error}</h1>
        )
    }
    if (isLoading) {
        return (
            <h1>Loading!!!</h1>
        )
    }
    return (
        <div>
            {
                posts.map(post => (
                    <p key={post.id}>{post.title} - {post.body}</p>
                ))
            }
        </div>
    );
}
