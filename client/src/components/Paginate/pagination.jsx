import React, { Component } from "react";
import "./paginations.scss";
import { NavLink, Redirect } from "react-router-dom";

export default class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infos: "",
      valus: null,
      vals: ["christcenter", "petboxes"]
    };
  }

  async componentDidMount() {
    const url =
      "https://raw.githubusercontent.com/maxtanie/name/master/creations.json";
    const res = await fetch(url);
    const data = await res.json();
    this.setState({
      valus: data.map(elem => {
        return elem.id;
      }),
      infos: this.state.valus
    });
    console.log(this.state.names);
  }

  // componentWillUpdate = () => {
  //   console.log(this.props.name === undefined ? "Sorry" : this.props.name);
  // };
  render() {
    console.log("NAMESS", this.props);
    const { postsPerPage, totalPosts, paginate, names } = this.props;
    const pageNumbers = [];
    let lists = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <div>
        <div className="pagination container-main center">
          {pageNumbers.map(number => (
            <NavLink
              exact
              onClick={() => paginate(number)}
              to={`/en/portfolio/creations/${names}`}
              className="page-link"
            >
              {number}
            </NavLink>
          ))}
        </div>
      </div>
    );
  }
}
