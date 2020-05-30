import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommentCreate from './CommentCreate';

export default () => {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const response = await axios.get('http://localhost:4000/posts');
    console.log('response for post service', response);

    setPosts(response.data);
  };

  // useEffect-> hook is called at the time when component is first rendered
  useEffect(() => {
    fetchPosts();
  }, []); // [] -> tell react to run this hook one time

  console.log('posts', posts);

  // generating a jsx to display on template
  const renderedPosts = Object.values(posts).map((post) => {
    return (
      <div
        className="card"
        style={{ width: '30%', marginBottom: '20px' }}
        key={post.id}
      >
        {/* key={post.id} --> React expect use to give unique value for this key */}
        <div className="card-body">
          <h3 style={{ color: 'black' }}>{post.title}</h3>
          <CommentCreate postId={post.id} />
        </div>
      </div>
    );
  });
  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPosts}
    </div>
  );
};
