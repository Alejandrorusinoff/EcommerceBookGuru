import React from "react";
import "../styles/Cart.css"

const Rating = ({ submitHandler, changeHandler, data }) => {
  return (
    <div>
      <form onSubmit={(e) => submitHandler(e, data.userId, data.bookId)} className="ratingMainDiv">
        <div>
          <input
            min="1"
            max="5"
            type="number"
            name="rating"
            style={{ height: "3vh", width: "4vw", outline: "none" }}
            onChange={(e) => changeHandler(e)}
          ></input>
        </div>
        <div>
          <button className="ratingButton">rate</button>
        </div>
      </form>
    </div>
  );
};

export default Rating;
