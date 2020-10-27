import React from 'react';
import './App.css';
import FunOne from './components/functionalComponent_1';
import FunTwo from './components/functionalComponent_2';
import Class from './components/classComponent';
import PropsOne from './components/props_1';
import PropsTwo from './components/props_2';
import PropsThree from './components/props_3';

function App() {
  return (
    <div className="App">
      <h1>App Component!</h1>
      <FunOne/>
      <FunTwo/>
      <Class/>
      <PropsOne name='One'/>
      <PropsTwo componentName='Props' name='Two'>
        <p>Props Two's Child!</p>
      </PropsTwo>
      <PropsThree name='Three'/>
    </div>
  );
}

export default App;