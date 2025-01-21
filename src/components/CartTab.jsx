import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { toggleStatusTab } from "../store/cart";
import { products } from "../Products";

const CartTab = () => {
  const carts = useSelector((store) => store.cart.items);
  // status tab ki value yaha se milegi
  const statusTab = useSelector((store) => store.cart.statusTab);

  const dispatch = useDispatch();
  const handleCloseTabCart = () => {
    dispatch(toggleStatusTab());
  };

  // calculate total price
  const totalPrice = carts.reduce((total, item) => {
    // find the product by productId in cart
    const product = products.find((product) => product.id === item.productId);
    // if product exists,calculate the total for that item

    if (product) {
      const itemTotal = product.price * item.quantity;
      return total + itemTotal;
    }
    return total;
  }, 0);
  return (
    <div
      className={`fixed top-0 right-0 bg-gray-700 shadow-2xl w-96 h-full grid grid-rows-[60px_1fr_60px] transform transition-transform duration-500 ${
        statusTab === false ? "translate-x-full" : ""
      } overflow-y-auto`}
    >
      <h2 className="p-5 text-white text-2xl">Shopping Cart</h2>
      <div className="p-5">
        {carts.map((item, key) => (
          <CartItem key={key} data={item} />
        ))}
      </div>
      <div className="p-5 text-white">
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
      </div>
      <div className="grid grid-cols-2 ">
        <button
          className="bg-black text-white p-3"
          onClick={handleCloseTabCart}
        >
          CLOSE
        </button>
        <button
          className="bg-amber-600 text-white p-3"
          onClick={() => alert(`Order placed successfully`)}
        >
          PLACE ORDER
        </button>
      </div>
    </div>
  );
};

export default CartTab;
