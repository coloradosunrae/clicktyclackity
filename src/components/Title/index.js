import React from "react";
import "./style.css";

function Title(props) {
  return <div className="background jumbotron"><h1 className="title">{props.children}</h1>
  <h2 classname="h2">Click on any image to earn a point, but don't click on the same picture more than once. Click all 12 pics, and you win.</h2></div>
}

export default Title;
