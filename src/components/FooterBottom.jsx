import React from "react";
const FooterBottom = () => {
  return (
    <div className="end-footer bg2">
      <div className="container">
        <div className="flex-sb-m flex-w p-t-22 p-b-22">
          <div className="p-t-5 p-b-5">
            <a href="http://www.tripadvisor.com" className="fs-15 c-white">
              <i className="fa fa-tripadvisor" aria-hidden="true"></i>
            </a>
            <a href="http://www.facebook.com" className="fs-15 c-white">
              <i className="fa fa-facebook m-l-18" aria-hidden="true"></i>
            </a>
            <a href="http://www.twitter.com" className="fs-15 c-white">
              <i className="fa fa-twitter m-l-18" aria-hidden="true"></i>
            </a>
          </div>

          <div className="txt17 p-r-20 p-t-5 p-b-5">
            Copyright &copy; 2020 All rights reserved - Willie's Wine Bar &
            Cuisine
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
