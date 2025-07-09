import React, { useEffect } from 'react'
import Home from './Home';
import { useState } from 'react';

function Blog() {
  // return (
  //   <div>
  //     <p>Hello my Family</p>
  //     <button onClick={hi}>click me</button>
  //   </div>
  // )

  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const result = await response.json();
    console.log("data", result);
    setPosts(result)

  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div style={{ padding: "20px" }}>
        <h2>Posts from API:</h2>
        {posts.map((post) => (
          <div key={post.id} style={{ marginBottom: "10px" }}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </div>
        ))}
    </div>
  </div>
  );
}

export default Blog;
