import "./UserPosts.css"
import {useEffect, useState} from "react";
import {axiosInstace, getPosts} from "../../services/api.axios";

export const UserPosts = ({props}) => {
    console.log(props);
    const {location: {search,state:{id}}} = props;
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axiosInstace.get('/posts' + search).then(value => setPosts([...value.data]));
    }, []);

    return (
        <div>
            <h2>User {id} posts:</h2>
            <div className={'wrap-users-posts'}>
                {
                    posts.map(value => <div key={value.id} className={'wrap-post'}>
                        <h3>Post Id: {value.id}; Title: {value.title}</h3>
                        <p><b>User Id: {value.userId}</b></p>
                        <p>{value.body}</p>
                        <hr/>
                    </div>)
                }
            </div>
        </div>
    )
}