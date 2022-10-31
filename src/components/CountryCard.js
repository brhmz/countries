import React from 'react'


function CountryCard({country, routeUpOnSource}) {



  return (
    <div className='country-card' onClick={() => routeUpOnSource(country)}>
   
          <div className='flag-container'>
              <img className='country-flag' src={country.flags.png}/>
          </div>
              <h3>{country.name.common ? country.name.common : country.name}</h3>
              <p>Region: {country.region}</p>
              <p>Capital: {typeof country.capital === 'string' || country.capital === undefined ? country.capital : country.capital[0]}</p>
              <p>Currency:  </p>
              <p>Population: {country.population}</p>              

    </div>
  )
}

export default CountryCard