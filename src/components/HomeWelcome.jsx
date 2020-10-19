import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import ourStoryPic from "../assets/images/willies-our-story.jpg";

const HomeWelcome = () => {
  return (
    <BrowserRouter
      basename="/willies-reimagined-react"
      forceRefresh={true}
      onUpdate={() => window.scrollTo(0, 0)}
    >
      <section
        className="section-welcome bg1-pattern p-t-120 p-b-105"
        id="welcome"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6 p-t-45 p-b-30">
              <div className="wrap-text-welcome t-center">
                <span className="tit2 t-center">
                  Willie's Wine Bar & Cuisine
                </span>

                <h3 className="tit3 t-center m-b-35 m-t-5">Welcome</h3>

                <p
                  className="t-center m-b-22 size3 m-l-r-auto"
                  style={{ textAlign: "left" }}
                >
                  Voted one of the top wine bars in the Twin Cities by
                  Mpls.St.Paul readers March 2020
                </p>

                <Link to="/about" className="txt4">
                  Our Story
                  <i
                    className="fa fa-long-arrow-right m-l-10"
                    aria-hidden="true"
                  ></i>
                </Link>
              </div>
            </div>

            <div className="col-md-6 p-b-30">
              <div className="wrap-pic-welcome size2 bo-rad-10 hov-img-zoom m-l-r-auto">
                <img src={ourStoryPic} alt="IMG-OUR" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </BrowserRouter>
  );
};

export default HomeWelcome;
