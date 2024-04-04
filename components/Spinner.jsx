"use client";
import React from "react";
import { ClipLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="flex justify-center my-8 w-full">
      <ClipLoader color="#36d7b7" size={50} />
    </div>
  );
};

export default Spinner;
