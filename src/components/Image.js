import React from "react";

const Image = (props) => {
  return (
    <img
      src={require("./../images/" + props.imageName)}
      className=" pstnabslt"
    ></img>
  );
};

export default Image;
