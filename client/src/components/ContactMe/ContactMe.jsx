import React, { Component } from "react";
import "./ContactMe.scss";
import ContactForm from "./ContactForm";

export default class ContactMe extends Component {
  render() {
    const locations = window.location.pathname.includes("/en");
    const { contactMsgFr, contactMsgEn } = this.props;

    return (
      <section className="section-contact-me containers">
        <h1 className="center title white-col">
          {locations ? "Contact me" : "Contactez moi"}
        </h1>
        <p className="center white-col">
          {locations ? contactMsgEn : contactMsgFr}
        </p>
        <ContactForm />
      </section>
    );
  }
}
