import {
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import "./style.css"
import {Users} from "../components/users/Users";
import {UserDetails} from "../components/userDetails/UserDetails";
import {NavButtons} from "./navButtons/NavButtons";

export const Routes = () => {
    return (
        <div>
            <div className={'nav'}>
                <Link exact to={'/users'}>
                    <button>HOME</button>
                </Link>
            </div>
            <Switch>
                <Route path={'/users'} component={Users}/>
                <Redirect from="/" to="/users" />
            </Switch>
            <div className={'nav-btn'}>
                <NavButtons />
            </div>
            <Switch>
                <Route path={'/users/:id'} component={UserDetails}/>
            </Switch>
        </div>
    )
}
