import React from 'react'

function CountryCard({country}) {
    


  return (
    <div className='country-card'>
        <div className='flag-container'>
            <img className='country-flag' src={country.flags.svg}/>
        </div>
            <h3>{country.name.common ? country.name.common : country.name}</h3>
            <p>Region: {country.region}</p>
            <p>Capital: {typeof country.capital === 'string' || country.capital === undefined ? country.capital : country.capital[0]}</p>
            {/* <p>Currency:{country.name.common ? Object.values(country.currencies)[0].name : country.currencies[0].name}</p> */}
            <p>Population: {country.population}</p>
                 
    </div>
  )
}

export default CountryCard