import React from "react";

const AppButton = ({ className, type, name }) => {
  return (
    <button
      className={`btn text-white px-5 fw-bold ${className}`}
      style={{
        backgroundColor: "#1A73E8",
        borderRadius: "16px",
        boxShadow: "10px 12px 12px #00000057",
      }}
    >
      {name}
    </button>
  );
};

export default AppButton;
