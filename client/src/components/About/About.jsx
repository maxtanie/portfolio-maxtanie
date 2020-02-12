import React, { Component } from "react";
import "./About.scss";
import ButtonLink from "../ButtonLink/ButtonLink";
import websiteInfos from "../Object/portfolioInfos.json";
import imgMaxtanie from "../../images/tanie2.jpg";

export default class About extends Component {
  state = {
    dataAbout: websiteInfos.About,
    infos: "",
    title: "",
    titleSection: "",
    titleHobbies: ""
  };

  ShowInfos = () => {
    const { dataAbout } = this.state;
    window.location.pathname.includes("/en")
      ? this.setState({
          title: dataAbout.En.title,
          titleSection: dataAbout.En.titleWhoIAm,
          titleHobbies: dataAbout.En.titleHobbies,
          infos: dataAbout.En.whoAmIText
        })
      : this.setState({
          title: dataAbout.Fr.title,
          titleSection: dataAbout.Fr.titleWhoIAm,
          titleHobbies: dataAbout.Fr.titleHobbies,
          infos: dataAbout.Fr.whoAmIText
        });
  };

  componentDidMount = () => {
    this.ShowInfos();
  };

  render() {
    const { infos, title, titleSection, titleHobbies, dataAbout } = this.state;

    const hobbiesFr = dataAbout.Fr.hobbiesImages.map((elem, index) => {
      return (
        <React.Fragment>
          {elem.url.map((urls, i) => {
            return (
              <span className="hobbies" key={index}>
                <img
                  src={urls}
                  className="img-hobbies"
                  alt={elem.imageName[i]}
                />
              </span>
            );
          })}
        </React.Fragment>
      );
    });
    const hobbiesEn = dataAbout.En.hobbiesImages.map((elem, index) => {
      return (
        <React.Fragment>
          {elem.url.map((urls, i) => {
            return (
              <span className="hobbies" key={index}>
                <img
                  src={urls}
                  className="img-hobbies"
                  alt={elem.imageName[i]}
                />
              </span>
            );
          })}
        </React.Fragment>
      );
    });

    return (
      <React.Fragment>
        <div className="section-padding about-section">
          <div className="content">
            <div className="bloc-infos bloc-infos-absolute">
              <span className="bloc-infos bloc-infos-relative">
                <div className="img-profil">
                  <h1 className="title uppercase">{titleSection}</h1>
                </div>
              </span>
              <h1 className="center white tiny">{title}</h1>
              <img src={imgMaxtanie} alt="" className="img-about" />
              <p>{infos}</p>

              <h1 className="center white tiny">{titleHobbies}</h1>
              {window.location.pathname.includes("/en") ? hobbiesEn : hobbiesFr}

              <ButtonLink
                background="#000"
                position="right"
                linkEn="creations"
                linkFr="creations"
                valueEn="Creations"
                valueFr="Créations"
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
