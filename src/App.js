import './App.css';
import Users from "./components/users/Users";
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import UserDetails from "./components/user-details/UserDetails";

export default function App() {
    return (
        <div>
            <Router>
                <div><Link to={'/'}><button>Home</button></Link></div>
                <div><Link to={'/users'}><button>Users</button></Link></div>
                <div><Link to={'/posts'}><button>Posts</button></Link></div>
                <Switch>
                    <Route exact={true} path={'/users'}
                           render={(props) =>{
                               return <Users {...props}/>}}/>
                    <Route exact={true} path={'/users/:id'} render={
                        (props) =>{
                            let {match:{params:{id}}} = props;
                            return <UserDetails userId ={id}/>
                        }}/>
                </Switch>
            </Router>
        </div>
    );
}

