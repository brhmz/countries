import React from 'react'
import { useNavigate } from 'react-router'


function CountryCard({ country }) {

  let navigate = useNavigate()

  return (
    <div className='country-card' onClick={() => navigate(`/countrydetails/${country.name}`)}>

      <div className='flag-container'>
        <img className='country-flag' src={country.flags.png} />
      </div>
      <h3>{country.name}</h3>
      <p>Region: {country.region}</p>
      <p>Capital: {typeof country.capital === 'string' || country.capital === undefined ? country.capital : country.capital[0]}</p>
      <p>Currency: {country.currencies ? country.currencies[0].name : ''} </p>
      <p>Population: {country.population}</p>

    </div>
  )
}

export default CountryCard