import {useEffect, useState} from "react";
import {axiosInstace, getPosts, getUsers} from "../../services/api.axios";
import "./Posts.css"
import {Post} from "../post/Post";

export const Posts = ({props}) => {
    const {location: {search}} = props;
    const [posts, setPosts] = useState([]);
    useEffect(() => {
       getPosts().then(value => setPosts([...value.data]));
    }, []);
    return (
        <div>
            <h2>Posts Page</h2>
            <div className={'wrap-posts'}>{
                posts.map(value => <Post key={value.id} item={value} props={props}/>)
            }</div>
        </div>
    )
}
