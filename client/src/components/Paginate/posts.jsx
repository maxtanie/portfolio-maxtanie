import React from "react";
import "./posts.scss";
import Pagination from "./pagination";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  const vals = [window.location.pathname];

  return (
    <React.Fragment>
      {posts.map(post => (
        <div key={post.id} className="container-2 creations-list">
          <h1 className="capitalize big-size left">{post.id}</h1>
          <div className="flex-2">
            <div className="bloc-1">
              <h2 className="cookie-font">{post.titleProjet.title}</h2>
              <p className="justify txt-width">{post.titleProjet.text}</p>

              <h2 className="cookie-font">{post.titleObjectif.title}</h2>
              <p className="justify txt-width">{post.titleObjectif.text}</p>

              <h2 className="cookie-font">{post.logiciels.title}</h2>
              <p className="justify txt-width">
                {post.logiciels.listLogiciels}
              </p>
              <h2 className="cookie-font">{post.languages.title}</h2>
              <p className="justify txt-width">
                {post.languages.listLanguages}
              </p>
            </div>
            <div className="bloc-img">
              <img src={post.url} alt="" className="img-res" />
            </div>
          </div>
          <div className="see-w">
            <a href="">Voir le site</a>
          </div>
          <div className="full-creations">
            <img src={post.url} alt="" className="mbot" />
            <img src={post.url} alt="" className="mbot" />
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default Posts;
