import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Navigation} from "./navigation/Navigation";
import {UserDetails} from "../components/userDetails/UserDetails";
import {UserPosts} from "../components/userPosts/UserPosts";

const Routes = () => {
    return (
        <Router>
            <Navigation/>
        </Router>
    )
}
export default Routes;
