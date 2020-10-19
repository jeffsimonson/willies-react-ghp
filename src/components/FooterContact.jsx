import React from "react";

const FooterContact = () => {
  return (
    <div className="col-sm-6 col-md-4 p-t-50">
      <h4 className="txt13 m-b-33">Contact Us</h4>

      <ul className="m-b-70">
        <li className="txt14 m-b-14">
          <i
            className="fa fa-map-marker fs-16 dis-inline-block size19"
            aria-hidden="true"
          ></i>
          1100 Harmon Place, Minneapolis, MN 55403
        </li>

        <li className="txt14 m-b-14">
          <i
            className="fa fa-phone fs-16 dis-inline-block size19"
            aria-hidden="true"
          ></i>
          612-332-8811
        </li>

        <li className="txt14 m-b-14">
          <i
            className="fa fa-envelope fs-13 dis-inline-block size19"
            aria-hidden="true"
          ></i>
          experience@willies.com
        </li>
      </ul>

      <h4 className="txt13 m-b-32">Hours</h4>

      <ul>
        <li className="txt14">4:00 PM – 1:00 AM</li>

        <li className="txt14">Every Day</li>
      </ul>
    </div>
  );
};

export default FooterContact;
