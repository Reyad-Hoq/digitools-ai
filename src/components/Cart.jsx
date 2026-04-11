import React from "react";
const Cart = ({ selectedCart, setSelectedCart }) => {
  console.log(selectedCart, "selectedCart");
  return (
    <div className="shadow-lg w-9/12 mx-auto p-10 rounded-3xl">
      {
        selectedCart.map((product) => {
          return (<div className="list shadow bg-base-200 rounded-box mx-auto p-4 mb-4">
            <li className="list-row">
              <div className="bg-base-100 w-10 h-10 flex items-center justify-center rounded-full"><img className=" rounded-full" src={product.icon} /></div>
              <div className="list-col-grow space-y-2">
                <div>{product.name}</div>
                <div className="text-xs font-semibold opacity-60">${product.price.toFixed(2)}</div>
              </div>
              <button className="btn btn-ghost btn-error">
                Remove
              </button>
            </li>
          </div>

          );
        })
      }
      <button className="btn btn-block bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white">Checkout</button>
    </div>
  )
}
export default Cart;