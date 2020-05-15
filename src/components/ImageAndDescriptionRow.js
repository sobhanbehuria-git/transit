import React from "react";
import Image from "./Image";
import Description from "./Description";

const ImageAndDescriptionRow = (props) => {
  if (props.imageSide && props.imageSide === "Left") {
    return (
      <div className="row">
        <div className="col-md-6 col-lg-6">
          <Image imageName={props.imageName} />
        </div>
        <div className="col-md-6 col-lg-6 grncolorbox pad-7 margin-t-3">
          <Description />
        </div>
      </div>
    );
  } else {
    return (
      <div className="row">
        <div className="col-md-6 col-lg-6 grncolorbox pad-7 margin-t-3">
          <Description />
        </div>
        <div className="col-md-6 col-lg-6">
          <Image imageName={props.ImageName} />
        </div>
      </div>
    );
  }
};

export default ImageAndDescriptionRow;
