import React from "react";
const Availableproduct = ({ products }) => {

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 space-y-6 w-full md:w-9/12 mx-auto">
      {
        products.map((product) => {
          console.log(product);
          return <div className="card w-full bg-base-100 shadow-sm">
            <div className="card-body">
              <span className="badge badge-xs badge-warning">{product.tag}</span>
              <h2 className="text-3xl font-bold">{product.name}</h2>
              <p className="text-lg font-semibold text-gray-500">${product.description}</p>
              <span className="text-xl">${product.price}/mo</span>
              <ul className="mt-6 flex flex-col gap-2 text-xs">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  <span>High-resolution image generation</span>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  <span>Customizable style templates</span>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  <span>Batch processing capabilities</span>
                </li>
              </ul>
              <div className="mt-6">
                <button className="btn btn-block bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white">Buy Now</button>
              </div>
            </div>
          </div>
        })
      }

    </div>
  );
};
export default Availableproduct;