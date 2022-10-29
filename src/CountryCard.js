import React from 'react'

function CountryCard({country}) {
    



  return (
    <div className='country-card'>
        <div className='flag-container'>
            <img className='country-flag' src={country.flags.svg}/>
        </div>
            <h3>{country.name}</h3>
            <p>Region: {country.region}</p>
            <p>Capital: {country.capital}</p>
            {/* <p>Currency: {country.currencies.code}</p> */}
            <p>Population: {country.population}</p>
                 
    </div>
  )
}

export default CountryCard