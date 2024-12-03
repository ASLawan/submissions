/* eslint-disable no-unused-vars */
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="container-fluid " id="footer">
        <div className="row p-5 text-center">
          <div className="col-md-4 col-lg-4 col-sm-12">
            <h2>SubMissions</h2>
            <h3>App</h3>
          </div>
          <div className="col-md-4 col-lg-4 col-sm-12">
            <h3>Socials</h3>
          </div>
          <div className="col-md-4 col-lg-4 col-sm-12">
            <h3>Links</h3>
          </div>
        </div>
      </div>
      <div className="container-fluid p-3" id="foot">
        <div className="row text-center">
          <p>&copy; - 2024 Submissions App</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
