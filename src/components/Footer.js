import React from "react";

const Footer = (props) => {
  if (!props.data) {
    return null;
  }

  return (
    <footer className="footer-section mt-5" style={{ background: "#404c5a" }}>
      <div className="footer-top" style={{ background: "404c5a" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div className="row footer-top-wrap">
                {props.data.topFooter.footerLinks.map((footerLink, i) => (
                  <div key={i} className="col-md-3 col-sm-6">
                    <div className="footer-nav-wrap text-white">
                      <h4 className="text-white">{footerLink.heading}</h4>
                      <ul className="nav flex-column">
                        {footerLink.links.map((link, j) => (
                          <li key={j} className="nav-item">
                            <a href={link.link} className="nav-link">
                              {link.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-3" style={{ background: "#384653" }}>
              <div className="row footer-top-wrap">
                <div className="col-12">
                  <div className="form-bxU">
                    <p className="lead white">Signup For Newsletter</p>
                    <p className="cont2_new"></p>

                    <form
                      id="homepage_slider_form"
                      type="POST"
                      className=""
                      method="POST"
                      encType=""
                      name="subscribe_now"
                      noValidate="novalidate"
                    >
                      <input
                        type="text"
                        placeholder="Enter Email ID"
                        className="form-control form-bxU1"
                        name="name"
                      />
                      <span id="Errname" style={{ color: "#fff" }}></span>

                      <button
                        type="submit"
                        className="btn"
                        value="Subscribe Now"
                      >
                        Subscribe Now
                      </button>
                      <div id="msg" className="demo_class"></div>
                    </form>

                    <div className="footer-social-m float-left pt-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="footer-middlw gray-light-bg py-4"
        style={{ background: "#2a3740" }}
      >
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-md-6 col-lg-6">
              <img
                src={require("./../images/footer-logo.jpg")}
                className="img-fluid"
                alt="Transition Discoveries"
              />
            </div>

            <div className="col-md-4 col-lg-4">
              <div className="address">
                <p className="lead white mb-0">Transition Discoveries</p>
                <p className="cont white">
                  {" "}
                  201 1 Crystal Drive,
                  <br />
                  Suite - 400 Arlington,
                  <br />
                  VA - 22202
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="footer-bottom gray-light-bg py-2"
        style={{ background: "#404c5a" }}
      >
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-md-12 col-lg-12">
              <p className="copyright-text pb-0 mb-0 text-center white">
                © 2020 Copyrights - TransitionDiscoveries | Designed by -
                <a
                  href="https://www.janbaskdigitaldesign.com/"
                  className="white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  JanBask Digital Design
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
