import React, { Component } from "react";
import "./Footer.scss";

export default class Footer extends Component {
  render() {
    const locations = window.location.pathname.includes("/en");

    return (
      <div className="footer">
        <footer>
          <div className="bloc-infos">
            <p className="dib">
              &copy;{" "}
              {locations
                ? "Copyright by Maxtanie Petit Dol 2020, follow me on:"
                : "Tous droits reservés par Maxtanie Petit Dol 2020, me suivre sur:"}
            </p>
            <span className="dib">
              <a href="https://github.com/maxtanie" className="link-follow-me">
                {" "}
                Github,
              </a>
              <a href="https://github.com/maxtanie" className="link-follow-me">
                {" "}
                Linkedin,
              </a>
              <a href="https://github.com/maxtanie" className="link-follow-me">
                {" "}
                Instagram
              </a>
            </span>
          </div>
        </footer>
      </div>
    );
  }
}
