import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { Link } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
// import Navbar from "./Navbar";
import Navbar_beforelogin from "./Navbar_beforelogin";
import './login.css'

import { connect } from "react-redux";
import { login } from "../actions/auth";
// import {fa-eye} from "react-icons/fa";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      loading: false,
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      loading: true,
    });

    this.form.validateAll();

    const { dispatch, history } = this.props;

    if (this.checkBtn.context._errors.length === 0) {
      dispatch(login(this.state.username, this.state.password))
     
        .then(() => {
<<<<<<< HEAD
          history.push("/profile");
          // window.location.reload();
=======
          history.push("/Drugs");
          //   window.location.reload();
          console.log("logged in ");
          alert("successfully logged in");
>>>>>>> c6899383f5923a16ccc18c13636f57d5ac523740
        })
        .catch(() => {
          this.setState({
            loading: false

          });
        });
    } else {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { isLoggedIn, message } = this.props;

    if (isLoggedIn) {
      return <Redirect to="/profile" />;
    }

    return (
<<<<<<< HEAD
      <div className="col-md-12 p-4">
        <div className="card bg-light text-dark">
          <h1><center>Login</center></h1>


          <Form
            onSubmit={this.handleLogin}
            ref={(c) => {
              this.form = c;
            }}
          >
            <div className="form-group">
              
              <Input
                type="text"
                className="form-control"
                name="username"
                value={this.state.username}
                onChange={this.onChangeUsername}
                validations={[required]}
                placeholder="Enter your Email"
              />
            </div>

            <div className="form-group">
              
              <Input
                type="password"
                className="form-control"
                name="password"
                value={this.state.password}
                onChange={this.onChangePassword}
                validations={[required]}
                placeholder="Enter your Password"
                onclick="password_show_hide();"
                
              />
              <span toggle="password" className="fa fa-fw fa-eye field-icon toggle-password"></span>
              
            </div>

            <div className="form-group">
              <button
                className="btn btn-dark btn-block"
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Login</span>
              </button><h2></h2>
              <p><i><h6>Create an Account  <Link to="/register" className="formFieldLink">
                  Sign Up
            </Link></h6></i></p>
            </div>
=======
      <div>

        <Navbar_beforelogin/>
        <Form
          onSubmit={this.handleLogin}
          ref={(c) => {
            this.form = c;
          }}
        >




          <div className="container-fluid ps-md-0" style={{ marginTop: "56px" }}>
            <div className="row g-0">
              <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
              <div className="col-md-8 col-lg-6">
                <div className="login d-flex align-items-center py-5">
                  <div className="container ">
                    <div className="row">
                      <div className="col-md-9 col-lg-8 mx-auto my-container">
                        <h3 className="login-heading mb-4" >Welcome back!</h3>
>>>>>>> c6899383f5923a16ccc18c13636f57d5ac523740

                        <div className="form-floating mb-3">
                          <Input type="text" className="form-control" placeholder="name@example.com" name="username" value={this.state.username}
                            onChange={this.onChangeUsername} validations={[required]}
                          />
                          {/* <label htmlFor="floatingPassword">Password</label> */}

                        </div>
                        <div className="form-floating mb-3">
                          <Input type="password" className="form-control" placeholder="Password" name="password" value={this.state.password}
                            onChange={this.onChangePassword} validations={[required]} />
                          {/* <label htmlFor="floatingPassword">Password</label> */}
                        </div>
                        <div className="d-grid">
                          <button className="btn btn-lg btn-primary btn-login mb-2" type="submit" disabled={this.state.loading}>
                            {this.state.loading && (
                              <span className="spinner-border spinner-border-sm"></span>
                            )}
                            <span>Login</span>
                          </button>



                          <div className="text-center">
                            {/* <a className="small me-2" href="!#">Forgot password?</a> */}
                            <Link to="/register" style={{ textDecoration: "none" }}><span id="register-here">Register with us?</span></Link>
                          </div>
                        </div>
                        {/* <div className="text-center mt-2" style={{color: 'red', minHeight: '25px'}} dangerouslySetInnerHTML={{__html: error}} /> */}
                        {/* <div className="row" style={{minHeight: "30px"}}>
                        {location.state && <span className="text-center ms-2 lead" style={{color: 'blue'}} dangerouslySetInnerHTML={{__html: location.state.message}} />}
                      </div>   */}

                        {message && (
                          <div className="form-group">
                            <div className="alert alert-danger" role="alert">
                              {message}
                            </div>
                          </div>
                        )}
                        <CheckButton
                          style={{ display: "none" }}
                          ref={(c) => {
                            this.checkBtn = c;
                          }}
                        />



                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>



      </div>

    );
  }
}

function mapStateToProps(state) {
  const { isLoggedIn } = state.auth;
  const { message } = state.message;
  return {
    isLoggedIn,
    message
  };
}

export default connect(mapStateToProps)(Login);
