import React, { useState } from 'react';
import axios from 'axios';

export default () => {
  // life-cycle hook useState
  const [title, setTitle] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();

    // making POST request to post service
    await axios.post('http://localhost:4000/posts', {
      title,
    });

    // clearning the input field, when submit is clicked
    setTitle('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};
