import React from "react";
import logo from "../../Assets/logo.png";
import "./logo.css";
const Logo = () => {
  return(
    <div class="img-container">
    <img src={logo} width={67} alt="logo not available" />
  
    </div>
  )

  // return <img src={logo} width={67} alt="logo not available" />;
}

export default Logo;



