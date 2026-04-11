import React, { use, useState } from "react";
import Availableproduct from "./Availableproduct";
import Cart from "../components/Cart";
const Product = ({ productsPromise }) => {
  console.log(productsPromise);
  const products = use(productsPromise);
  console.log(products);
  const [selectedTab, setSelectedTab] = useState("products");
  const [selectedCart, setSelectedCart] = useState([]);
  const [price, setPrice] = useState(0);
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
                  Cart{selectedCart.length > 0 && <span >({selectedCart.length})</span>}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {
        selectedTab === "cart" ? <Cart
          selectedCart={selectedCart}
          setSelectedCart={setSelectedCart}
          price={price}
          setPrice={setPrice} /> :
          <Availableproduct products={products}
            selectedCart={selectedCart}
            setSelectedCart={setSelectedCart}
            price={price}
            setPrice={setPrice} />
      }

    </>
  );
}
export default Product;