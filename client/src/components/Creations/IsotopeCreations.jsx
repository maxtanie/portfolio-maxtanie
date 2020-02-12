import React, { Component, useState, useEffect } from "react";
import Isotope from "isotope-layout";
import "./Creations.scss";

import BtnCreations from "./BtnCreations";
import imgCreations1 from "../../images/img-creations1.jpg";
import imgCreations2 from "../../images/img-creations2.jpg";
import BoxCreations from "./BoxCreations";
import ButtonLink from "../ButtonLink/ButtonLink";

export default class IsotopeCreations extends Component {
  state = {
    nameEn: ["All", "Ironhack", "Personal", "Logo", "Template"],
    nameFr: ["Tout", "Ironhack", "Personnel", "Logo", "Maquette"],
    filterNameEn: ["*", "ironhack", "personal", "logo", "template"],
    filterNameFr: ["*", "ironhack", "personnel", "logo", "maquette"],
    locations: window.location.pathname.includes("/en")
  };
  render() {
    const {
      locations,
      nameEn,
      nameFr,
      filterNameEn,
      filterNameFr
    } = this.state;

    console.log(this.props);
    return (
      <React.Fragment>
        {locations ? (
          <IsotopeReact name={nameEn} filterName={filterNameEn} />
        ) : (
          <IsotopeReact name={nameFr} filterName={filterNameFr} />
        )}
      </React.Fragment>
    );
  }
}

const IsotopeReact = ({ name, filterName }) => {
  // initialize an Isotope object with configs
  // store the isotope object in one state
  const [isotope, setIsotope] = useState(null);
  // store the filter keyword in another state
  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    setIsotope(
      new Isotope(".grid-creations", {
        itemSelector: ".filter-item"
        // layoutMode: "fitRows"
      })
      // layout mode options
    );
  }, []);

  // handling filter key change
  useEffect(() => {
    if (isotope) {
      filterKey === "*"
        ? isotope.arrange({ filter: `*` })
        : isotope.arrange({ filter: `.${filterKey}` });
    }
  }, [isotope, filterKey]);

  const locations = window.location.pathname.includes("/en");
  return (
    <div className="containers">
      <section className="section-padding creations-section">
        <div className="container-creation">
          <h1 className="center title uppercase">Creations</h1>
          <div className="flex">
            {filterName.map((list, index) => {
              return (
                <BtnCreations
                  key={index}
                  btnFilter={name[index]}
                  onClick={() => setFilterKey(list)}
                ></BtnCreations>
              );
            })}
          </div>

          <div className="grid-creations ">
            <BoxCreations
              filterItem="ironhack"
              image={imgCreations1}
              titleCreations="ChristCenter"
              title={name[2]}
            />
            <BoxCreations
              filterItem="ironhack"
              image={imgCreations2}
              titleCreations="PetsBoxes"
              title={name[1]}
            />
            <BoxCreations
              filterItem={locations ? "template" : "maquette"}
              image={imgCreations1}
              titleCreations="ChristCenter"
              title={name[1]}
            />
            <BoxCreations
              filterItem={locations ? "personal" : "personnel"}
              image={imgCreations2}
              titleCreations="PetsBoxes"
              title={name[2]}
            />
            <BoxCreations
              filterItem="ironhack"
              image={imgCreations1}
              titleCreations="ChristCenter"
              title={name[1]}
            />
            <BoxCreations
              filterItem="logo"
              image={imgCreations2}
              titleCreations="PetsBoxes"
              title={name[2]}
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
};
