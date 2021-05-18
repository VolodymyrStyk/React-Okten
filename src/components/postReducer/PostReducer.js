import {useEffect, useReducer, useState} from "react";
import {getPosts} from "../../services/api.axios";
import {logDOM} from "@testing-library/react";

const reducer = (state, action) => {
    switch (action.type) {
        case 'FILL_POSTS':
            return {
                ...state,
                posts: action.payload
            };
        case 'CHOOSE_POST':
            console.log(state);
            return {

                ...state,
                post: action.payload
            };
        default:
            return {
                ...state
            };
    }
}

export const PostReducer = () => {

    // const [posts, setPosts] = useState([]);
    // const [post, setPost] = useState(null);

    const [state, dispatch] = useReducer(reducer, {posts: [], post: {}});
    const {post,posts} = state;
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                dispatch({type: 'FILL_POSTS', payload: value});
            });
    }, []);
    let choosePost = (id) => {
        let find = posts.find(value => value.id === Number(id));
        dispatch({type: 'CHOOSE_POST', payload: find});
    }

    return (
        <div>
            <hr/>
            <div>
                {
                    post && <div>{post.body}</div>
                }
            </div>
            <hr/>
            {
                posts.map(value => {
                    return <div key={value.id}>
                        {value.id}-{value.title}
                        <button onClick={() => choosePost(value.id)}>choose</button>

                    </div>
                })
            }

        </div>
    );
}
