import React from "react";

const AppButton3 = ({ className, type }) => {
  return (
    <button
      className={`btn fs-6 px-4 text-white ${className}`}
      type={type}
      style={{
        background: "#1A73E8 0% 0% no-repeat padding-box",
        borderRadius: "8px",
      }}
    >
      SIGN UP
    </button>
  );
};

export default AppButton3;
