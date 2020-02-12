import React, { Component } from "react";
import Isotope from "isotope-layout";
import "./IsotopFilter.css";

const IsotopeReact = () => {
  // store the isotope object in one state
  const [isotope, setIsotope] = React.useState(null);
  // store the filter keyword in another state
  const [filterKey, setFilterKey] = React.useState("*");

  // initialize an Isotope object with configs

  React.useEffect(() => {
    setIsotope(
      new Isotope(".filter-container", {
        itemSelector: ".filter-item"
        // layoutMode: "fitRows"
      })
    );
  }, []);

  // handling filter key change
  React.useEffect(() => {
    if (isotope) {
      filterKey === "*"
        ? isotope.arrange({ filter: `*` })
        : isotope.arrange({ filter: `.${filterKey}` });
    }
  }, [isotope, filterKey]);

  return (
    <>
      <ul className="filter-list">
        <li className="list" onClick={() => setFilterKey("*")}>
          All
        </li>
        <li className="list" onClick={() => setFilterKey("maquettes")}>
          Maquettes
        </li>
        <li className="list" onClick={() => setFilterKey("logos")}>
          Logos
        </li>
      </ul>
      <hr />
      <ul className="filter-container">
        <div className="filter-item maquettes">
          <span>Maquettes</span>
        </div>
        <div className="filter-item logos">
          <span>Logos</span>
        </div>
        <div className="filter-item logos">
          <span>Logos</span>
        </div>
        <div className="filter-item maquettes">
          <span>Maquettes</span>
        </div>
      </ul>
    </>
  );
};
export default IsotopeReact;
