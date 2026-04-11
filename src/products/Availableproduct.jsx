import React from "react";
import Card from "../components/card";
const Availableproduct = ({ products }) => {

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full md:w-9/12 mx-auto">
      {
        products.map((product) => {
          console.log(product);
          return <Card product={product} />;
        })
      }

    </div>
  );
};
export default Availableproduct;