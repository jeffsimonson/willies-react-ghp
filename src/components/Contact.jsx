import React from "react";

import ContactMap from "./ContactMap";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

function Contact() {
  return (
    <>
      <section class="bg-title-page flex-c-m p-t-160 p-b-80 p-l-15 p-r-15 contact-us">
        <h2 class="tit6 t-center">Contact</h2>
      </section>

      <section class="section-contact bg1-pattern p-t-90 p-b-113">
        <ContactMap />

        <div class="container">
          <h3 class="tit7 t-center p-b-62 p-t-105">Send us a Message</h3>
          <ContactForm />
          <ContactInfo />
        </div>
      </section>
    </>
  );
}

export default Contact;
