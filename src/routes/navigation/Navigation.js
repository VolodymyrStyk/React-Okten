import {Link, Route, Switch} from "react-router-dom";
import './Navigation.css';
import {Home} from "../../components/home/Home";
import {Users} from "../../components/users/Users";
import {Posts} from "../../components/posts/Posts";
import {UserDetails} from "../../components/userDetails/UserDetails";
import {UserPosts} from "../../components/userPosts/UserPosts";
import {PostDetails} from "../../components/postDetails/PostDetails";
import {PostComments} from "../../components/postComments/PostComments";
import {PostReducer} from "../../components/postReducer/PostReducer";

export const Navigation = () => {
    return (


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
                <li>
                    <Link to={'/posts-reducer'}>
                        <button>PostsReducer</button>
                    </Link>
                </li>
            </ul>
            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route exact path={'/users'} component={Users}/>
                <Route path={'/users/:id'} component={UserDetails}/>
                <Route path={'/posts/:id'} component={PostDetails}/>
                <Route path={'/comments'} component={PostComments}/>
                <Route path={`/posts`} render={(props) => {
                    return(window.location?.search?(<UserPosts props={props}/>):(<Posts props={props}/>))
                }}/>
                <Route path={'/posts-reducer'} component={PostReducer}/>
            </Switch>
        </div>
    );
}
