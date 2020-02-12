import React, { Component } from "react";
import TypeWriter from "react-typewriter";
import "./TypeWrite.scss";

export default class TypeWrite extends Component {
  render() {
    return (
      <div className="container center">
        <TypeWriter typing={1} maxDelay={100}>
          <div className="bloc-quotation">
            <q>{this.props.quotation}</q>
            <b> {this.props.verse}</b>
          </div>
        </TypeWriter>
      </div>
    );
  }
}
