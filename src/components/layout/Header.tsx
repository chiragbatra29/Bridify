import React from "react";
import './style.css'
import { Link } from "react-router-dom";
import { STRINGS } from "../../constants/strings";

const Header = (props:any) => {
  return (
    <div className="header">
      <Link to='/' className="logo">{STRINGS.BRAND}</Link>
      <div className="header-right">
        <span className="active" data-toggle="modal" data-target="#exampleModal" onClick={props.logout}>{STRINGS.LOGOUT}</span>
      </div>
    </div>
  );
};

export default Header
