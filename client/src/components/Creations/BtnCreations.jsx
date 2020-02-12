import React, { Component } from "react";
import "./btn.scss";

export default class BtnCreations extends Component {
  render() {
    console.log(this.props.btnFilter);
    const styles = {
      padding: "10px 25px"
    };
    return (
      <div
        className="btn-creations"
        style={styles}
        onClick={this.props.onClick}
      >
        {this.props.btnFilter}
        {this.props.children}
      </div>
    );
  }
}
