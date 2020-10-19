import React from "react";

import mapIcon from "../assets/images/icons/map-icon.png";
import phoneIcon from "../assets/images/icons/phone-icon.png";
import clockIcon from "../assets/images/icons/clock-icon.png";

const ContactInfo = () => {
  return (
    <div class="row p-t-135">
      <div class="col-sm-8 col-md-4 col-lg-4 m-l-r-auto p-t-30">
        <div class="dis-flex m-l-23">
          <div class="p-r-40 p-t-6">
            <img src={mapIcon} alt="IMG-ICON" />
          </div>

          <div class="flex-col-l">
            <span class="txt5 p-b-10">Location</span>

            <span class="txt23 size38">
              1100 Harmon Place, Minneapolis, MN 55403
            </span>
          </div>
        </div>
      </div>

      <div class="col-sm-8 col-md-3 col-lg-4 m-l-r-auto p-t-30">
        <div class="dis-flex m-l-23">
          <div class="p-r-40 p-t-6">
            <img src={phoneIcon} alt="IMG-ICON" />
          </div>

          <div class="flex-col-l">
            <span class="txt5 p-b-10">Call Us</span>

            <span class="txt23 size38">612-332-8811</span>
          </div>
        </div>
      </div>

      <div class="col-sm-8 col-md-5 col-lg-4 m-l-r-auto p-t-30">
        <div class="dis-flex m-l-23">
          <div class="p-r-40 p-t-6">
            <img src={clockIcon} alt="IMG-ICON" />
          </div>

          <div class="flex-col-l">
            <span class="txt5 p-b-10">Hours</span>

            <span class="txt23 size38">
              4:00 PM – 1:00 AM <br />
              Every Day
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
