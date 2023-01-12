import React from "react";
import Hcarousel from "../components/commonHomepage/HomeCarousel";
import Habout from "../components/commonHomepage/Habout";
import Hfooter from "../components/commonHomepage/Hfooter";

function CommonHomePage() {
  return (
    <div>
      <Habout />
      <Hcarousel />
      <Hfooter />
    </div>
  );
}

export default CommonHomePage;
