import axios from "axios";
import React, { useEffect, useState } from "react";

function DataFetching() {
  const [post, setPost] = useState({});
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIDFromButtonClick] = useState(1);

  // Multiple Posts retreived only once
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        window.alert(err);
      });
  }, []);

  // One Post Retreived on change passed to input
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        window.alert(err);
      });
  }, [id]);

  // One Post Retreived on change passed to input and confirmed after pressing button
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        window.alert(err);
      });
  }, [idFromButtonClick]);

  const handleClick = () => {
    setIDFromButtonClick(id);
  };

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={handleClick}>
        Fetch Post
      </button>
      <div>Post ID : {post.id}</div>
      <div>
        Post Title with ID {post.id} : {post.title}
      </div>

      <ul>
        {posts.map((post) => (
          <li key={post.id}> {post.title} </li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetching;
