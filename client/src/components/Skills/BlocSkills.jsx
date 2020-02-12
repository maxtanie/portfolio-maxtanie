import React, { Component } from "react";

export default class BlocSkills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percentage: this.props.percentage
    };
  }

  percentageFunc = () => {
    this.setState({
      percentage: this.state.percentage
    });
  };

  componentDidMount = () => {
    this.percentageFunc();
  };

  render() {
    console.log(this.state.percentage);
    const styles = {
      width: this.state.percentage + "%"
    };
    return (
      <React.Fragment>
        <div className="bloc-skills">
          <div className="skills-name">
            <h6>{this.props.skillsName}</h6>
          </div>
          <div className="bloc">
            <div className="bloc-percentage" style={styles}>
              {this.state.percentage >= 0 ? this.props.percentage + "%" : ""}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
