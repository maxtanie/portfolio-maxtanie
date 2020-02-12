// import React, { Component } from "react";
// import data from "./portfolioInfos.json";

// export default class Translate extends Component {
//   state = {
//     websiteObj: data
//   };

//   ShowInfo = event => {
//     const { websiteObj } = this.state;
//     const titleFr = websiteObj.Creations.Fr.title;
//     const titleEn = websiteObj.Creations.En.title;

//     window.location.pathname.includes("en")
//       ? this.setState({
//           output: titleEn
//         })
//       : this.setState({
//           output: titleFr
//         });
//   };

//   componentDidMount = () => {
//     this.ShowInfo();
//   };
//   render() {
//     console.log(this.state.websiteObj);

//     const { output } = this.state;
//     return <div>{output}</div>;
//   }
// }
