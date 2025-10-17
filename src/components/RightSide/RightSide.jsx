import React from "react";
import "./RightSide.css";
import Updates from "../Updates/Updates";
import Reviews from "../Reviews/Reviews";

function RightSide() {
  return (
    <div className="right-side">
      <div>
        <h3>Updates</h3>
        <Updates />
      </div>
      <div>
        <h3>Customer Reviews</h3>
        <Reviews />
      </div>
    </div>
  );
}

export default RightSide;
