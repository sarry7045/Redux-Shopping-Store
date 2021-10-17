import React from "react";
import { ScaleLoader } from "react-spinners";

const Header = () => {
  return (
    <div className="ui fixed menu">
      <div className="ui container center FakeShop">
        <h2 style={{ marginLeft: "30%" }}>
          <span>R</span>edux <span>F</span>ake-<span>S</span>hop
        </h2>{" "}
        {/* <ScaleLoader color="#295FFF" padding="10%" /> */}
        {/* <div style={{padding:"10px" , marginLeft:"70%"}}> <h4> Wait For a Seconds</h4></div> */}
      </div>
    </div>
  );
};

export default Header;
