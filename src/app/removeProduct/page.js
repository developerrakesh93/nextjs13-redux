"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../redux/slice";

const page = () => {
  const userList = useSelector((data) => data.productData.products);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Remove user Page</h1>
      {userList.map((data) => (
        <div>
          <span>
            {data.name}{" "}
            <button onClick={() => dispatch(removeProduct(data.id))}>
              Remove
            </button>
          </span>
        </div>
      ))}
    </div>
  );
};

export default page;
