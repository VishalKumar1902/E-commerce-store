import React from "react";
import { Link } from "react-router-dom";
import iconCart from "../assets/iconCart.png";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store/cart";

const ProductCard = (props) => {
  const carts = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  console.log(carts);

  const { id, name, price, image, slug } = props.data;

  // handle add to cart function

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: id,
        quantity: 1,
      })
    );
  };
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm">
      <Link to={slug}>
        <img
          src={image}
          alt=""
          className="w-full h-80 object-cover object-top drop-shadow-[0_80px_40px_#0007]"
        />
        <h3 className="text-2xl py-3 text-center font-medium">{name}</h3>
      </Link>
      <div className="flex justify-between items-center ">
        <p>
          $<span className="text-2xl font-medium">{price}</span>
        </p>
        <button
          className="bg-gray-300 p-2 rounded-md text-sm hover:bg-gray-400 flex gap-2"
          onClick={handleAddToCart}
        >
          <img src={iconCart} alt="" className="w-5" />
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
