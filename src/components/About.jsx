import React from "react";

import chefPhoto from "../assets/images/willies-chef.jpg";

function About() {
  const wineCellerPhoto = {
    backgroundImage:
      "url(" + require("../assets/images/willies-wine-cellar.jpg") + ")",
  };
  return (
    <>
      <section className="bg-title-page flex-c-m p-t-160 p-b-80 p-l-15 p-r-15 about-us">
        <h2 className="tit6 t-center">About Us</h2>
      </section>

      <section className="bg2-pattern p-t-116 p-b-110 t-center p-l-15 p-r-15 our-story">
        <span className="tit2 t-center">Willie's Wine Bar & Cuisine</span>

        <h3 className="tit3 t-center m-b-35 m-t-5">Our Story</h3>

        <div className="t-left size32 m-l-r-auto">
          <p>
            Willie's is the wine lover's hangout in the Minneapolis Loring Park
            neighborhood. Opened in 2006, it soon became one of the Twin Cities'
            top wine bars. Willie's goes the extra mile. Every wine bar offers
            wines by the glass, but Willie's offers more than 50 (and many more
            by the bottle), with your choice of a 3- or 6-ounce pour, and with
            six shapes of Riedel stemware from Austria.
          </p>
          <p>
            The atmosphere is Urban Contemporary and features live smooth jazz
            music and the paintings of local artist, Jeanie Short. We are
            connected to the downtown Minneapolis skyway system near the
            Minneapolis campus of St. Thomas University.
          </p>
          <p>
            Our aim is to make everyone comfortable with tasting new wines.
            Browsing our wine menu is an interesting experience in itself. Each
            wine listed also has background information including the region it
            came from, the details about the winery that produced it, and of
            course, a completed description of its flavor profile.
          </p>
        </div>
      </section>

      <section>
        <div className="parallax0 parallax100" style={wineCellerPhoto}>
          <div className="overlay0-parallax t-center size33"></div>
        </div>
      </section>

      <section className="section-chef bgwhite p-t-115 p-b-95">
        <div className="container t-center">
          <span className="tit2 t-center">Meet Our</span>

          <h3 className="tit5 t-center m-b-50 m-t-5">Chef</h3>

          <div className="row">
            <div className="col-md-8 col-lg-4 m-l-r-auto p-b-30">
              <div className="blo5 pos-relative p-t-60">
                <div className="pic-blo5 bo4 wrap-cir-pic hov-img-zoom meet-chef">
                  <a href="#x">
                    <img src={chefPhoto} alt="IGM-AVATAR" />
                  </a>
                </div>

                <div className="text-blo5 size34 t-center bo-rad-10 bo7 p-t-125 p-l-35 p-r-35 p-b-30">
                  <a href="#x" className="txt34 dis-block p-b-6">
                    Hugo Birchman
                  </a>

                  <span className="dis-block t-center txt35 p-b-25">
                    Executive Chef
                  </span>

                  <p className="t-center">
                    Chef Hugo was previously the Executive Chef at Razzaluna in
                    St. Paul. He is a James Beard award winning chef. When he is
                    not whipping up new recipes in the kitchen, he is buying
                    fresh produce from local, organic producers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
