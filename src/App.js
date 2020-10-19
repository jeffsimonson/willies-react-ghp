import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import About from "./components/About";
import BackToTop from "./components/BackToTop";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Events from "./components/Events";
import Food from "./components/Food";
import FooterBar from "./components/FooterBar";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Wines from "./components/Wines";

import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import "./assets/fonts/themify/themify-icons.css";
import "./assets/vendor/animate/animate.css";
import "./assets/vendor/css-hamburgers/hamburgers.min.css";
import "./assets/vendor/animsition/css/animsition.min.css";
import "./assets/vendor/select2/select2.min.css";
import "./assets/vendor/slick/slick.css";
import "./assets/vendor/lightbox2/css/lightbox.min.css";

import "./assets/css/main.css";
import "./assets/css/util.css";

function App() {
  return (
    <main>
      <Navbar />

      <BrowserRouter basename="/willies-reimagined-react">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/events" component={Events} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/food" component={Food} />
          <Route path="/wines" component={Wines} />
          <Route component={Error} />
        </Switch>
        <FooterBar />
        <BackToTop />
      </BrowserRouter>
    </main>
  );
}

export default App;
