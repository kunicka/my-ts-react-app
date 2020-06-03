import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const DataFetching = () => {
  // TIP: you can provide generictype argument to useState like this!
  // FIXME: nie wiem jaki typ API zwraca wiez zatypuje jako array of "any"
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
  });
  return (
    <div>
      Poniżej znajduje się rozwijana lista tytułów postów z JASON PLACEHOLDER
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
