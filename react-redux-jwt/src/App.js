import React, { Component } from "react";
import { connect } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";

import Navbar_beforelogin from "./components/Navbar_beforelogin";
import { Sign_img } from "./components/Sign_img";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { FaHome, FaUserPlus, FaSignInAlt } from "react-icons/fa";
import { GrLogin } from "react-icons/gr";
import Login from "./components/login.component";
import Register from "./components/register.component";
import Profile from "./components/profile.component";
import User from "./components/user.component";
import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";
import { history } from "./helpers/history";
import EventBus from "./common/EventBus";
import Footer from "./components/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      currentUser: undefined,
    };

    history.listen((location) => {
      props.dispatch(clearMessage());
    });
  }

  componentDidMount() {
    const user = this.props.user;

    if (user) {
      this.setState({
        currentUser: user,
      });
    }

    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    this.props.dispatch(logout());
    this.setState({
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser } = this.state;

    return (
      <Router history={history}>
        <div>
          <nav className="navbar navbar-expand navbar-dark">
            <Link to={"/"} className="navbar-brand">
              <h5>
                <FaHome /> XYZ Pharmacy
              </h5>
            </Link>
            <div className="navbar-nav mr-auto">
              {currentUser && (
                <li className="nav-item">
                  <Link to={"/user"} className="nav-link">
                    Resource
                  </Link>
                </li>
              )}
            </div>

            {currentUser ? (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/profile"} className="nav-link">
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="/login" className="nav-link" onClick={this.logOut}>
                    LogOut
                  </a>
                </li>
              </div>
            ) : (
              <div className="navbar-nav ml-auto" >
                <li className="nav-item">
                  <Link to={"/login"} className="nav-link">
                    <FaSignInAlt />
                    <h5> Login</h5>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/register"} className="nav-link">
                    <FaUserPlus /> <h5> Sign Up </h5>
                  </Link>
                </li>
              </div>
            )}
          </nav>
          <div className="container mt-6">
            <section className="d-flex justify-content-between">
              <div className="container mt-3  col-lg-5">
                <Switch>
                  <Route exact path={["/", "/register"]} component={Register} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/profile" component={Profile} />
                  <Route exact path="/user" component={User} />
                </Switch>
              </div>
              <Sign_img />
            </section>
          </div>
          
          
        </div>
        <Navbar_beforelogin/>
        <Footer />
      </Router>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(App);
