import React, { useState } from "react";
import { toast } from "react-toastify";
const Card = ({ product, selectedCart, setSelectedCart, price, setPrice }) => {
  const [isBuying, setIsBuying] = useState(false);
  const handleCartSelected = () => {
    setIsBuying(!isBuying);
    toast.success(isBuying ? "Removed from cart" : "Added to cart")
    setSelectedCart([...selectedCart, product]);
    setPrice(price + product.price);
  }
  return (
    <div className="card bg-base-100 shadow-lg">
      <div className="card-body space-y-2">
        <div className="flex justify-end">
          <span className={`badge badge-lg badge-soft text-sm py-1 px-2 ${product.tag === "popular" ? "badge-primary" : product.tag === "new" ? "badge-success" : "badge-warning "}`}>{product.tag}</span>
        </div>
        <div>
          <img src={product.icon} alt={product.name} />
        </div>
        <h2 className="text-3xl font-bold">{product.name}</h2>
        <p className="text-lg font-semibold text-gray-500">{product.description}</p>
        <span className="text-xl">${product.price}/{product.period === "monthly" ? "mo" : product.period === "yearly" ? "yr" : "one-time"}</span>
        <ul className="mt-6 flex flex-col gap-2">
          {product.features.map(feature => <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            <span>{feature}</span>
          </li>)}
        </ul>
        <div className="mt-6">
          <button className="btn btn-block bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white"
            disabled={isBuying} onClick={() => handleCartSelected()}
          >
            {isBuying ? "Remove from Cart" : "Buy Now"}
          </button>
        </div>
      </div>
    </div >
  )
}
export default Card;