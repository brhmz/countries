import React from 'react';
import { useParams } from 'react';


function BorderCountries({selectedCountry, allCountries}) {

const borderCountriesCodes = selectedCountry.map(item => item.borders ? item.borders : '');
const allCodes = allCountries.filter(item => item.alpha3Code)
const borderCountries = allCountries.filter(item => borderCountriesCodes[0].indexOf(item.alpha3Code) !== -1)

// const country = {}

// const newBorders = borderCountries.map((item) => country={item})

// [...new Set(allCountries.filter(item => borderCountriesCodes.includes(item.alpha3Code)))]
// allCountries.filter(item => borderCountriesCodes.indexOf(item) != -1)
  
console.log(borderCountries)
// console.log(newBorders)
// console.log(borderCountriesCodes[0])
  return (
    <div>
        {/* <img src={newBorders[0].props.country.flag}/> */}
        <p></p>
    </div>
  )
}

export default BorderCountries