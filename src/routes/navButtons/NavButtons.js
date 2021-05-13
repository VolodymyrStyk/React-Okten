import {Link, Route, Switch} from "react-router-dom";
import {Users} from "../../components/users/Users";

export const NavButtons = () => {
    return (<div>
            <Link to={{
                pathname: `/users`,
                state: '{item}',
                search: 'page=2'
            }}>
                <button>Back</button>
            </Link>
            <Link to={{
                pathname: `/users`,
                state: '{item}',
                search: 'page=2'
            }}>
                <button>Next</button>
            </Link>
        </div>
    )
}