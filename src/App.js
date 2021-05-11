import './App.css';
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
    return (
        <div>
            <Router>
                <div><Link to={'/'}><button>Home</button></Link></div>
                <div><Link to={'/users'}><button>Users</button></Link></div>
                <div><Link to={'/posts'}><button>Posts</button></Link></div>
                <Switch>
                    <Route path={'/users'} render={() => (<Users/>)}/>
                    <Route path={'/posts'} render={() => (<Posts/>)}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
