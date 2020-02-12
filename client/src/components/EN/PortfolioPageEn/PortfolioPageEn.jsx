import React from "react";
import TypeWrite from "../../TypeWrite/TypeWrite";
import ButtonCV from "../../ButtonCV/ButtonCV";
import About from "../../About/About";
import Footer from "../../Footer/Footer";

const PortfolioPageEn = () => (
  <section className="containers">
    <TypeWrite
      quotation="In all labour there is profit: but the talk of the lips tendeth only to penury."
      verse="Proverbs 14:23"
    />
    <ButtonCV value="Download my resume" background="#000" width="250" />
    <About />
    {/* <Footer /> */}
  </section>
);
export default PortfolioPageEn;
