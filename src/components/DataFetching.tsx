import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const DataFetching = () => {
  
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[posts]);
  return (
    <div className="div-container">
      <h5>API DATA FETCHING</h5>
      <p>Poniżej znajduje się rozwijana lista tytułów postów z JASON PLACEHOLDER</p>
      <select id="main-category" name="main-category">
        {posts.map((post) => (
          <option key={post.id} value={post.title}>
            {post.title}
          </option>
        ))}
      </select>
    </div>
  );
};
