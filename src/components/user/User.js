import "./User.css"
import {
    Link
} from "react-router-dom";

export const User = ({item, props}) => {
    const {match: {url}} = props;
    const {id, first_name} = item;
    return (
        <div className={'wrap-single-user'}>
            <h3>User Id:{id}</h3>
            <h4>User Name:{first_name}</h4>
            <Link to={{
                pathname: `${url}/${id}`,
                state: {item}
            }}>
                <button>User details</button>
            </Link>
        </div>
    )
}
