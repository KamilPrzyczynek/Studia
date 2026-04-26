import './App.css';
import { Route, Outlet } from 'react-router-dom';

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Posts from './components/posts';
import Navbar from './components/KPnavbar';

function App() {

  return (
    <div className="container-fluid">
      <Navbar />
      <div className="container">
        <Posts />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
