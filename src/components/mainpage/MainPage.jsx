import React from "react";
import "../../scss/global.scss";
import AdminMain from "../admin/AdminMain";
import MainIntro from "./MainIntro";
import MainOptionsDesc from "./MainOptionsDesc";

const MainPage = () => {
  return (
    <div>
      {/* <MainIntro />
      <h1 className="main-divider bg-dark text-light">THIS THING</h1>
      <MainOptionsDesc /> */}
      <AdminMain />
    </div>
  );
};

export default MainPage;
