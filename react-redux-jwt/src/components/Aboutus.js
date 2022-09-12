import React from "react";
import "../components/style.css";
import Footer from "./Footer";
import Navbar_beforelogin from "./Navbar_beforelogin";



const Aboutus = () => {
  return (
    <>
    {/* <Navbar_beforelogin/> */}
    <div>
        
      <div
        id="introCarousel"
        class="carousel slide carousel-fade shadow-2-strong"
        data-mdb-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-mdb-target="#introCarousel"
            data-mdb-slide-to="0"
            class="active"
          ></li>
          <li data-mdb-target="#introCarousel" data-mdb-slide-to="1"></li>
          <li data-mdb-target="#introCarousel" data-mdb-slide-to="2"></li>
        </ol>

        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="mask" style={{ background: "rgba(0, 0, 0, 0.3)" }}>
              <div class="d-flex justify-content-center align-items-center h-100">
                <div class="text-white text-center">
                  <h1 class="mb-3">Learn Bootstrap 5 with MDB</h1>
                  <h5 class="mb-4">
                    Best & free guide of responsive web design
                  </h5>
                  <a class="btn btn-outline-light btn-lg m-2" href="#"
                  role="button" rel="nofollow" target="_blank">Know More</a>
                </div>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div class="mask" style={{ background: "rgba(0, 0, 0, 0.3)" }}>
              <div class="d-flex justify-content-center align-items-center h-100">
                <div class="text-white text-center">
                  <h2>You can place here any content</h2>
                </div>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div class="mask" style={{ background: "rgba(29, 236, 197, 0.7),rgba(91, 14, 214, 0.7) 100%" }}>
              <div class="d-flex justify-content-center align-items-center h-100">
                <div class="text-white text-center">
                  <h2>And cover it with any mask</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a class="carousel-control-prev" href="#introCarousel" role="button" data-mdb-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#introCarousel" role="button" data-mdb-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>

      </div>
      <hr class="my-5" />
      <div class="container">
      <section>
        <div class="row">
          <div class="col-md-6 gx-5 mb-4">
            <div class="bg-image hover-overlay ripple shadow-2-strong rounded-5" data-mdb-ripple-color="light">
              <img src="https://images.pexels.com/photos/139398/thermometer-headache-pain-pills-139398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="img-fluid" />
              <a href="#!">
                <div class="mask" style={{background: "rgba(251, 251, 251, 0.15)"}}>

                </div>
              </a>
            </div>
          </div>

          <div class="col-md-6 gx-5 mb-4">
            <h4><strong>Facilis consequatur eligendi</strong></h4>
            <p class="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis consequatur
              eligendi quisquam doloremque vero ex debitis veritatis placeat unde animi laborum
              sapiente illo possimus, commodi dignissimos obcaecati illum maiores corporis.
            </p>
            <p><strong>Doloremque vero ex debitis veritatis?</strong></p>
            <p class="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod itaque voluptate
              nesciunt laborum incidunt. Officia, quam consectetur. Earum eligendi aliquam illum
              alias, unde optio accusantium soluta, iusto molestiae adipisci et?
            </p>
          </div>
        </div>
      </section>

      <hr class="my-5" />

      <section class="text-center">
        <h4 class="mb-5"><strong>Facilis consequatur eligendi</strong></h4>

        <div class="row">
          <div class="col-lg-4 col-md-12 mb-4">
            <div class="card">
              <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" class="img-fluid" />
                <a href="#!">
                  <div class="mask" style={{background: "rgba(251, 251, 251, 0.15)"}}></div>
                </a>
              </div>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up the bulk of the
                  card's content.
                </p>
                <a href="#!" class="btn btn-primary">Button</a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mb-4">
            <div class="card">
              <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="https://mdbootstrap.com/img/new/standard/nature/023.jpg" class="img-fluid" />
                <a href="#!">
                  <div class="mask" style={{background: "rgba(251, 251, 251, 0.15)"}}></div>
                </a>
              </div>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up the bulk of the
                  card's content.
                </p>
                <a href="#!" class="btn btn-primary">Button</a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mb-4">
            <div class="card">
              <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="https://mdbootstrap.com/img/new/standard/nature/111.jpg" class="img-fluid" />
                <a href="#!">
                  <div class="mask" style={{background: "rgba(251, 251, 251, 0.15)"}}></div>
                </a>
              </div>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up the bulk of the
                  card's content.
                </p>
                <a href="#!" class="btn btn-primary">Button</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr class="my-5" />
      
        </div>
        {/* <Footer/> */}
    </div>
    </>
    
  );
};

export default Aboutus;
