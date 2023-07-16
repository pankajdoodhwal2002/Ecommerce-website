import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative  ">
                <img
                  src="images/main-banner-1.jpg"
                  className="img-fluid rounded"
                  alt="main banner"
                />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>Samsung S23 Ultra</h5>
                  <p>
                    From $999.00 or $41.62/mo <br />{" "}
                  </p>
                  <Link className="button">Buy Now</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap justify-content-between align-items-center">
                <div className="small-banner position-relative m-width-300">
                  <img
                    src="images/catbanner-01.jpg"
                    className="img-fluid rounded"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPERCHARGED FOR PROS.</h4>
                    <h5>Samsung S23 Ultra</h5>
                    <p>
                      From $999.00 or $41.62/mo <br />{" "}
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative  ">
                  <img
                    src="images/catbanner-02.jpg"
                    className="img-fluid rounded"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPERCHARGED FOR PROS.</h4>
                    <h5>Samsung S23 Ultra</h5>
                    <p>
                      From $999.00 or $41.62/mo <br />{" "}
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative  ">
                  <img
                    src="images/catbanner-03.jpg"
                    className="img-fluid rounded"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPERCHARGED FOR PROS.</h4>
                    <h5>Samsung S23 Ultra</h5>
                    <p>
                      From $999.00 or $41.62/mo <br />{" "}
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative  ">
                  <img
                    src="images/catbanner-04.jpg"
                    className="img-fluid rounded"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPERCHARGED FOR PROS.</h4>
                    <h5>Samsung S23 Ultra</h5>
                    <p>
                      From $999.00 or $41.62/mo <br />{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-10">
                  <img src="images/service.png" alt="service" />
                  <div>
                    <h6>Free shipping</h6>
                    <p className="mb-0">From all orders over $100</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img src="images/service-02.png" alt="service" />
                  <div>
                    <h6>Daily Surprice Offers</h6>
                    <p className="mb-0">Save up to 25% off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img src="images/service-03.png" alt="service" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Shop with an expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img src="images/service-04.png" alt="service" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className="mb-0">Get Factory Direct Price</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img src="images/service-05.png" alt="service" />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className="mb-0">100% Protected Payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default Home;
