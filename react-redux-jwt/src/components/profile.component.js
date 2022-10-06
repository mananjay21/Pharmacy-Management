import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
<<<<<<< HEAD
import Aboutus from "./Aboutus";
import Navbar_beforelogin from "./Navbar_beforelogin";
import Footer from "./Footer";
import Landingpage from "./Landingpage";
=======
import Navbar from "./Navbar";
>>>>>>> c6899383f5923a16ccc18c13636f57d5ac523740

class Profile extends Component {

 
  render() {

    const { user: currentUser } = this.props;

    if (!currentUser) {
      return <Redirect to="/login" />;
    }

    return (
<<<<<<< HEAD
      <div>
        {/* <Navbar_beforelogin/> */}
        <Landingpage/>
        <Footer/>
        {/* <h1>{currentUser.username}</h1> */}
=======
      <div><Navbar/>
      <div class="card bg-light text-dark">
        <h1>{currentUser.username}</h1>
>>>>>>> c6899383f5923a16ccc18c13636f57d5ac523740
        {/* <p>
          <strong>Id:</strong> {currentUser.id}
        </p>
        <p>
          <strong>Email:</strong> {currentUser.email}
        </p>
        <a href="#"><i class="fa fa-dribbble"></i></a>
        <a href="#"><i class="fa fa-twitter"></i></a>
        <a href="#"><i class="fa fa-linkedin"></i></a>
<<<<<<< HEAD
        <a href="#"><i class="fa fa-facebook"></i></a> */}
        
=======
        <a href="#"><i class="fa fa-facebook"></i></a>
          */}
          </div> 
>>>>>>> c6899383f5923a16ccc18c13636f57d5ac523740
          </div>
          
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(Profile);