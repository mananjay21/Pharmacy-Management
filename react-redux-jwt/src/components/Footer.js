import React, { Component } from "react";
import App from "../App";
import {
  FaFacebookSquare,
  FaTwitter,
  FaGooglePlusSquare,
  FaLinkedin,
  FaGithubSquare,
} from "react-icons/fa";

export class Footer extends Component {
  static propTypes = {};

  render() {
    return (
      <>
      <div className="footer">
        {/* <div class="container my-5" text-center style={{background:"rgb(65, 185, 129, 1)"}} > */}
          {/* <footer class="text-center text-white" style={"background-color: #f1f1f1;"}> */}
          <div class="footer_1" p-5 text-center >
            <section class="mb-5">
              <a
                class="btn_footer btn-link btn-floating btn-lg text-white m-3"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <FaFacebookSquare />
              </a>

              <a
                class="btn_footer btn-link btn-floating btn-lg text-white m-3"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <FaTwitter />
              </a>

              <a
                class="btn_footer btn-link btn-floating btn-lg text-white m-3"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <FaGooglePlusSquare />
              </a>

              <a
                class="btn_footer btn-link btn-floating btn-lg text-white m-3"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <FaLinkedin />
              </a>

              <a
                class="btn_footer btn-link btn-floating btn-lg text-white m-3"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <FaGithubSquare />
              </a>
            </section>
          </div>
          <div class="text-center text-dark p-2" style={{background:"rgb(80, 199, 151)"}}>
           <b> © 2022 Copyright: 
            <a class="text-dark" href="#">
              XyzPharmacy.com
            </a></b>
          </div>
        </div>
        {/* </div> */}
      </>
    );
  }
}

export default Footer;
