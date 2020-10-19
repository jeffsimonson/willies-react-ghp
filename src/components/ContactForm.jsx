import React from "react";

const ContactForm = () => {
  return (
    <form
      action="../willies-reimagined-react/includes/contact-form.php"
      method="post"
      class="wrap-form-reservation size22 m-l-r-auto"
    >
      <div class="row">
        <div class="col-md-4">
          <span class="txt9">Name</span>

          <div class="wrap-inputname size12 bo2 bo-rad-10 m-t-3 m-b-23">
            <input
              class="bo-rad-10 sizefull txt10 p-l-20"
              type="text"
              name="name"
              placeholder="Name"
            />
          </div>
        </div>

        <div class="col-md-4">
          <span class="txt9">Email</span>

          <div class="wrap-inputemail size12 bo2 bo-rad-10 m-t-3 m-b-23">
            <input
              class="bo-rad-10 sizefull txt10 p-l-20"
              type="text"
              name="email"
              placeholder="Email"
            />
          </div>
        </div>

        <div class="col-md-4">
          <span class="txt9">Phone</span>

          <div class="wrap-inputphone size12 bo2 bo-rad-10 m-t-3 m-b-23">
            <input
              class="bo-rad-10 sizefull txt10 p-l-20"
              type="text"
              name="phone"
              placeholder="Phone"
            />
          </div>
        </div>

        <div class="col-12">
          <span class="txt9">Message</span>
          <textarea
            class="bo-rad-10 size35 bo2 txt10 p-l-20 p-t-15 m-b-10 m-t-3"
            name="message"
            placeholder="Message"
          ></textarea>
        </div>
      </div>

      <div class="wrap-btn-booking flex-c-m m-t-13">
        <button type="submit" class="btn3 flex-c-m size36 txt11 trans-0-4">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
