// import React, { Component } from "react";
// import Home from "./Home";
// import infos from "../Creations/infos";

// export default class Writers extends Component {
//   state = {
//     vals: infos
//   };
//   render() {
//     const val = this.state.vals.users;
//     console.log(this.props);
//     console.log(this.props.location);

//     const text = val.map((user, index) => {
//       if (user.id == this.props.match.params.profile_id) {
//         return (
//           <div key={index}>
//             <p>
//               {user.text} {(user.isActived = false)}
//             </p>
//             <img src={user.url} />
//           </div>
//         );
//       }
//       return <p></p>;
//     });

//     return (
//       <div>
//         <h1>I am profile page with id: {this.props.match.params.profile_id}</h1>

//         {text}
//       </div>
//     );
//   }
// }
