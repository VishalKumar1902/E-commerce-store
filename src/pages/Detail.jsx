import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../Products";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cart";

const Detail = () => {
  const { slug } = useParams();
  const [detail, setDetail] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const findDetail = products.filter((product) => product.slug === slug);
    if (findDetail.length > 0) {
      setDetail(findDetail[0]);
    } else {
      window.location.href = "/";
    }
  }, [slug]);

  const handleMinusQuantity = () => {
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
  };
  const handlePlusQuantity = () => {
    setQuantity(quantity + 1);
  };

  //  function to handle quantity change
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: detail.id,
        quantity: quantity,
      })
    );
  };

  return (
    <div className="p-4">
      <h2 className=" text-2xl md:text-3xl text-center font-semibold ">
        PRODUCT DETAILS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-14">
        <div>
          <img src={detail.image} alt="" className="w-full" />
        </div>
        <div className=" flex flex-col gap-5">
          <h1 className="text-2xl md:text-4xl uppercase font-bold">
            {detail.name}
          </h1>
          <p className="font-bold  text-xl md:text-3xl">${detail.price}</p>
          <div className="flex gap-5 flex-wrap items-center">
            <div className="flex gap-2 justify-center items-center">
              <button
                className="bg-gray-100 h-full w-10 font-bold text-xl roundex-xl flex justify-center items-center"
                onClick={handleMinusQuantity}
              >
                -
              </button>
              <span
                className="bg-gray-200 h-10 w-10 font-bold text-xl
            roundex-xl flex justify-center items-center"
              >
                {quantity}
              </span>
              <button
                className="bg-gray-100 h-full w-10 font-bold text-xl roundex-xl flex justify-center items-center"
                onClick={handlePlusQuantity}
              >
                +
              </button>
            </div>
            <button
              className="bg-black text-white px-7 py-3 rounded-xl shadow-2xl font-semibold"
              onClick={handleAddToCart}
            >
              Add To Cart
            </button>
          </div>
          <p className="text-sm md:text-base">{detail.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
