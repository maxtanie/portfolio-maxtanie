import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./ButtonCV.scss";
// import InfosWebsite from "../../infosWebsite";
import pdf from "../../pdf/CV-Dev-Front-Maxtanie-Petit-Dol.pdf";
import iron from "../../pdf/Ironhack-qualification-bourse.pdf";

export default class ButtonCV extends Component {
  state = {
    // aboutInfos: InfosWebsite.about,
    // value: "",
    cv: [pdf, iron],
    outputCV: ""
  };

  CvDownload = () => {
    window.location.pathname.includes("/en")
      ? this.setState({ outputCV: this.state.cv[1] })
      : this.setState({ outputCV: this.state.cv[0] });
  };

  // AboutValue = () => {
  //   window.location.pathname.includes("/en")
  //     ? this.setState({ value: this.state.aboutInfos.valueEn })
  //     : this.setState({ value: this.state.aboutInfos.valueFr });
  // };
  componentDidMount() {
    // this.AboutValue();
    this.CvDownload();
  }

  render() {
    const { outputCV } = this.state;
    return (
      <div className="bloc-btn" style={{ textAlign: `${this.props.position}` }}>
        <a href={outputCV} target="_blank">
          <button
            className="btn"
            style={{
              background: `${this.props.background}`,
              width: `${this.props.width}px`
            }}
          >
            {this.props.value}
          </button>
        </a>
      </div>
    );
  }
}
