import React from "react";
import AppButton from "../components/AppButton";

const ImageRightComponent = ({ title, subtext, image }) => {
  return (
    <div>
      <div className="container px-2">
        <div className="row d-flex align-items-center my-5">
          <div className="col-md-6 col-12">
            <h1 className="title fw-bolder">{title}</h1>
            <h6
              className="subtext text-secondary fw-normal"
              style={{
                color: "#343434",
                font: "normal normal normal Montserrat",
              }}
            >
              {subtext}
            </h6>
            <AppButton className="mt-5" name="Explore" />
          </div>
          <div className="col-md-6 col-12">
            <img
              style={{ width: "80%" }}
              className="rounded mx-auto d-block"
              src={image}
              alt="tattoo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageRightComponent;
