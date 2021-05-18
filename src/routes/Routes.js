import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Navigation} from "./navigation/Navigation";
import {UserDetails} from "../components/userDetails/UserDetails";
import {UserPosts} from "../components/userPosts/UserPosts";
import {Parent} from "../components/Parent";
import {MyContext} from "../App";

const Routes = () => {
    return (
        <Router>
            <MyContext.Provider value={'Hello'}>
                <Parent/>
            </MyContext.Provider>
            <Navigation/>
        </Router>
    )
}
export default Routes;
