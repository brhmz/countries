import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import CountryDetails from './pages/CountryDetails';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage';



function App() {

  const [allCountries, setAllCountries] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    axios.get('https://restcountries.com/v2/all')
      .then(response => setAllCountries(response?.data))
      .catch(err => console.log(err))
  }, [])

  const backToAll = () => {
    axios.get('https://restcountries.com/v2/all')
      .then(response => setAllCountries(response?.data))
      .catch(err => console.log(err))
  }

  const selectRegion = (selection) => {
    axios.get(`https://restcountries.com/v2/region/${selection}`)
      .then(response => setAllCountries(response?.data))
      .then(navigate('/'))
      .catch(err => console.log(err))
  }

  const handleFilter = (e) => {
    axios.get(`https://restcountries.com/v2/all`)
      .then(response => setAllCountries(response?.data?.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()))))
      .catch(err => console.log(err))
  }


  return (
    <div>
      <Header
        selectRegion={selectRegion}
        allCountries={allCountries}
        handleFilter={handleFilter}
        backToAll={backToAll}
      />
      <Routes>
        <Route
          path='/' element={
            <HomePage allCountries={allCountries} handleFilter={handleFilter} />
          }
        />
        <Route
          path='/CountryDetails/:countryName'
          element={<CountryDetails allCountries={allCountries} />}
        />
      </Routes>
    </div>
  );
}

export default App;
