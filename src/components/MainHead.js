import "./ImageList.css";
import React from "react";
// import "../index";
import "../components/App";

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
          <img
            src="./img/svg/brand-logo.svg"
            alt="raba logo"
            class="brand-logo"
          />
          <div class="baseBox">
            <h3 class="heading-3">base currency</h3>
            <p class="usd">usd</p>
          </div>
        </nav>

        {/* <!-- hero --> */}
        <div class="hero">
          <div class="hero__heading">
            <h1 class="heading-1">
              Raba Live
              <br /> Exchange Rates
            </h1>
            <p class="date">23rd September 2020</p>
          </div>
          <div class="hero__rates">
            <div class="table-wrapper"></div>
          </div>
        </div>

        {/* <!-- coverter --> */}
        <div class="converter">
          <div class="converter__box">
            <h2 class="heading-2">
              currency
              <br />
              converter
            </h2>
            <p class="paragraph">
              Choose the currency and the amounts to get the exchange rate
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHead;
