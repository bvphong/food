import React from "react";
import PropTypes from "prop-types";
import Card from "../card/Card";

function Todolist(props) {
  const cardFood = JSON.parse(localStorage.getItem("data")) || [];
  console.log(cardFood);
  return (
    <div>
      {cardFood.map((el, i) => {
        //el :taji vij tris dc map
        return (
          <Card key={i} namefood={el.namefood} price={el.price} img={el.img} />
        );
      })}
    </div>
  );
}

export default Todolist;
