import React, { Component } from "react";
import { connect } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";

<<<<<<< HEAD
import Navbar_beforelogin from "./components/Navbar_beforelogin";
import { Sign_img } from "./components/Sign_img";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { FaHome, FaUserPlus, FaSignInAlt } from "react-icons/fa";
import { GrLogin } from "react-icons/gr";
=======
import { Sign_img } from "./components/Sign_img";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./App.css";
import { FaHome, FaUserAlt, FaUserPlus, FaSignInAlt} from "react-icons/fa";
import {GrLogin} from "react-icons/gr"
>>>>>>> c6899383f5923a16ccc18c13636f57d5ac523740
import Login from "./components/login.component";
import Register from "./components/register.component";
import Profile from "./components/profile.component";
import User from "./components/user.component";
import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";
import { history } from "./helpers/history";
import EventBus from "./common/EventBus";
<<<<<<< HEAD
import Footer from "./components/Footer";
import Landingpage from "./components/Landingpage";
import Aboutus from "./components/Aboutus";
=======
import Home from "./components/Home";
import Navbar from "./components/Navbar";
// import Drugs from "./components/Drugs";
import AddDrugs from "./drugs/components/addDrugs";
>>>>>>> c6899383f5923a16ccc18c13636f57d5ac523740

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
<<<<<<< HEAD
          <nav className="navbar navbar-expand navbar-dark">
            <Link to={"/"} className="navbar-brand">
              <b>
                <FaHome /> XYZ Pharmacy
              </b>
=======
          
          {/* <nav className="navbar navbar-expand navbar-dark" >
            <Link to={"/"} className="navbar-brand">
              <h5><FaHome /> XYZ Pharmacy</h5>
>>>>>>> c6899383f5923a16ccc18c13636f57d5ac523740
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
<<<<<<< HEAD
                  <Link to={"/login"} className="navbar-brand">
                    <FaSignInAlt />
                    Login
=======
                  <Link to={"/login"} className="nav-link">
                    <FaSignInAlt/> Login
>>>>>>> c6899383f5923a16ccc18c13636f57d5ac523740
                  </Link>
                </li>

                <li className="nav-item">
<<<<<<< HEAD
                  <Link to={"/register"} className="navbar-brand">
                    <FaUserPlus />  Sign Up 
=======
                  <Link to={"/register"} className="nav-link">
                  <FaUserPlus/> Sign Up
>>>>>>> c6899383f5923a16ccc18c13636f57d5ac523740
                  </Link>
                </li>
              </div>
            )}
<<<<<<< HEAD
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
              <div className="sign_img mt-2 col-lg-5">
              <img src="./signup_image.jpeg" style={{maxWidth:420, borderRadius:50}} alt=""/>
            </div>
            </section>
          </div>
          
          
=======
          </nav> */}
        
        
          <div >
           
            <Switch>
              <Route exact path={["/", "/home"]} component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/user" component={User} />
              {/* <Route exact path="/drugs" component={Drugs} /> */}
              <Route exact path="/add" component={AddDrugs} />
            </Switch>
          </div>
          
        
        
>>>>>>> c6899383f5923a16ccc18c13636f57d5ac523740
        </div>
        {/* <Landingpage /> */}
        <Footer />
        {/* <Navbar_beforelogin/>
        
        <Aboutus/> */}
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
