import {BrowserRouter as Router, Route, Switch,Link,Redirect} from "react-router-dom";
import "./style.css"
import {Users} from "../components/users/Users";
import {UserDetails} from "../components/userDetails/UserDetails";
import {NavButtons} from "./navButtons/NavButtons";
import {useEffect, useState} from "react";
import {getUsers} from "../services/api.axios";

export const Routes = () => {
    const [pageInfo, setPageInfo] = useState([]);
    useEffect(() => {
        getUsers().then(value => setPageInfo(value.data))
    }, [])
    console.log(pageInfo)

    return (
        <Router>

            <div>
                <div className={'nav'}>
                    <Link exact to={'/users'}>
                        <button>HOME</button>
                    </Link>
                </div>
                <Switch>
                    <Route path={'/users'} component={Users}/>
                    <Redirect from="/" to="/users"/>
                </Switch>
                <div className={'nav-btn'}>
                    <NavButtons/>
                </div>
                <Switch>
                    <Route path={'/users/:id'} component={UserDetails}/>
                </Switch>
            </div>
        </Router>
    )
}
