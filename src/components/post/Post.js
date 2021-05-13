import "./Post.css"
import {Link} from "react-router-dom";

export const Post = ({item, props}) => {
    const {match: {url}} = props;
    const {id, title} = item;
    const pathDetails = `${url}/${item.id}`;
    const pathPosts = `/comments`;
    return (
        <div>
            <div className={'post-wrap'}>
                <h3>{`Post id:${id}`}</h3>
                <p><b>Title:  {title}</b></p>
                <Link to={
                    {
                        pathname: pathDetails,
                        state: item,
                    }}>
                    <button>Post details</button>
                </Link>
                <Link to={
                    {
                        pathname: pathPosts,
                        state: item,
                        search: `postId=${id}`,
                    }}>
                    <button>Post Comments</button>
                </Link>
            </div>
        </div>
    )
}