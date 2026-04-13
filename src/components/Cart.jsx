import React from "react";
const Cart = ({ selectedCart, setSelectedCart, price, setPrice }) => {
  console.log(price, 'price')
  console.log(selectedCart, "selectedCart");
  const handleRemoveProduct = (product) => {
    console.log(product, "Product");
    const filterdProduct = selectedCart.filter(cart => cart.name !== product.name);
    console.log(filterdProduct)
    setSelectedCart(filterdProduct);
    setPrice(price - product.price)
  }
  return (
    <div>
      <div className="shadow-lg w-9/12 mx-auto p-10 rounded-3xl">
        {selectedCart.length === 0 ? <div className="text-center text-gray-500 text-2xl">Your cart is empty</div> : <div>
          <h1 className="text-xl font-bold py-4">Your Cart</h1>
          {
            selectedCart.map((product) => {
              return (<div className=" list-none md:list shadow bg-base-200 rounded-box mx-auto p-4 m-5" key={product.id}>
                <li className="list-row">
                  <div className="bg-base-100 w-10 h-10 flex items-center justify-center rounded-full"><img className=" rounded-full" src={product.icon} /></div>
                  <div className="list-col-grow space-y-2">
                    <div>{product.name}</div>
                    <div className="text-xs font-semibold opacity-60">${product.price.toFixed(2)}</div>
                  </div>
                  <button className="btn btn-ghost btn-error" onClick={() => handleRemoveProduct(product)}>
                    Remove
                  </button>
                </li>
              </div>
              );
            })}
        </div>
        }
        <div className={`flex justify-between px-3 mb-1 ${selectedCart.length === 0 ? 'hidden' : ''}`}> <h1 className="text-gray-500 text-sm">Total:</h1>
          <h1 className="font-semibold">${price}</h1>
        </div>
        <button className={`btn btn-block bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white ${selectedCart.length === 0 ? 'hidden' : ''}`} > Proceed To Checkout </button>
      </div>
    </div >

  )
}
export default Cart;