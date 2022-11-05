import React from 'react';
import { useParams } from 'react';


function BorderCountries({selectedCountry, allCountries}) {

const borderCountriesCodes = selectedCountry.map(item => item.borders);
const allCodes = allCountries.map(item => item.alpha3Code)

const borderCountries = allCountries.map(item => item.alpha3Code === borderCountriesCodes)


  
console.log(borderCountries)
console.log(allCodes)
console.log(borderCountriesCodes[0])
  return (
    <div>
        {/* <img src={selectedCountry[0].flag}/> */}
        <p></p>
    </div>
  )
}

export default BorderCountries