import React from "react";
import { Link } from "react-router-dom";
import iconCart from "../assets/iconCart.png";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleStatusTab } from "../store/cart";

const Header = () => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    let total = 0;
    carts.forEach((item) => (total += item.quantity));
    setTotalQuantity(total);
  }, [carts]);

  // function to open and close the cartTab
  const handleOpenTabCart = () => {
    dispatch(toggleStatusTab());
  };
  return (
    <header className="flex justify-between items-center mb-5">
      <Link to="/" className="text-xl font-semibold">
        Home
      </Link>
      <div
        className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center relative"
        onClick={handleOpenTabCart}
      >
        <img src={iconCart} alt="" className="w-6" />
        <span className="bg-red-500  w-5 h-5 rounded-full text-sm flex items-center justify-center absolute top-2/3 right-1/2 text-white">
          {totalQuantity}
        </span>
      </div>
    </header>
  );
};

export default Header;
