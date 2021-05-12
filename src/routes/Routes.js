import {BrowserRouter as Router, Route} from "react-router-dom";
import {Navigation} from "./navigation/Navigation";
import {UserDetails} from "../components/userDetails/UserDetails";

const Routes = () => {
    return (
        <Router>
            <Navigation/>
            <Route  path={'/users/user-details/:id'} component={UserDetails}/>
        </Router>
    )
}
export default Routes;
