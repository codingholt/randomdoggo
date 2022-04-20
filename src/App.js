import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react';



const fetchDoggo = async () =>{
  const req = await axios.get('https://dog.ceo/api/breeds/image/random')

  return req.data.message
}

function App() {

  return (
    <div className="App">
      <h1>Random doggo</h1>
    {}
    </div>
  );
}

export default App;
