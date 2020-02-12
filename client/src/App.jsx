import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import "./App.scss";

//LoadingPage Component
import LoadingPage from "./components/LoadingPage/LoadingPage";

//PortfolioPageFr Component
import PortfolioPageFr from "./components/FR/PortfolioPageFr/PortfolioPageFr";

//PortfolioPageEn Component
import PortfolioPageEn from "./components/EN/PortfolioPageEn/PortfolioPageEn";
// import Creations from "./components/Creations/Creations";
// import InfosCreations from "./components/Creations/InfosCreations";

import About from "./components/About/About";
import ShowContent from "./components/ShowContent/ShowContent";
import Skills from "./components/Skills/Skills";
import BlocSkills from "./components/Skills/BlocSkills";
import Footer from "./components/Footer/Footer";
import IsotopeCreations from "./components/Creations/IsotopeCreations";
// import CreationsList from "./components/Creations/CreationsList";
import AppPagine from "./components/Paginate/appPagine";
import ContactMeStruct from "./components/ContactMe/ContactMeStruct";
// import TitleName from "./components/Skills/TitleName";
// import Test from "./components/Test";

import data from "./components/Object/portfolioInfos.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }

  render() {
    const { data } = this.state;

    console.log(data);

    const linkFr = "/fr/portfolio/";
    const linkEn = "/en/portfolio/";
    return (
      <Route className="App">
        {/* <Switch>
          <Route path="/" exact component={Test} />
        </Switch> */}
        <ShowContent />
        <Switch>
          <Route path="/" exact>
            <LoadingPage
              name="Maxtanie "
              lastName="Petit Dol"
              jobName="Front-end developer junior"
            />
          </Route>
          <Route path={`${linkFr}`} exact component={PortfolioPageFr} />
          <Route path={`${linkFr}a-propos`} exact component={About} />
          <Route
            path={`${linkFr}creations`}
            exact
            component={IsotopeCreations}
          />
          <Route path={`${linkFr}creations/:id`} exact component={AppPagine} />
          <Route path={`${linkFr}cv`} exact component={Hello} />
          <Route
            path={`${linkFr}contact-moi`}
            exact
            component={ContactMeStruct}
          />

          <Route path={`${linkEn}`} exact component={PortfolioPageEn} />
          <Route
            path={`${linkEn}creations`}
            exact
            component={IsotopeCreations}
          />
          <Route path={`${linkEn}creations/:id`} exact component={AppPagine} />
          <Route path={`${linkEn}cv`} exact component={Hello} />
          <Route
            path={`${linkEn}contact-me`}
            exact
            component={ContactMeStruct}
          />

          <Route path={`${linkFr}competences`} exact>
            <h1 className="center title uppercase">Compétences</h1>
            <div className="container">
              <Skills titleSkillsFr="Développement web">
                <BlocSkills skillsName="HTML5" percentage={90} />
                <BlocSkills skillsName="CSS3" percentage={80} />
                <BlocSkills skillsName="JAVASCRIPT" percentage={40} />
                <BlocSkills skillsName="REACT JS" percentage={40} />
                <BlocSkills skillsName="NODE JS" percentage={30} />
                <BlocSkills skillsName="EXPRESS JS" percentage={30} />
                <BlocSkills skillsName="SOCKET.IO" percentage={20} />
                <BlocSkills skillsName="ANGULAR" percentage={5} />
              </Skills>
              <Skills titleSkillsFr="Editeurs de texte">
                <BlocSkills skillsName="SUBLIME TEXT" percentage={50} />
                <BlocSkills skillsName="VISUAL STUDIO CODE" percentage={80} />
                <BlocSkills skillsName="ATOME" percentage={20} />
              </Skills>
            </div>
          </Route>

          <Route path={`${linkEn}skills`} exact>
            <h1 className="center title uppercase">Skills</h1>
            <div className="container">
              <Skills titleSkillsEn="Web development">
                <BlocSkills skillsName="HTML5" percentage={90} />
                <BlocSkills skillsName="CSS3" percentage={80} />
                <BlocSkills skillsName="JAVASCRIPT" percentage={40} />
                <BlocSkills skillsName="REACT JS" percentage={40} />
                <BlocSkills skillsName="NODE JS" percentage={30} />
                <BlocSkills skillsName="EXPRESS JS" percentage={30} />
                <BlocSkills skillsName="SOCKET.IO" percentage={20} />
                <BlocSkills skillsName="ANGULAR" percentage={5} />
              </Skills>
              <Skills titleSkillsEn="IDE">
                <BlocSkills skillsName="SUBLIME TEXT" percentage={50} />
                <BlocSkills skillsName="VISUAL STUDIO CODE" percentage={80} />
                <BlocSkills skillsName="ATOME" percentage={50} />
              </Skills>
            </div>
          </Route>
        </Switch>
      </Route>
    );
  }
}

const Hello = () => (
  <div className="container-main">
    <h1 className="center">Hello</h1>
  </div>
);

export default withRouter(App);
