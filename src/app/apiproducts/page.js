"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApiData } from "../redux/slice";

const page = () => {
  const dispatch = useDispatch();
  const apiData = useSelector((data) => data.productData.userAPIData);
  console.log("apiData", apiData);
  useEffect(() => {
    dispatch(fetchApiData());
  }, []);
  return (
    <div>
      User List from API
      <br />
      {apiData.length &&
        apiData.map((i) => (
          <>
            <h4>{i.name}</h4>
            <br />
          </>
        ))}
    </div>
  );
};

export default page;
