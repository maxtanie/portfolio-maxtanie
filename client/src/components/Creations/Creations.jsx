import React, { Component } from "react";
import ButtonLink from "../ButtonLink/ButtonLink";
import "./Creations.scss";
import imgCreations1 from "../../images/img-creations1.jpg";
import imgCreations2 from "../../images/img-creations2.jpg";
import BoxCreations from "./BoxCreations";
import BtnCreations from "./BtnCreations";

export default class Creations extends Component {
  state = {
    name: ["Ironhack", "Personal", "Logo", "Template", "All"],
    vals: ""
  };

  HandleShow = () => {
    this.setState({
      vals: this.state.name.filter(names => names === "Personal")
        ? console.log("yes", this.state.name)
        : console.log("no")
    });
  };

  render() {
    const btnCreations = this.state.name.map((creations, index) => {
      return <BtnCreations key={index} btnFilter={creations} />;
    });

    return (
      <div className="containers">
        <section className="section-padding creations-section">
          <div className="container-creation">
            <h1 className="center title uppercase">Creations</h1>

            <div className="flex">{btnCreations}</div>

            <div className="grid-creations">
              <BoxCreations
                image={imgCreations1}
                titleCreations="ChristCenter"
                title={this.state.name[0]}
              />
              <BoxCreations
                image={imgCreations2}
                titleCreations="PetsBoxes"
                title={this.state.name[1]}
              />
              <BoxCreations
                image={imgCreations1}
                titleCreations="ChristCenter"
                title={this.state.name[2]}
              />
              <BoxCreations
                image={imgCreations1}
                titleCreations="ChristCenter"
                title={this.state.name[3]}
              />
              <BoxCreations
                image={imgCreations2}
                titleCreations="PetsBoxes"
                title={this.state.name[4]}
              />
              <BoxCreations
                image={imgCreations2}
                titleCreations="PetsBoxes"
                title={this.state.name[4]}
              />
            </div>
            <ButtonLink
              background="#fff"
              color="#111"
              border="1px solid #eaeaea"
              position="right"
              linkEn="skills"
              linkFr="competences"
              valueEn="Skills"
              valueFr="Compétences"
            />
          </div>
        </section>
      </div>
    );
  }
}
