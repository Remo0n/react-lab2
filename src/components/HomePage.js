import React from "react";
import Card from "./Card";
import useProductService from "../hooks/useProductService";
import Loading from "./Loading";
function HomePage() {
  const { loading, products, error } = useProductService();
  console.log(products);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container">
      <h1>Product List</h1>

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
    </div>
  );
}

export default HomePage;
