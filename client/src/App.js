import React from 'react';
import './App.css';
import PostCreate from './PostCreate';
import PostList from './PostList';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>Create Post</h1>
        <PostCreate />
      </div>
      <hr className="light-color" />
      <h1>Posts List</h1>
      <PostList />
    </div>
  );
}

export default App;
