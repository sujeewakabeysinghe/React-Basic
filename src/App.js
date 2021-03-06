import React from 'react';
import './App.css';
import FunOne from './components/functionalComponent_1';
import FunTwo from './components/functionalComponent_2';
import Class from './components/classComponent';
import PropsOne from './components/props_1';
import PropsTwo from './components/props_2';
import PropsThree from './components/props_3';
import StateOne from './components/state_1';
import StateTwo from './components/state_2';
import EventOne from './components/event_1';
import EventTwo from './components/event_2';
import EventBindingOne from './components/eventBinding_1';
import EventBindingTwo from './components/eventBinding_2';
//import ParentComponent from './components/parentComponent';
import Condition from './components/conditionalRendering';
import ListOne from './components/listRendering_1';
import ListTwo from './components/listRendering_2';
import ListThree from './components/listRendering_3';
import Style from './components/style';
import StyleInline from './components/styleInline';
import Form from './components/nextTen/form';
import LifeCycleA from './components/nextTen/lifeCycleA';
import Fragment from './components/nextTen/fragment'
import ParentComponent from './components/nextTen/26/parentComponent';
import RefcComponent from './components/nextTen/28/refcComponent';

function App() {
  console.log("App Component")
  return (
    <div className="App">
      {/* <h1>App Component!</h1>
      <FunOne/>
      <FunTwo/>
      <Class/>
      <PropsOne name='One'/>
      <PropsTwo componentName='Props' name='Two'>
        <p>Props Two's Child!</p>
      </PropsTwo>
      <PropsThree name='Three!'/> {/*props values cannot be changed after defined here, They are immutable
      <StateOne/>
      <StateTwo/>
      <EventOne/>
      <EventTwo/>
      <EventBindingOne/>
      <EventBindingTwo/>
      <ParentComponent/>
      <Condition/>
      <ListOne/> 
      <ListTwo/> 
      <ListThree/>
      <Style/> {/*without props regular way
      <Style className={true}/>
      <StyleInline/>
      <Form/> 
      <LifeCycleA/> 
      <Fragment/>
      <ParentComponent/> */}
      <RefcComponent/>
    </div>
  );
}

export default App;