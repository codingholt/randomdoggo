import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react';



const fetchDoggo = async  () =>{
  const fetch = await axios.get('https://dog.ceo/api/breeds/image/random')
  console.log(fetch)
  return fetch
}

// const fetchBreeds = async  () =>{
//   const fetch = await axios.get('https://dog.ceo/api/breeds/list/all')
//   console.log(fetch)
//   return JSON.stringify(fetch.data.message)
// }

// 
function App() {
  const [doggo, setDoggo] = useState('')

  useEffect(() => {
    fetchDoggo().then((response) => setDoggo(response.data.message))
  
}, [])
  return (
    <div className="App">
      <h1>Random doggo</h1>
      <img src={doggo} alt="doggo"></img>
      <div className='button-wrapper'>
       <button className='button' onClick={()=>fetchDoggo().then((response) => setDoggo(response.data.message))}>New doggo</button>
       </div>
    </div>
  );
}

export default App;
