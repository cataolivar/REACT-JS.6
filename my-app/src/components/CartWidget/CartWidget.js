import React from "react";
import carrito from "../../assets/img/comprar.png";
import "./CartWidget.css"

const CartWidget = () => {
  return (
    <button>
      <img className="imgCarrito" src={carrito} alt="carrito"/>
    </button>
  );
};

export default CartWidget;
