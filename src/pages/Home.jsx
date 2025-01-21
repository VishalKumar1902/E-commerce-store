import React from "react";
// note we are importing the products as array so we can use it directly with map function
import { products } from "../Products";
import ProductCard from "../components/ProductCard";
const Home = () => {
  return (
    <div>
      <h1 className="text-3xl my-7">Shop, Discover, Enjoy!</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
        {products.map((product, key) => (
          <ProductCard key={key} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
