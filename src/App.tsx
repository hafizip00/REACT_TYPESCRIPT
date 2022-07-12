import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';
import { Greet } from './components/Greet';
import Input from './components/Input';
import Person from './components/Person';
import PersonList from './components/PersonList';

function App() {
  const [data , setData] = useState<string>('')
  const man = {
    name : "IP",
    age : 34
  }
  const myArray = [
    {
      name : "NAMEee",
      age : 36544
    },
    {
      name : "NAMEee",
      age : 36544
    },
    {
      name : "NAMEee",
      age : 34456
    },
    {
      name : "NAMEe",
      age : 36544
    }

  ]
  return (
    <div className="App">
      <Greet name='IPMAN' count={40}/>
      <Person p={man}/>
      <PersonList persons={myArray}>
        Hello man? How are io?
      </PersonList>
      <Button handler={(event , id) => {
        console.log("CLG" , event , id)
      }}/>
      <Input changeHandler={(event) => {
        console.log(event.target.value)
        setData(event.target.value)
      }} value={data}/>
      <h1>{data}</h1>
    </div>
  );
}

export default App;
