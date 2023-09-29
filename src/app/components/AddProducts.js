import React from "react";

const AddProducts = () => {
  return (
    <div className="add-product">
      <h3>Add New Product</h3>
      <input
        type="text"
        placeholder="Add New product"
        className="add-product-input"
      />
      <button className="add-product-btn">Add Product</button>
    </div>
  );
};

export default AddProducts;
