import React from "react";
import Slider from "../Carousel/Slider";
import LoginForm from "../Forms/Login";

export const Home = () => {
  return (
      <div>
        <Slider />
        <h1 className="page_space"><LoginForm/></h1>
      </div>   
  );
};