import React from "react";
import Banner from "./../components/Banner";
import IconTile from "./../components/IconTile";
import ImageAndDescriptionRow from "./../components/ImageAndDescriptionRow";
import ContactUsForm from "./../components/ContactUsForm";

const link = { url: "", text: "Explore More" };

const ContactUs = () => {
  return (
    <div className="main">
      <section className="hero-equal-height pt-165 pb-100 gradient-overly-right-light contactbanner">
        <Banner heading="Contact Us" text="We’re here to help" />
      </section>

      <section className=" ptb-60">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-lg-7" align="">
              <img
                src={require("./../images/contact-2.jpg")}
                className="img-responsive"
              />
              <div className="col-md-12 col-lg-12" align="">
                <div className="row plan-bx2">
                  <div className="col-md-6 col-lg-6 p-10 ico1">
                    <IconTile
                      iconTileImage="contact-ico-1.png"
                      heading="Reach Us"
                      content="<strong>Phone:</strong> +1 8596859745 
                      <br />              
                      <strong>Write Us:</strong>
                      info@transitiondiscoveries.org"
                      className=""
                    ></IconTile>
                  </div>
                  <div className="col-md-6 col-lg-6 p-10 boxborder mt-mob10">
                    <IconTile
                      iconTileImage="contact-ico-2.png"
                      heading="Locate Us"
                      content="<strong>Transition Discoveries</strong>
                      <br />
                      2011 Crystal Drive, Suite - 400 Arlington, VA - 22202"
                      className=""
                    ></IconTile>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-lg-5 plan-bx1">
              <ContactUsForm
                heading="Get in Touch"
                title="Fill out the form below to contact our team."
              ></ContactUsForm>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14008.72826923473!2d77.3870848!3d28.6243049!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe12518ec3828b1fb!2sJANBASK%20LLC!5e0!3m2!1sen!2sin!4v1588082534508!5m2!1sen!2sin"
            width="100%"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </section>

      <section className="ptb-60">
        <div className="container">
          <ImageAndDescriptionRow
            imageName="contact-4.png"
            imageSide="Left"
          ></ImageAndDescriptionRow>
        </div>
      </section>
      <section className=" ptb-60">
        <div className="container">
          <div className="row greybg">
            <div className="col-md-4 col-lg-4 pad-0 mbtm-0">
              <img
                src={require("./../images/contact-5.png")}
                className="img-responsive"
              ></img>
            </div>
            <div className="col-md-4 col-lg-4 ">
              <IconTile
                iconTileImage="contact-ico-3.png"
                heading="Get Involved"
                content="This collection is written to engage youth, families."
                link={link}
                className="iconTile"
              ></IconTile>
            </div>
            <div className="col-md-4 col-lg-4 ">
              <IconTile
                iconTileImage="contact-ico-4.png"
                heading="Start Survey"
                content="The purpose of this survey is to help us learn from you!"
                link={link}
                className="iconTile"
              ></IconTile>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
