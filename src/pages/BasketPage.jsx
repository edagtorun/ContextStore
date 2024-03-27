import { useContext } from "react";
import { BasketContext } from "../context/basketContext";
import { Link } from "react-router-dom";
import BasketItem from "../components/BasketItem";

const BasketPage = () => {
  const { basket, addToBasket } = useContext(BasketContext);

  //toplan urun sayisi hesaplama
  const totalAmount = basket.reduce((total, i) => total + i.amount, 0);
  const totalCost = basket
    .reduce((total, i) => total + i.amount * i.price, 0)
    .toFixed(2);

  return (
    <div className="mt-5 pt-5 p-2">
      <h1>BASKET</h1>
      <div className="row g-3">
        <div className="col-lg-8">
          <div>
            {basket.length === 0 ? (
              <div className="text-center my-5">
                <p style={{ color: "white" }}>
                  Your shopping basket is empty, go ahead and add some products
                  to it!
                </p>
                <Link className="btn btn-primary" to="/">
                  {" "}
                  Go Home
                </Link>
              </div>
            ) : (
              basket.map((product) => (
                <BasketItem key={product.id} product={product} />
              ))
            )}
          </div>
        </div>

        <div className=" d-flex flex-column gap-4 col-lg-4 bg-dark p-5">
          <h3 style={{ color: "white" }}>
            Total Amount : <span className="text-warning">{totalAmount}</span>
          </h3>
          <h3 style={{ color: "white" }}>
            Total Cost: <span className="text-warning">${totalCost}</span>{" "}
          </h3>

          <form className="d-flex mt-4">
            <input
              className="form-control"
              placeholder="promo code"
              type="text"
            />
            <button className="btn btn-warning">Apply</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
