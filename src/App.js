import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react';



const fetchDoggo = async  (breed) => {
  if(breed){
   const fetch = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`)
   return fetch
  }
  const fetch = await axios.get('https://dog.ceo/api/breeds/image/random')
  return fetch
}

const fetchBreeds = async  () =>{
  const fetch = await axios.get('https://dog.ceo/api/breeds/list/all')
  return fetch.data.message
}




function App() {
  const [doggo, setDoggo] = useState('')
  const [breeds, setBreeds] = useState([])
  const [selectedBreed,setSelectedBreed]= useState('')

  useEffect(() => {
    fetchDoggo().then((response) => setDoggo(response.data.message))
  
}, [])
  useEffect(() => {
  
     fetchBreeds().then((response) => setBreeds(response))

}, [])



const breedArr = []

const makeBreedsList = (breeds) =>{
  for (const [key,] of Object.entries(breeds)) {
    breedArr.push(key)

  }
  
}


  makeBreedsList(breeds)




  return (
    <div className="App">
      <div className='background'>
      <h1>Random doggo</h1>
      <div className='doggo'>
      <img src={doggo} alt="doggo"></img>
      </div>
      <div className='button-wrapper'>
       <button className='button' onClick={()=>fetchDoggo(selectedBreed).then((response) => setDoggo(response.data.message))}>New doggo</button>
       </div>
       <select  onChange={(e) => setSelectedBreed(e.target.value)}>
       <option> all </option>
       {breedArr.map((item,i) => <option key={i} value={item}>{item}</option>)}
       
     </select>
     </div>
    </div>
  );


}

export default App;
