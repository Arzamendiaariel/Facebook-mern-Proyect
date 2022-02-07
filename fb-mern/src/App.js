import React, { Component } from 'react';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Header />
      <Sidebar />
      <Feed />
      {/* widgets */}
    </div>
  );
}

export default App;
