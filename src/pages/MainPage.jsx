//Context yapilarina abone olmamizi saglayan hook
import { useContext } from "react";
//Abone olmak istedigimiz Contect yapisi
import { ProductContext } from "../context/productContext";
import Loader from "../components/Loader";
import Card from "../components/Card";

const MainPage = () => {
  //urunler contextine abone ol
  const { products, selectedCategory } = useContext(ProductContext);

  return (
    <div className="container my-5 mt-5 pt-5 p-md-5">
      <h1 style={{ color: "white" }}>{selectedCategory}</h1>
      <div className=" d-flex flex-wrap justify-content-center justify-content-md-between gap-3 gap-md-5 ">
        {!products ? (
          <Loader />
        ) : (
          products.map((item) => <Card key={item.id} product={item} />)
        )}
      </div>
    </div>
  );
};

export default MainPage;
