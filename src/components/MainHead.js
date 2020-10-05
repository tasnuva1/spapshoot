import React from "react";
import "../components/App";

import logo from "../img/svg/spapshoot.svg";
import favicon from "../img/svg/favicon1.svg";

const MainHead = (props) => {
  return (
    <div>
      {/* <!-- preloader --> */}
      <div class="preloader">
        <div class="preloader__wrapper">
          <p class="p">LOADING</p>
          <div class="loading-box">
            <span class="loading-1"></span>
            <span class="loading-2"></span>
          </div>
        </div>
      </div>

      <div class="container">
        {/* <!-- nav --> */}
        <nav class="nav">
          <div className="brand-logo-container">
            <img src={favicon} alt="logo" className="logo" />
            <img src={logo} alt="raba logo" class="brand-logo1" />
          </div>
          <div class="baseBox">
            <h3 class="heading-3">base Images</h3>
            <p class="usd">usa</p>
          </div>
        </nav>

        {/* <!-- hero --> */}
      </div>
    </div>
  );
};

export default MainHead;
