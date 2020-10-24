import React from 'react';
import './App.css';
import FunOne from './components/functionalComponent_1';
import FunTwo from './components/functionalComponent_2';

function App() {
  return (
    <div className="App">
      <h1>App Component!</h1>
      <FunOne/>
      <FunTwo/>
    </div>
  );
}

export default App;