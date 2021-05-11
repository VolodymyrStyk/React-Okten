import {useEffect, useState} from "react";
import axiosInstance from "../../services/api";
import Post from "../post/Post";
import './Posts.css'

export default function Posts() {
    const [posts, setPosts] = useState([]);
    const [singlePost, setSinglePost] = useState(null);
    useEffect(() => {
        axiosInstance.get('/posts').then(value => setPosts([...value.data]))

    }, []);

    const searchPost = (id) => {
        const checkedPost = posts.find(value => value.id === id);
        setSinglePost(checkedPost);
    }


    return (
        <div className={'posts-wrap'}>
            <div className={'posts-info'}>
                {
                    posts.map(value => <Post key={value.id} item={value} searchPost={searchPost}/>)
                }
            </div>
            <div className={'posts-details'}>
                {
                    singlePost ? (<div className={'posts-details-one'}>
                            <h4>{singlePost.id} - {singlePost.userId}</h4>
                        <h4>{singlePost.title}</h4>
                        <p>{singlePost.body}</p>
                        </div>) :
                        (<div className={'posts-details-one'}>Post details should be here.</div>)
                }
            </div>
        </div>
    );
}