import React from "react";
import PropTypes from "prop-types";
import "./Card.scss";

function Card(props) {
  return (
    <div className="Card_food">
      <img src={props.img} alt="" />
      <p>NameFood:{props.namefood}</p>
      <p>Price:{props.price}</p>
    </div>
  );
}

export default Card;
