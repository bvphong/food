import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="foodRestaurant">
        <h1>Food Restaurant</h1>
      </div>

      <div className="icon_order">
        <i className="fa-solid fa-cart-plus"></i>
        <i className="fa-solid fa-ellipsis-vertical"></i>
      </div>
    </div>
  );
};

export default Header;
