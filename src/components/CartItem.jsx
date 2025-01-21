import React, { useState, useEffect } from "react";
import { products } from "../Products";
import { changeQuantity } from "../store/cart";
import { useDispatch } from "react-redux";

const CartItem = (props) => {
  const { productId, quantity } = props.data;
  const [detail, setDetail] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    const findDetail = products.filter(
      (product) => product.id === productId
    )[0];
    setDetail(findDetail);
  }, [productId]);

  console.log(detail);

  const handleMinusQuantity = () => {
    dispatch(
      changeQuantity({
        productId: productId,
        quantity: quantity - 1,
      })
    );
  };
  const handlePlusQuantity = () => {
    dispatch(
      changeQuantity({
        productId: productId,
        quantity: quantity + 1,
      })
    );
  };

  return (
    <div className="flex justify-between items-center bg-slate-600 text-white p-2 border-b-2 border-slate-700 gap-5 rounded-md">
      <img src={detail.image} alt="" className="w-12 bg-white rounded-md" />
      <h3>{detail.name}</h3>
      <p>${detail.price * quantity}</p>
      <div className=" w-20 flex justify-center">
        <button
          className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600"
          onClick={handleMinusQuantity}
        >
          -
        </button>
        <span className="mx-1">{quantity}</span>
        <button
          className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600"
          onClick={handlePlusQuantity}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
