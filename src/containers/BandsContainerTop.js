import React from "react";
import { Outlet } from "react-router-dom";

function BandsContainerTop() {
  return (
    <div className="home">
      <div className="container">
        <h1 className="text-center mt-5">Band page</h1>
        <Outlet />
      </div>
    </div>
  );
}

export default BandsContainerTop;