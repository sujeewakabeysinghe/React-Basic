import React from 'react';
import './App.css';
import FunOne from './components/functionalComponent_1';
import FunTwo from './components/functionalComponent_2';
import Class from './components/classComponent';

function App() {
  return (
    <div className="App">
      <h1>App Component!</h1>
      <FunOne/>
      <FunTwo/>
      <Class/>
    </div>
  );
}

export default App;