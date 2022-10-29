import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'; 
import Header from './Header';
import HomePage from './HomePage';
import CountryDetails from './CountryDetails';
import axios from 'axios';
import CountryCard from './CountryCard';


function App() {

  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v2/all?fields=name,capital,region,borders,currencies,population,subregion,flags')
    .then(response => setAllCountries(response.data))
    .catch(err=>console.log(err))
  }, [])

  const selectRegion = (selection) => {
    axios.get(`https://restcountries.com/v3.1/region/${selection}?fields=name,capital,region,borders,currencies,population,subregion,flags`)
    .then(response => setAllCountries(response.data))
    .catch(err => console.log(err))
    } 

  


  return (
    <BrowserRouter>
        <Header selectRegion={selectRegion} allCountries={allCountries}/>
      <Routes>
        <Route path='/' element={
        <div className='countries-container'>
              {
                allCountries.map((item, index) => {
                return <CountryCard country={item} key={index}/>
              })
              }
        </div>
        }/>
        <Route path='/CountryCard' element={<CountryCard allCountries={allCountries}/>}/>


      </Routes>       
    </BrowserRouter>
  );
}

export default App;
