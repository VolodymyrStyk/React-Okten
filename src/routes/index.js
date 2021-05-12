import {BrowserRouter as Router, Link} from "react-router-dom";

const Routes = () => {
    return (
        <Router>
            <div>
                <ul className={'nam-menu'}>
                    <li>
                        <Link to={'/'}>
                            <button>Home</button>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/users'}>
                            <button>Users</button>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/posts'}>
                            <button>Posts</button>
                        </Link>
                    </li>
                </ul>
            </div>
        </Router>
    )
}
export default Routes;
