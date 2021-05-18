import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";
import "./style.css"
import {Users} from "../components/users/Users";
import {UserDetails} from "../components/userDetails/UserDetails";
import {useEffect, useState} from "react";
import {axiosInstance, getUsers} from "../services/api.axios";

export const Routes = () => {
    const [pageData, setPageData] = useState({});
    // console.log(pageData)
    useEffect(() => {
        getUsers().then(value => {
            // console.log(value.data)
            setPageData(value.data)
        })
    }, [])
    return (
        <Router>
            <div>
                <div className={'nav'}>
                    <Link to={{
                        pathname: `/users`,
                        state: pageData
                    }}>
                        <button>HOME</button>
                    </Link>
                </div>
                <Switch>
                    <Route path={'/users'} component={Users}/>
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
