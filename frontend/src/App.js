import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useRoutes } from "react-router-dom";
import routes from './route/index'

function App() {
  const routing = useRoutes(routes);
  return (
    <div >
      {routing}
    </div>
  );
}

export default App;
