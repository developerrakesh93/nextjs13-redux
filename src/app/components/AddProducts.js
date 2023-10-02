"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/slice";
import Link from "next/link";

const AddProducts = () => {
  const dispatcher = useDispatch();
  const [productName, setProductName] = useState("");
  const userDispatch = () => {
    dispatcher(addProduct(productName));
  };

  return (
    <div className="add-product">
      <h3>Add New Product</h3>
      <input
        type="text"
        placeholder="Add New product"
        className="add-product-input"
        onChange={(e) => setProductName(e.target.value)}
      />
      <button onClick={userDispatch} className="add-product-btn">
        Add Product
      </button>
      <Link href="/removeProduct">Remove Product </Link>
      <br />
      <br />
      <Link href="/todolist">Go to to do list </Link>
      <br />
      <br />
      <Link href="/apiproducts">Go to API user</Link>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default AddProducts;
