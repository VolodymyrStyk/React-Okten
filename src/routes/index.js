import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";
import "./style.css"
import {Users} from "../components/users/Users";
import {UserDetails} from "../components/userDetails/UserDetails";
import {NavButtons} from "./navButtons/NavButtons";
import {useEffect, useState} from "react";
import {axiosInstance, getUsers} from "../services/api.axios";

export const Routes = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getUsers().then(value => setData(value.data))
    }, [])
    console.log(data);
    return (
        <Router>
            <div>
                <div className={'nav'}>
                    <Link to={{
                        pathname: `/users`,
                        search: `page=${data.page}`
                    }}>
                        <button>HOME</button>
                    </Link>
                </div>
                <Switch>
                    {/*<Route exact={true} path={'/users'} component={Users}/>*/}
                    <Route exact path={`/users`} render={(props) => {
                        return <Users data = {data} props={props}/>
                    }}/>
                    <Redirect from="/" to="/users"/>
                </Switch>
                <div className={'nav-btn'}>
                </div>
                <Switch>
                    <Route path={'/users/:id'} component={UserDetails}/>
                </Switch>
            </div>
        </Router>
    )
}
