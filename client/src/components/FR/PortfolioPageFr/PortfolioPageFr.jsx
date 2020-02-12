import React, { Component } from "react";
import TypeWrite from "../../TypeWrite/TypeWrite";
import ButtonCV from "../../ButtonCV/ButtonCV";
import About from "../../About/About";
import Footer from "../../Footer/Footer";

const PortfolioPageFr = () => (
  <section className="containers">
    <TypeWrite
      quotation="Tout travail procure l'abondance, Mais les paroles en l'air ne mènent qu'à la disette."
      verse="Proverbes 14:23"
    />
    <ButtonCV value="Télécharger mon CV" background="#111" width="250" />
    <About />

    {/* <Footer /> */}
  </section>
);
export default PortfolioPageFr;
