import React, { Component } from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";
import axios from "axios";

export default class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      object: "",
      name: "",
      email: "",
      message: "",
      output: "",
      finished: "",
      clean: "",
      validated: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });

    const { object, name, email, message, validated } = this.state;
    const locations = window.location.pathname.includes("/en");

    if (
      message.length === 0 ||
      object.length === 0 ||
      name.length === 0 ||
      (email.length === 0 && validated === false)
    ) {
      this.setState({
        output: locations
          ? "Input all fields ✍"
          : "Veuillez remplir tous les champs ✍",
        validated: false
      });
    } else {
      this.setState({
        output: locations
          ? "All fields are validated ✍"
          : "Tous les champs sont validés 👍",
        validated: true
      });
    }
  };

  async handleSubmit(e) {
    e.preventDefault();

    const locations = window.location.pathname.includes("/en");
    const { object, name, email, message, validated } = this.state;

    if (validated === true && message !== "") {
      this.setState({
        finished: locations ? "Message sent" : "Message envoyé",
        object,
        name,
        email,
        message: "",
        output: "",
        clean: e.target.reset()
      });
    } else {
      this.setState({
        finished: locations ? "Message not sent" : "Message pas envoyé",
        output: ""
      });
    }

    const form = await axios.post("/api/form", {
      object,
      name,
      email,
      message
    });
  }

  render() {
    const { output, validated, finished } = this.state;
    const locations = window.location.pathname.includes("/en");

    console.log(finished);

    return (
      <Form className="container-contact" onSubmit={this.handleSubmit}>
        <p className={validated === false ? "red" : "green"}>{output}</p>

        <FormGroup>
          {/* <Label for="name">Name:</Label> */}
          <Input
            type="text"
            name="object"
            placeholder={locations ? "Insert an Object" : "Insérez un Objet"}
            onChange={this.handleChange}
            className="contact-style"
          />
        </FormGroup>
        <FormGroup>
          {/* <Label for="name">Name:</Label> */}
          <Input
            type="text"
            name="name"
            placeholder={locations ? "Insert your name" : "Tapez votre nom"}
            onChange={this.handleChange}
            className="contact-style"
          />
        </FormGroup>
        <FormGroup>
          {/* <Label for="email">Email:</Label> */}
          <Input
            type="email"
            name="email"
            placeholder={locations ? "Insert your Email" : "Entrez votre Email"}
            onChange={this.handleChange}
            className="contact-style"
          />
        </FormGroup>
        <FormGroup>
          {/* <Label for="message">Message:</Label> */}
          <Input
            type="textarea"
            name="message"
            placeholder={
              locations ? "Insert your message" : "Tapez votre message"
            }
            onChange={this.handleChange}
            className="contact-style height-textarea"
          />
        </FormGroup>
        <Button type="submit" className="btn-style">
          {locations ? "Submit" : "Envoyez"}
        </Button>

        <span className="red">{finished}</span>
      </Form>
    );
  }
}
