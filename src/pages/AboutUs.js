import React from "react";
import { Tab, Nav, Row, Col, Image } from "react-bootstrap";
import sectionImage from "../images/shutterstock_388456903.jpg";

const AboutUs = () => {
  return (
    <div className="Main">
      <section className="hero-equal-height pt-165 pb-150 gradient-overly-right-light aboutbanner">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12">
              <div className="hero-slider-content text-left">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>

                    <li className="breadcrumb-item active" aria-current="page">
                      About Us
                    </li>
                  </ol>
                </nav>

                <h1 className="slider-lead white">
                  About Transition Discoveries
                </h1>
                <p className="lead white">
                  We follow our mission by taking pride in our valuable
                  employees and bringing innovative solutions to our clients.
                  Maximizing innovative solutions is our mission in providing
                  products of value to our clients and ensuring success by
                  leveraging learned lessons and mature processes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ptb-60">
        <div className="container">
          <Row>
            <Col>
              <div>
                <h4>
                  <strong className="green">
                    The Pennsylvania Community on Transtion
                  </strong>
                </h4>
                <p>
                  This website is sponsored by the Pennsylvania Department of
                  Eductaion, Bureau of Special Eductaion on behalf of the
                  Pennsylvania Community on Transition.
                  <br></br>
                  <br></br>
                  The Pennsylvania Community on Transition is a group of various
                  stakeholders from across Pennsylvania who work collaboratively
                  to ensure appropriate transition outcomes for Pennsylvania
                  youth and young adults.
                  <br></br>
                  <br></br>
                  The Pennsylvania Community on Transition is a state leadership
                  team consisting of representatives from: the State Departments
                  of Education, Health, Labor and Industry, and Human Services;
                  Various Serving Agencies; Young Adults; Parent Organizations;
                  Advocates; Higher Education and Employers.{" "}
                </p>
                <a href="" className="ctawithoutbg">
                  READ MORE
                </a>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <Image src={sectionImage} className="img-responsive" />
            </Col>
          </Row>
        </div>
      </section>
      <section className="ptb-60">
        <div className="container">
          <div className="row videobox2">
            <div className="col-md-8 col-xs=12">
              <h4 className="white fw500">
                We are asking about getting ready for work, going to college,
                and being a part of the community. This will help you work as a
                transition team to improve transition experiences of youth and
                families.
              </h4>
              <button className="green-btn">Get in Touch</button>
            </div>
            <div className="col-md-4 col-xs=12" align="center">
              <input
                type="image"
                src={require("./../images/playbutton.png")}
                alt="play"
                className="playicon"
              ></input>

              <span className="playtext white">Watch Tour</span>
            </div>
          </div>
        </div>
      </section>
      <section className="ptb-60">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-xs=12">
              <Image
                src={require("./../images/university-students-cheering-PTELVAE.jpg")}
                fluid
                style={{ height: 450 }}
              />{" "}
            </div>
            <div className="col-md-8">
              <Tab.Container defaultActiveKey="first">
                <Row>
                  <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item className="my-2">
                        <Nav.Link eventKey="first" className="green-btn">
                          Our Mission
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="my-2">
                        <Nav.Link eventKey="second" className="green-btn">
                          Our Impact
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="my-2">
                        <Nav.Link eventKey="third" className="green-btn">
                          Our History
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="my-2">
                        <Nav.Link eventKey="fourth" className="green-btn">
                          Ethical Policies
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={9}>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <div>
                          <p>
                            This website is sponsored by the Pennsylvania
                            Department of Eductaion, Bureau of Special Eductaion
                            on behalf of the Pennsylvania Community on
                            Transition.
                          </p>
                          <p>
                            The Pennsylvania Community on Transition is a group
                            of various stakeholders from across Pennsylvania who
                            work collaboratively to ensure appropriate
                            transition outcomes for Pennsylvania youth and young
                            adults.
                          </p>
                          <p>
                            The Pennsylvania Community on Transition is a state
                            leadership team consisting of representatives from:
                            the State Departments of Education, Health, Labor
                            and Industry, and Human Services; Various Serving
                            Agencies; Young Adults; Parent Organizations;
                            Advocates; Higher Education and Employers.{" "}
                          </p>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>Some content</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Some content</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="fourth">
                        <p>Some content</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </div>
          </div>
        </div>
      </section>
      <section className="ptb-60">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="my-4 py-4" style={{ backgroundColor: "#e6e6e6" }}>
                <img src="" alt="recycle icon"></img>
                <p>
                  Transition can be thought of as a bridge between school
                  programs and the opportunities of adult life, Including higher
                  education or training, employment, independent living and
                  community participation.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <Image
                src={require("./../images/shutterstock_1096210091.jpg")}
                fluid
                style={{ height: "auto" }}
              />{" "}
            </div>
          </div>
        </div>
      </section>
      <section className="ptb-60">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <img
                src={require("./../images/two-college-students-studying-outdoors-URKGSE8.jpg")}
                className="img-fluid"
              ></img>
              <div className="text-center">
                <button className="green-btn">Youth Involvement</button>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <img
                src={require("./../images/family-spending-time-together-at-home-JGP6CJR.jpg")}
                className="img-fluid"
              ></img>
              <div className="text-center">
                <button className="green-btn">Parent Involvement</button>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <img
                src={require("./../images/shutterstock_1149343106.jpg")}
                className="img-fluid"
              ></img>
              <div className="text-center">
                <button className="green-btn">Stakeholder Involvement</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ptb-60">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <img
                src={require("./../images/group-of-multiethnic-students-on-graduation-day-DAC4PKQ.jpg")}
                className="img-fluid"
              ></img>
              <div className="overlay text-center">
                <h4 className="white">TQEP Scholarships</h4>
                <button className="green-btn">EXPLORE MORE</button>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <img
                src={require("./../images/students-in-the-atrium-of-modern-university-buildi-PEUVL2T.jpg")}
                className="img-fluid"
              ></img>
              <div className="overlay text-center">
                <h4 className="white">Want to know more about TD/TQEP?</h4>
                <button className="green-btn">See FAQs</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
