import React from "react";
const Product = () => {
  return (
    <div className="hero bg-base-100 h-full w-full md:w-9/12 mx-auto mt-10">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold">Premium Digital Tools</h1>
          <p className="py-6">
            Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
          </p>
          <div class="flex justify-center mt-10">
            <div class="bg-gray-100 p-1 rounded-full flex gap-2">


              <button class="px-6 py-2 rounded-full text-white font-semibold 
                   bg-linear-to-r from-[#4F39F6] to-[#9514FA] shadow-md">
                Products
              </button>

              <button class="px-6 py-2 rounded-full text-gray-700 font-medium">
                Cart (2)
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Product;