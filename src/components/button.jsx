import React from "react";
import "../styles/button.css"

const Button = (props) => <button {...props} className="btn--primary">{props.text}</button>;

export default Button