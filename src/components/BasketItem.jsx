import React from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { useContext } from "react";
import { BasketContext } from "../context/basketContext";

const BasketItem = ({ product }) => {
  const { addToBasket, removeFromBasket, decreaseAmount } =
    useContext(BasketContext);
  return (
    <div className="d-flex bg-black rounded p-3 p-md-4 gap-3 gap-md-4 align-items-center">
      <div className="border bg-white rounded-3 ">
        <img
          src={product.image}
          alt={product.title}
          height={80}
          width={80}
          className="object-fit-contain"
        />
      </div>

      <div>
        <p className="text-truncate fw-bold" style={{ color: "white" }}>
          {product.title.length > 20
            ? product.title.slice(0, 20) + "..."
            : product.title}
        </p>
        <p style={{ color: "white" }}>Category: {product.category}</p>
        <p style={{ color: "white" }}>Rating: {product.rating.rate}</p>
      </div>
      <div className="flex-grow-1 d-flex flex-column-reverse flex-md-row gap-4 align-items-center">
        <div className="bg-dark rounded-5 d-flex gap-4 align-items-center overflow-hidden btn-wrapper">
          <button
            style={{ color: "white" }}
            onClick={() => decreaseAmount(product.id)}
          >
            -
          </button>
          <span style={{ color: "white" }}>{product.amount}</span>
          <button
            style={{ color: "white" }}
            onClick={() => addToBasket(product)}
          >
            +
          </button>
        </div>

        <h4 className="flex-grow-1" style={{ color: "white" }}>
          {product.price * product.amount}$
        </h4>

        <button
          onClick={() => removeFromBasket(product.id)}
          className="rounded-2 d-none d-md-block"
        >
          <FaRegTrashCan />
        </button>
      </div>
    </div>
  );
};

export default BasketItem;
