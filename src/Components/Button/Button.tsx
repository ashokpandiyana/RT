import React from "react";
import button from "./Interface";
import "./Style.css";
const Button: React.FC<button> = ({ type = "default" }) => {
  return <button className={`button ${type}`}>{type}</button>;
};

export default Button;
