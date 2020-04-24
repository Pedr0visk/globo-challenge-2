import React from "react";
import MainNavbar from "../components/layout/MainNavbar";
import Footer from '../components/layout/Footer';

const DefaultLayout = ({ children }) => (
  <div className="wrap bg-white-1">
    <MainNavbar />
    <div className="main-content">
      {children}  
    </div>
    <Footer />
  </div>
);

export default DefaultLayout;
