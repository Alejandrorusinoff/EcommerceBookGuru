import React from "react";
import "../styles/Footer.css";

const FooterContainer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="row" />
        <div className="col-sm-4">
          <br />
          CUSTOMER SERVICES <br />
          _______________________
          <br />
          <br />
          Contact Us <br /> Phone: 1585432288
          <br /> bookguru@books.com
        </div>

        <div className="col-sm-4">
          <br />
          SUSCRIPTIONS <br />
          _______________________
          <br />
          <br />
          BookGuru subscription <br /> My subscription
        </div>
        <div className="col-sm-4">
          <br />
          FOLLOW US <br />
          _______________________
          <br />
          <br />
          Instagram
          <br />
          Twitter <br />
          <div id="copywright" className="copyright">
            Copywright &copy; BookGuru
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterContainer;
