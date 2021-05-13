import "./PostDetails.css"

export const PostDetails = (props) => {
    console.log(props);
    const {location: {state: postInfo}} = props;
    const {id,title,userId,body} = postInfo;
    return (
        <div>
            <h2>Post details:</h2>
            <div className={'user-post-wrap'}>
                <h3>{`Post id:${id} ${title}`}</h3>
                <p><b>user Id:{userId}</b></p>
                <p>{body}</p>
            </div>
        </div>
    )
}
