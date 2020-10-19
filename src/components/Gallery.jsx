import React from "react";

import { BrowserRouter, Link } from "react-router-dom";

function Gallery() {
  return (
    <>
      <BrowserRouter basename="/">
        <section className="bg-title-page  p-t-0 p-b-5 p-l-15 p-r-15 main-gallery">
          <h2 className="tit6 t-center">Gallery</h2>
        </section>

        <section>
          <div className="section-gallery p-t-118 p-b-100">
            <div>
              <div className="wrap-label-gallery filter-tope-group size27 flex-w flex-sb-m m-l-r-auto flex-col-c-sm p-l-15 p-r-15 m-b-60">
                <button
                  className="label-gallery txt26 trans-0-4 is-actived"
                  data-filter="*"
                >
                  All Photos
                </button>

                <button
                  className="label-gallery txt26 trans-0-4"
                  data-filter=".interior"
                >
                  Interior
                </button>

                <button
                  className="label-gallery txt26 trans-0-4"
                  data-filter=".food"
                >
                  Food
                </button>

                <button
                  className="label-gallery txt26 trans-0-4"
                  data-filter=".events"
                >
                  Events
                </button>

                <button
                  className="label-gallery txt26 trans-0-4"
                  data-filter=".guests"
                >
                  Vip guests
                </button>
              </div>

              <div className="wrap-gallery isotope-grid flex-w p-l-25 p-r-25">
                <div className="item-gallery isotope-item bo-rad-10 hov-img-zoom events guests">
                  <img
                    src={require(`../assets/images/gallery/willies-gallery-thumb-01.jpg`)}
                    alt="IMG-GALLERY"
                  />

                  <div className="overlay-item-gallery trans-0-4 flex-c-m">
                    <Link
                      to={require(`../assets/images/gallery/willies-gallery-big-01.jpg`)}
                      className="btn-show-gallery flex-c-m fa fa-search"
                      data-lightbox="gallery"
                    ></Link>
                  </div>
                </div>

                <div className="item-gallery isotope-item bo-rad-10 hov-img-zoom events food">
                  <img
                    src={require(`../assets/images/gallery/willies-gallery-thumb-02.jpg`)}
                    alt="IMG-GALLERY"
                  />

                  <div className="overlay-item-gallery trans-0-4 flex-c-m">
                    <Link
                      to={require(`../assets/images/gallery/willies-gallery-big-02.jpg`)}
                      className="btn-show-gallery flex-c-m fa fa-search"
                      data-lightbox="gallery"
                    ></Link>
                  </div>
                </div>

                <div className="item-gallery isotope-item bo-rad-10 hov-img-zoom events events">
                  <img
                    src={require(`../assets/images/gallery/willies-gallery-thumb-03.jpg`)}
                    alt="IMG-GALLERY"
                  />

                  <div className="overlay-item-gallery trans-0-4 flex-c-m">
                    <Link
                      to={require(`../assets/images/gallery/willies-gallery-big-03.jpg`)}
                      className="btn-show-gallery flex-c-m fa fa-search"
                      data-lightbox="gallery"
                    ></Link>
                  </div>
                </div>

                <div className="item-gallery isotope-item bo-rad-10 hov-img-zoom events guests">
                  <img
                    src={require(`../assets/images/gallery/willies-gallery-thumb-04.jpg`)}
                    alt="IMG-GALLERY"
                  />

                  <div className="overlay-item-gallery trans-0-4 flex-c-m">
                    <Link
                      to={require(`../assets/images/gallery/willies-gallery-big-04.jpg`)}
                      className="btn-show-gallery flex-c-m fa fa-search"
                      data-lightbox="gallery"
                    ></Link>
                  </div>
                </div>

                <div className="item-gallery isotope-item bo-rad-10 hov-img-zoom events food">
                  <img
                    src={require(`../assets/images/gallery/willies-gallery-thumb-05.jpg`)}
                    alt="IMG-GALLERY"
                  />

                  <div className="overlay-item-gallery trans-0-4 flex-c-m">
                    <Link
                      to={require(`../assets/images/gallery/willies-gallery-big-05.jpg`)}
                      className="btn-show-gallery flex-c-m fa fa-search"
                      data-lightbox="gallery"
                    ></Link>
                  </div>
                </div>

                <div className="item-gallery isotope-item bo-rad-10 hov-img-zoom events interior">
                  <img
                    src={require(`../assets/images/gallery/willies-gallery-thumb-06.jpg`)}
                    alt="IMG-GALLERY"
                  />

                  <div className="overlay-item-gallery trans-0-4 flex-c-m">
                    <Link
                      to={require(`../assets/images/gallery/willies-gallery-big-06.jpg`)}
                      className="btn-show-gallery flex-c-m fa fa-search"
                      data-lightbox="gallery"
                    ></Link>
                  </div>
                </div>

                <div className="item-gallery isotope-item bo-rad-10 hov-img-zoom events guests">
                  <img
                    src={require(`../assets/images/gallery/willies-gallery-thumb-07.jpg`)}
                    alt="IMG-GALLERY"
                  />

                  <div className="overlay-item-gallery trans-0-4 flex-c-m">
                    <Link
                      to={require(`../assets/images/gallery/willies-gallery-big-07.jpg`)}
                      className="btn-show-gallery flex-c-m fa fa-search"
                      data-lightbox="gallery"
                    ></Link>
                  </div>
                </div>

                <div className="item-gallery isotope-item bo-rad-10 hov-img-zoom events events">
                  <img
                    src={require(`../assets/images/gallery/willies-gallery-thumb-08.jpg`)}
                    alt="IMG-GALLERY"
                  />

                  <div className="overlay-item-gallery trans-0-4 flex-c-m">
                    <Link
                      to={require(`../assets/images/gallery/willies-gallery-big-08.jpg`)}
                      className="btn-show-gallery flex-c-m fa fa-search"
                      data-lightbox="gallery"
                    ></Link>
                  </div>
                </div>

                <div className="item-gallery isotope-item bo-rad-10 hov-img-zoom events guests">
                  <img
                    src={require(`../assets/images/gallery/willies-gallery-thumb-09.jpg`)}
                    alt="IMG-GALLERY"
                  />

                  <div className="overlay-item-gallery trans-0-4 flex-c-m">
                    <Link
                      to={require(`../assets/images/gallery/willies-gallery-big-09.jpg`)}
                      className="btn-show-gallery flex-c-m fa fa-search"
                      data-lightbox="gallery"
                    ></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </BrowserRouter>
    </>
  );
}

export default Gallery;
