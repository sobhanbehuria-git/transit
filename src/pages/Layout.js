import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "./Home";
import AboutUs from "./AboutUs";
import TQEPTD from "./TQEPTD";
import Events from "./Events";
import Resources from "./Resources";
import ActivityLessons from "./ActivityLessons";
import Gallery from "./Gallery";
import ContactUs from "./ContactUs";

const Layout = (props) => {
  if (!props.data) {
    return null;
  }
  return (
    <div>
      <Header data={props.data.header} />
      {/* TO DO  */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/TQEPTD" component={TQEPTD} />
        <Route path="/events" component={Events} />
        <Route path="/resources" component={Resources} />
        <Route path="/activity-lessons" component={ActivityLessons} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/contactus" component={ContactUs} />
      </Switch>
      <Footer data={props.data.footer} />
    </div>
  );
};

export default Layout;
