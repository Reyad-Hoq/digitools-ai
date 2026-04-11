import React, { use, useState } from "react";
import Availableproduct from "./Availableproduct";
const Product = ({ productsPromise }) => {
  console.log(productsPromise);
  const products = use(productsPromise);
  console.log(products);
  const [selectedTab, setSelectedTab] = useState("products");
  return (
    <>
      <div className="hero bg-base-100 h-full w-full md:w-9/12 mx-auto mt-10">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold">Premium Digital Tools</h1>
            <p className="py-6">
              Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
            </p>
            <div class="flex justify-center mt-10">
              <div class="bg-gray-100 p-1 rounded-full flex gap-2">
                <button
                  onClick={() => setSelectedTab("products")}
                  class={`btn btn-ghost rounded-full ${selectedTab === "products" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] shadow-md px-6 py-2 text-white font-semibold btn" : ""}  
                `}
                >
                  Products
                </button>
                <button onClick={() => setSelectedTab("cart")}
                  class={`btn btn-ghost rounded-full ${selectedTab === "cart" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] shadow-md px-6 py-2 text-white font-semibold btn" : ""}  
                `}>
                  Cart <span></span>
                </button>

              </div>
            </div>

          </div>
        </div>
      </div>
      {
        selectedTab === "cart" ? <div className="flex justify-center items-center min-h-screen">
          you have no items in your cart
        </div> : <Availableproduct products={products} />
      }

    </>
  );
}
export default Product;