import React from "react";

import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import wineBottlePhoto from "../assets/images/willies-wine-bottles.jpg";
import smallPlatePhoto from "../assets/images/willies-small-plates.jpg";
import jazzPhoto from "../assets/images/willies-jazz-band.jpg";

const HomeIntro = () => {
  const IggersPhoto = {
    backgroundImage:
      "url(" + require("../assets/images/Willlie-Iggers-photo.png") + ")",
  };

  return (
    <BrowserRouter
      basename="/willies-reimagined-react"
      forceRefresh={true}
      onUpdate={() => window.scrollTo(0, 0)}
    >
      <section className="section-intro">
        <div
          className="header-intro parallax100 t-center p-t-135 p-b-158"
          style={IggersPhoto}
        >
          <span className="tit2 p-l-15 p-r-15">Discover</span>

          <h3 className="tit4 t-center p-l-15 p-r-15 p-t-3">
            Willie's Wine Bar & Cuisine
          </h3>
        </div>

        <div className="content-intro bg-white p-t-77 p-b-133">
          <div className="container">
            <div className="row">
              <div className="col-md-4 p-t-30">
                <div className="blo1">
                  <div className="wrap-pic-blo1 bo-rad-10 hov-img-zoom">
                    <Link to="/wines">
                      <img src={wineBottlePhoto} alt="IMG-INTRO" />
                    </Link>
                  </div>

                  <div className="wrap-text-blo1 p-t-35">
                    <h4 className="txt5 color0-hov trans-0-4 m-b-13">
                      Wines by the glass
                    </h4>

                    <p className="m-b-20">
                      We feature over 40 wines by the glass and over 100 wines
                      by the bottle. Our wine list includes both old and new
                      world wines originating from select wineries in Europe,
                      South America, Australia, and the United States.
                    </p>

                    <Link to="/wines" className="txt4">
                      Learn More
                      <i
                        className="fa fa-long-arrow-right m-l-10"
                        aria-hidden="true"
                      ></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-4 p-t-30">
                <div className="blo1">
                  <div className="wrap-pic-blo1 bo-rad-10 hov-img-zoom">
                    <Link to="/food">
                      <img src={smallPlatePhoto} alt="IMG-INTRO" />
                    </Link>
                  </div>

                  <div className="wrap-text-blo1 p-t-35">
                    <h4 className="txt5 color0-hov trans-0-4 m-b-13">
                      Small & Large Plates
                    </h4>

                    <p className="m-b-20">
                      Our menu features the chef-driven creations of James Beard
                      award-winning executive chef Hugo Birchman. Try our
                      delicious wine-paired small plates large plates. Whenever
                      possible, we source our fresh ingedients from local,
                      organic farms and producers.
                    </p>

                    <Link to="/food" className="txt4">
                      Learn More
                      <i
                        className="fa fa-long-arrow-right m-l-10"
                        aria-hidden="true"
                      ></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-4 p-t-30">
                <div className="blo1">
                  <div className="wrap-pic-blo1 bo-rad-10 hov-img-zoom">
                    <img src={jazzPhoto} alt="IMG-INTRO" />
                  </div>

                  <div className="wrap-text-blo1 p-t-35">
                    <h4 className="txt5 color0-hov trans-0-4 m-b-13">
                      Smooth Jazz
                    </h4>

                    <p className="m-b-20">
                      Enjoy live jazz performances on Friday and Saturday
                      evenings. Wllie's is the smooth jazz hotspot in downtown
                      Minneapolis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </BrowserRouter>
  );
};

export default HomeIntro;
