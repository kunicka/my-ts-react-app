import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div>
      Poniżej znajduje się rozwijana lista tytułów postów z JASON PLACEHOLDER
      <select id="main-category" name="main-category">
        {posts.map((post) => (
          <option key={posts.id} value={posts.title}>
            {posts.title}
          </option>
          
        ))}
      </select>
    </div>
  );
}

export default DataFetching;
