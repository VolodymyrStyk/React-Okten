import "./PostComments.css"
import {useEffect, useState} from "react";
import {axiosInstace} from "../../services/api.axios";

export const PostComments  = (props) => {
    console.log(props);
    const {location: {search,state:{id}}} = props;
    console.log(search);
    const [comments, setComments] = useState([]);
    useEffect(() => {
        axiosInstace.get('/comments' + search).then(value => setComments([...value.data]));
    }, []);

    return (
        <div>
            <h2>Post {id} comments:</h2>
            <div className={'wrap-post-comments'}>
                {
                    comments.map(value => <div key={value.id} className={'wrap-comment'}>
                        <h3>Comment Id: {value.id}; Name: {value.name}</h3>
                        <p><b>Post Id: {value.postId}</b></p>
                        <p>{value.email}</p>
                        <p>{value.body}</p>
                        <hr/>
                    </div>)
                }
            </div>
        </div>
    )
}
