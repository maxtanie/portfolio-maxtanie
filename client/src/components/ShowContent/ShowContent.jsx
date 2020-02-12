import React from "react";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";

const ShowContent = () => {
  const linkFr = "/fr/portfolio/";
  const linkEn = "/en/portfolio/";
  return (
    <React.Fragment>
      {window.location.pathname.includes("/en") && (
        <React.Fragment>
          <Header />
          <Nav
            link1="About"
            link2="Creations"
            link3="Skills"
            // link4="CV"
            link5="Contact me"
            link6="Portfolio Fr"
            linkName1={`${linkEn}about`}
            linkName2={`${linkEn}creations`}
            linkName3={`${linkEn}skills`}
            linkName4={`${linkEn}cv`}
            linkName5={`${linkEn}contact-me`}
          />
        </React.Fragment>
      )}
      {window.location.pathname.includes("/fr") && (
        <React.Fragment>
          <Header />
          <Nav
            link1="A propos"
            link2="Créations"
            link3="Compétences"
            // link4="CV"
            link5="Contact moi"
            link6="Portfolio En"
            linkName1={`${linkFr}a-propos`}
            linkName2={`${linkFr}creations`}
            linkName3={`${linkFr}competences`}
            linkName4={`${linkFr}cv`}
            linkName5={`${linkFr}contact-moi`}
          />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default ShowContent;
