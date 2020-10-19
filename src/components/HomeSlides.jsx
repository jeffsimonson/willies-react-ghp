import React from "react";

const slick = (i) => {
  let mainClasses = "";
  let slickImage = { backgroundImage: "" };
  let animationFirst = "";
  let animationSecond = "";
  let animationThird = "";

  switch (i) {
    case 1:
      mainClasses = "item-slick1 item1-slick1";
      slickImage.backgroundImage =
        "url(" + require("../assets/images/willies-master-slide-01.jpg") + ")";
      animationFirst = "fadeInDown";
      animationSecond = "fadeInUp";
      animationThird = "zoomIn";
      break;
    case 2:
      mainClasses = "item-slick1 item2-slick1";
      slickImage.backgroundImage =
        "url(" + require("../assets/images/willies-master-slide-02.jpg") + ")";
      animationFirst = "rollIn";
      animationSecond = "lightSpeedIn";
      animationThird = "slideInUp";
      break;
    case 3:
      mainClasses = "item-slick1 item3-slick1";
      slickImage.backgroundImage =
        "url(" + require("../assets/images/willies-master-slide-03.jpg") + ")";
      animationFirst = "rotateInDownLeft";
      animationSecond = "rotateInUpRight";
      animationThird = "rotateIn";
      break;
    default:
      break;
  }

  return (
    <div className={mainClasses} style={slickImage}>
      <div className="wrap-content-slide1 sizefull flex-col-c-m p-l-15 p-r-15 p-t-150 p-b-170">
        <span
          className="caption1-slide1 txt1 t-center animated visible-false m-b-15"
          data-appear={animationFirst}
        >
          Welcome to
        </span>

        <h2
          className="caption2-slide1 tit1 t-center animated visible-false m-b-0"
          data-appear={animationSecond}
        >
          Willie's
        </h2>
        <h3>Wine Bar & Cuisine</h3>

        <div
          className="wrap-btn-slide1 animated visible-false"
          data-appear={animationThird}
        >
          {/* <!-- Down Arrow Button --> */}
          <a href="#welcome" className="btn1 flex-c-m size1 txt3 trans-0-4">
            <i
              className="fa fa-arrow-down"
              style={{ fontSize: "36px", color: "#0047ab" }}
            ></i>
          </a>
        </div>
      </div>
    </div>
  );
};

const HomeSlides = () => {
  const slideContainter = [];

  for (let i = 1; i < 4; i++) {
    slideContainter.push(slick(i));
  }

  return (
    <section className="section-slide">
      <div className="wrap-slick1">
        <div class="slick1">{slideContainter}</div>

        <div className="wrap-slick1-dots"></div>
      </div>
    </section>
  );
};

export default HomeSlides;
