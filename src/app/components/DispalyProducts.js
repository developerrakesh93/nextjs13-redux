"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../redux/slice";

const DisplayProducts = () => {
  const productData = useSelector((data) => data.productData.products);
  console.log("Printing products", productData);
  const removeDispatch = useDispatch();
  return (
    <div className="display-product">
      <h3>Product List</h3>
      {productData.map((data) => (
        <div key={data.id}>
          <span>
            {data.name}{" "}
            <button onClick={() => removeDispatch(removeProduct(data.id))}>
              Remove
            </button>
          </span>
        </div>
      ))}
    </div>
  );
};

export default DisplayProducts;

