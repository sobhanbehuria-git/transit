import React from "react";
import ReactHtmlParser from "react-html-parser";
import "./IconTile.css";

const IconTile = (props) => {
  let button;
  if (props.link) {
    button = <a href={props.link.url}>{props.link.text}</a>;
  }

  return (
    <div className={props.className}>
      <img
        src={require("./../images/" + props.iconTileImage)}
        style={{ maxHeight: 60 }}
      />
      <p className="conthd-icon">{props.heading}</p>
      <p>{ReactHtmlParser(props.content)}</p>
      {button}
    </div>
  );
};

export default IconTile;
