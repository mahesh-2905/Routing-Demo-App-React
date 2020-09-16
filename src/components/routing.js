import React ,{Component}from 'react';
import {BrowserRouter ,Route,Link} from 'react-router-dom';

import Forms from './forms';
import Home from './home';
import Profile from './Profile';
import Posts from './posts';
import PostNews from './postNews'

class Router extends Component{



    render(){
        return(
            <BrowserRouter>
                <div className="fluid-container">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
                        <Link className="navbar-brand" to="/" >Lang</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/posts">Posts</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/profile">Profile</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Forms">Forms</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div>
                    <Route exact path= '/' component={Home}></Route>
                    <Route exact path= '/posts' component={Posts}></Route>
                    <Route path= '/profile' component={Profile}></Route>
                    <Route path= '/posts/:topic' component={PostNews}></Route>
                    <Route path= '/forms' component={Forms}></Route>
                </div>
            </BrowserRouter>

        )
    }
}

export default Router