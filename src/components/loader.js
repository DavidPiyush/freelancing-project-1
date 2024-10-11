import React from "react";
import "./Loader.css";  // Import CSS if needed

// Import your SVG directly
import { ReactComponent as LoaderSVG } from "../assets/images/loader.svg";

const Loader = () => {
  return (
    <div className="loader-container">
      {/* Display your animated loader */}
      <LoaderSVG />
    </div>
  );
};

export default Loader;
