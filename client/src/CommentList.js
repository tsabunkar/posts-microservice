import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CommentList({ postId }) {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    const resp = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`
    );
    console.log('resp --> ', resp);
    setComments(resp.data);
  };

  // To call one time in the comment so using this life cycle hook
  useEffect(() => {
    fetchComments();
  }, []);

  console.log('comments', comments);

  const renderedComments = comments.map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  return (
    <div>
      <p>No of Comments = {comments.length} </p>
      <ul> {renderedComments}</ul>
    </div>
  );
}

export default CommentList;
