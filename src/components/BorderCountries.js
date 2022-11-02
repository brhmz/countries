import React from 'react';
import { useParams } from 'react';


function BorderCountries({allCountries}) {

    const {countryName} = useParams()
    let selectedCountry = allCountries.filter((item) => item.name === countryName)

  return (
    <div>
        <img src={selectedCountry[0].flag.svg}/>
        <p></p>
    </div>
  )
}

export default BorderCountries