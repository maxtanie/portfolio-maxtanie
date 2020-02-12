import React, { Component } from "react";
import ContactMe from "./ContactMe";

export default class ContactMeStruct extends Component {
  state = {
    contact: {
      Fr: {
        title: "Contact moi",
        msg: "Bonjour tout le monde"
      },
      En: {
        title: "Contact me",
        msg: "Hello everybody"
      }
    },
    title: "",
    msg: ""
  };

  ShowInfo = () => {
    window.location.pathname.includes("en")
      ? this.setState({
          title: this.state.contact.En.title,
          msg: this.state.contact.En.msg
        })
      : this.setState({
          title: this.state.contact.Fr.title,
          msg: this.state.contact.Fr.msg
        });
  };

  componentDidMount = () => {
    this.ShowInfo();
  };

  render() {
    const { title, msg } = this.state;
    return (
      <React.Fragment>
        <ContactMe
          contactMsgFr="Si je suis la personne que vous recherchez, vous pouvez me contacter  ici 👇"
          contactMsgEn="If I am the one that you looking for, you can contact  me here 👇"
        />
      </React.Fragment>
    );
  }
}
