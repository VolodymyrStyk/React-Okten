import {Link, Route, Switch} from "react-router-dom";
import './Navigation.css';
import {Home} from "../../components/home/Home";
import {Users} from "../../components/users/Users";

export const Navigation = () => {
    return (
        <div>
            <ul className={'nam-menu'}>
                <li>
                    <Link to={'/'}>
                        <button>Home</button>
                    </Link>
                </li>
                <li>
                    <Link to={'/users'}>
                        <button>Users</button>
                    </Link>
                </li>
                <li>
                    <Link to={'/posts'}>
                        <button>Posts</button>
                    </Link>
                </li>
            </ul>
            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route exact path={'/users'} component={Users}/>
            </Switch>
        </div>
    );
}

