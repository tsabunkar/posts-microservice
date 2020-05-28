import React from 'react';
import logo from './logo.svg';
import './App.css';
import PostCreate from './PostCreate';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Create Post</h1>
        <PostCreate />
      </header>
    </div>
  );
}

export default App;
