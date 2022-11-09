import React from 'react'
import CountryCard from '../components/CountryCard'

function HomePage({ handleFilter, allCountries }) {
  return (
    <div>
      <div className='input-container'>
        <input onChange={handleFilter} className='input-filter' placeholder='Enter a country name to filter'></input>
      </div>
    <div className='countries-container'>
      {
        allCountries.map((item, index) => {
          return <CountryCard
            country={item}
            key={index}
          />
        })
      }
    </div>
    </div>

  )
}

export default HomePage