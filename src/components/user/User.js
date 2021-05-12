import './User.css'
import {Link} from "react-router-dom";

export const User = ({item, props}) => {
    const {match: {url}} = props;
    const {id, name, email} = item;
    const path = `${url}/user-details/${item.id}`;
    return (
        <div>
            <div className={'user-wrap'}>
                <h3>{`ID:${id} ${name}`}</h3>
                <p>{`E-mail ${email}`}</p>
                <Link to={
                    {
                        pathname: path,
                        state: item,
                        search: "?sort=name",
                    }}>
                    <button>User details</button>
                </Link>
                <Link to={`${url}/user-posts/${item.id}`}>
                    <button>User Posts</button>
                </Link>
            </div>
        </div>
    )
}