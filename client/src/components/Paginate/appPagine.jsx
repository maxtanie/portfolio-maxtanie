import React, { useState, useEffect } from "react";
import Posts from "./posts";
import Pagination from "./pagination";
import axios from "axios";

const AppPagine = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(1);
  const name = ["christcenter", "petboxes"];

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      let res = await axios.get(
        "https://raw.githubusercontent.com/maxtanie/name/master/creations.json"
      );
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const names = "";

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="containers">
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        names={currentPage}
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default AppPagine;
