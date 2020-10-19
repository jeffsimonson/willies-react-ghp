import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

const Image = (i) => {
  // add a leading zero if necessary and convert to a string
  let j = "";
  if (i < 10) {
    j = "0" + i;
  } else {
    j = "" + i;
  }

  return (
    <BrowserRouter basename="/">
      <Link
        key={i}
        to={require(`../assets/images/gallery/willies-gallery-big-${j}.jpg`)}
        className="item-gallery-footer wrap-pic-w"
        data-lightbox="gallery-footer"
      >
        <img
          src={require(`../assets/images/gallery/willies-gallery-thumb-${j}.jpg`)}
          alt="GALLERY"
        />
      </Link>
    </BrowserRouter>
  );
};

const FooterGallery = () => {
  const gallery = [];

  for (let i = 1; i < 13; i++) {
    gallery.push(Image(i));
  }

  return (
    <div className="col-sm-6 col-md-4 p-t-50">
      <h4 className="txt13 m-b-38">Gallery</h4>

      <div className="wrap-gallery-footer flex-w">{gallery}</div>
    </div>
  );
};

export default FooterGallery;
