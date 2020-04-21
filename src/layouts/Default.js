import React from "react";
import MainNavbar from "../components/layout/MainNavbar";
import '../assets/scss/App.scss';

const DefaultLayout = () => (
  <div className="wrap bg-white-1">
    <MainNavbar/>
    <div className="main">
      <h1>Welcome</h1>
    </div>
  </div>
);

export default DefaultLayout;
