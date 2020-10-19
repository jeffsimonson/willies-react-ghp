import React from "react";

import FooterContact from "./FooterContact";
import FooterBottom from "./FooterBottom";
import FooterGallery from "./FooterGallery";

function FooterBar() {
  return (
    <footer className="bg1">
      <div className="container p-t-40 p-b-70">
        <div className="row">
          <FooterContact />
          <FooterGallery />
        </div>
      </div>
      <FooterBottom />
    </footer>
  );
}

export default FooterBar;
