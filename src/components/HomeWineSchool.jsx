import React from "react";

import { Link, BrowserRouter } from "react-router-dom";

const HomeWineSchool = () => {
  return (
    <section>
      <div className="Container section-wine-school">
        <div className="title-event t-center m-b-52">
          <span className="tit2 p-l-15 p-r-15">Upcoming</span>

          <h3 className="tit6 t-center p-l-15 p-r-15 p-t-3">Events</h3>
        </div>

        <div className="wine-school-courses">
          <h3>Are you new to wine tasting, or just want to learn more?</h3>

          <p>
            Our passion is wine tasting and we want to introduce as many people
            as possible to the tasting pleasures that we enjoy so much. To do
            this, we have created
            <span> Willie's Wine School </span> to provide a comfortable, fun
            learning envrionment for wine "newbies" or for anyone who just wants
            to learn a bit more about wines.
          </p>
          <p>
            It is not only about tasting wine. Our courses also cover the rich
            history of the wine making process, the different varietals, the key
            wine-making regions, and even the interesting and sometimes very
            strange wine laws from around the world.
          </p>

          <BrowserRouter
            basename="/willies-reimagined-react"
            forceRefresh={true}
            onUpdate={() => window.scrollTo(0, 0)}
          >
            <Link to="/events" className="txt4">
              Learn More
              <i
                className="fa fa-long-arrow-right m-l-10"
                aria-hidden="true"
              ></i>
            </Link>
          </BrowserRouter>
        </div>
      </div>
    </section>
  );
};

export default HomeWineSchool;
