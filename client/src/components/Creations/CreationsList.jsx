import React, { Component } from "react";
import infos from "./infos";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="containers-section">
      {posts.map(post => (
        <div key={post.id}>
          <h1 className="capitalize big-size">{post.id}</h1>
          <img src={post.url} />

          <h2>{post.titleProjet.title}</h2>
          <p className="justify txt-width">{post.titleProjet.text}</p>

          <h2>{post.titleObjectif.title}</h2>
          <p className="justify txt-width">{post.titleObjectif.text}</p>

          <h2>{post.logiciels.title}</h2>
          <p className="justify txt-width">{post.logiciels.listLogiciels}</p>
          <h2>{post.languages.title}</h2>
          <p className="justify txt-width">{post.languages.listLanguages}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
// export default class CreationsList extends Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     vals: infos,
//   //     activePage: infos.creationsEn.length
//   //   };
//   // }

//   render() {
// console.log(this.props);
// console.log(this.state.activePage);

// const val = this.state.vals.creationsEn;
// const valFr = this.state.vals.creations.length;

// const text = val.map((creation, index) => {
//   if (creation.id == this.props.match.params.id) {
//     return (
//       <div key={index}>
//         <h1 className="capitalize big-size">{creation.id}</h1>
//         <img src={creation.url} />

//         <h2>{creation.titleProjet.title}</h2>
//         <p className="justify txt-width">{creation.titleProjet.text}</p>

//         <h2>{creation.titleObjectif.title}</h2>
//         <p className="justify txt-width">{creation.titleObjectif.text}</p>

//         <h2>{creation.logiciels.title}</h2>
//         <p className="justify txt-width">
//           {creation.logiciels.listLogiciels}
//         </p>
//         <h2>{creation.languages.title}</h2>
//         <p className="justify txt-width">
//           {creation.languages.listLanguages}
//         </p>
//       </div>
//     );
//   }
// });
//     return (
//       <div className="container-main center">
//         <Posts />
//       </div>
//     );
//   }
// }
