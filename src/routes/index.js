import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";
import "./style.css"
import {Users} from "../components/users/Users";
import {UserDetails} from "../components/userDetails/UserDetails";
import {Home} from "../components/home/Home";
import React, {useEffect, useState} from "react";
import {axiosInstance} from "../services/api.axios";

export let MyContext = React.createContext('');

export const Routes = () => {
    const [getData, setData] = useState();
    useEffect(() => {
        axiosInstance.get('/users?page=1').then(value => {
            setData(value.data)
        })
    }, [])
    let dataApi;

    if (getData) {
        console.log(getData);
        dataApi = getData;
    }
    return (
        <Router>
            <MyContext.Provider value={dataApi}>
            <div>
                <div className={'nav'}>
                    <Link to={{
                        pathname: `/`
                    }}>
                        <button>HOME</button>
                    </Link>
                    <Link to={{
                        pathname: `/users`,
                        search: `page=1`,
                    }}>
                        <button>Users</button>
                    </Link>
                </div>
                <Switch>
                    <Route path={'/users'} component={Users}/>
                    <Route path={'/'} component={Home}/>
                </Switch>
                <div className={'nav-btn'}>
                </div>
                <Switch>
                    <Route path={'/users/:id'} component={UserDetails}/>
                </Switch>
            </div>
            </MyContext.Provider>
        </Router>
    )
}
