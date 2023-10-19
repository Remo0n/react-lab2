import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    console.log(products);
  }, []);

  return (
    <div className="container">
      <h1>Product List</h1>

      {products.length > 0 ? (
        <div className="row">
          {products.map((product) => (
            <Card
              title={product.title}
              price={product.price}
              image={product.image}
              id={product.id}
            />
          ))}
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
}

export default HomePage;
