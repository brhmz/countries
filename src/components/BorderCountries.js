import React from 'react';
import BorderCountriesCard from './BorderCountriesCard';

function BorderCountries({ selectedCountry, allCountries }) {

  const borderCountriesCodes = selectedCountry?.map(item => item?.borders ? item?.borders : '');
  const borderCountries = allCountries?.filter(item => borderCountriesCodes[0]?.indexOf(item?.alpha3Code) !== -1)

  return (
    <div>
      <h3>Border Countries</h3>
      <div className='border-countries-container'>
        {
          borderCountries?.map((item, index) => {
            return <BorderCountriesCard
              borderCountry={item}
              key={index}
            />
          })
        }
      </div>

    </div>
  )
}

export default BorderCountries