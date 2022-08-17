import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Form.scss";

function FormCreate(props) {
  const btn_create = () => {
    const a = JSON.parse(localStorage.getItem("data")) || [];
    a.push(food);
    localStorage.setItem("data", JSON.stringify(a));
    props.handle();
  };
  const [food, setFood] = useState({
    namefood: "",
    price: "",
    img: "",
  });
  const handleFood = (e) => {
    setFood({ ...food, [e.target.name]: e.target.value });
  };
  return (
    <div className="form_create">
      <div className="input_create">
        <label htmlFor="">The name of food:</label>
        <input
          type="text"
          name="namefood"
          value={food.namefood}
          onChange={handleFood}
        />
      </div>
      <div className="input_create">
        <label htmlFor="">Price:</label>
        <input
          type="text"
          name="price"
          value={food.price}
          onChange={handleFood}
        />
      </div>
      <div className="input_create">
        <label htmlFor="">Hình ảnh:</label>
        <input type="text" name="img" value={food.img} onChange={handleFood} />
      </div>
      <div>
        <button onClick={btn_create}>Add Of Food</button>
      </div>
    </div>
  );
}

export default FormCreate;
