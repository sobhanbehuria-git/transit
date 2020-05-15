import React from "react";

const ContactUsForm = (props) => {
  return (
    <>
      <p className="lead-txt dark-green mb-3">{props.heading}</p>

      <p className="lead  mb-3">{props.title}</p>

      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Your Name"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput2"
            placeholder="Phone No."
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Email ID"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Subject"
          />
        </div>

        <div className="form-group">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            placeholder="Your Message"
            rows="3"
          ></textarea>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary mb-2 btn-contact-us">
            SUBMIT
          </button>
        </div>
      </form>
    </>
  );
};
export default ContactUsForm;
