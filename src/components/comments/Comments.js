import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {setComments, setCommentsError, setCommentsIsLoading} from "../../redux";

export const Comments = () => {
    const {isLoading, comments, error} = useSelector(({comments}) => comments);
    const dispatch = useDispatch();

    const fetchPosts = async () => {
        try {
            dispatch(setCommentsIsLoading())
            const response = await fetch('https://jsonplaceholder.typicode.com/comments');
            const payload = await response.json();
            dispatch(setComments(payload));
        } catch (e) {
            dispatch(setCommentsError('Failed to fetch data'));
            console.log(e, 'bida');
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
                comments.map(comment => (
                    <p key={comment.id}>{comment.name} - {comment.email}<br/>{comment.body}</p>
                ))
            }
        </div>
    );
}
