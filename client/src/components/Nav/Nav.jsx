import React from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";
import logo from "../../images/LOGO.png";

const Nav = props => {
  return (
    <nav className="hide">
      <ul className="flex-items-center">
        <li className="list-items">
          <NavLink to="/">
            <img className="logo" src={logo} alt="logo" />
          </NavLink>
        </li>
        {/* <li className="list-items">
          <NavLink to={props.linkName1}>{props.link1}</NavLink>
        </li> */}
        <li className="list-items">
          <NavLink to={props.linkName2}>{props.link2}</NavLink>
        </li>
        <li className="list-items">
          <NavLink to={props.linkName3}>{props.link3}</NavLink>
        </li>
        {/* <li className="list-items">
          <NavLink to={props.linkName4}>{props.link4}</NavLink>
        </li> */}
        <li className="list-items">
          <NavLink to={props.linkName5}>{props.link5}</NavLink>
        </li>
        <li className="list-items">
          <NavLink
            to={
              props.link6 === "Portfolio En" ? "/en/portfolio" : "/fr/portfolio"
            }
          >
            {props.link6}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
