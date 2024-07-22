import logo from './logo.svg';
import './App.css';
import { useState , useEffect } from 'react';

const Person = (props) =>{
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Last name: {props.lastName}</h2>
      <h2>Age: {props.age}</h2>
    </>
  )
}

function App() {
  const [counter , setCounter] = useState(0);
  useEffect(() =>{
    alert('Test');
  },[counter]);


  const name = 'Adrian';
  const isNameShowing = false;
  return (
    <div className="App">
      <button onClick={ ()=> setCounter(counter-1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={ ()=> setCounter(counter+1)}>+</button>
    </div>
  );
}

export default App;
