import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import Character from './components/Character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [names, setNames] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
      .then(res => setNames(res.data))
      .catch(err => alert(err));
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
        names.map((e, idx) => {
          return <Character name = { e.name } key = { idx } />
        })
      }
    </div>
  );
}

export default App;
