import React from "react";

import williesMapLogo from "../assets/images/icons/WilliesMapLogo.png";

const ContactForm = () => {
  return (
    <div class="container">
      <div class="map bo8 bo-rad-10 of-hidden">
        <div
          class="contact-map size37"
          id="google_map"
          data-map-x="44.974455"
          data-map-y="-93.278705"
          data-pin={williesMapLogo}
          data-scrollwhell="0"
          data-draggable="1"
        ></div>
      </div>
    </div>
  );
};

export default ContactForm;
