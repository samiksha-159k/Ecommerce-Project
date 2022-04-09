import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import {useDispatch } from "react-redux";
import { useEffect } from "react";
import { addToCart } from "../states/cartSlice";
// import { actionCreators } from "../states";

const Product = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/${id}`
      ).catch((err) => {
        console.log("err".err);
      });
      setDetail(await response.json());
      console.log(detail);
    };
    fetchProducts();
  });
  const handleAddToCart = (detail) =>  {
  dispatch(addToCart(detail))
  }
   const {image,title,description,price}= detail;
  return (
    <>
      <div className="col-8 mx-auto my-5">
        <div className="card py-4 px-4 ">
          <img
            src={image}
            className="card-img-top"
            alt={title}
            style={{ width: "200px", height: "200px" }}
          />
          <div className="card-body text-center py-0">
            <h5 className="card-title text-center">{title}</h5>
            <p className="card-text text-center fw-light">
              {description}
            </p>
            <p className=" text-center card-text fw-bold">$ {price}</p>
            
            <button
              className="btn btn-primary text-center "
              onClick={() => handleAddToCart(detail)}
            >
              Add Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
