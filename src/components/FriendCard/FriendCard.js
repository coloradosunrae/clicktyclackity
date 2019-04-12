import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="img-thumbnail" onClick={props.imageClick}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default FriendCard;
