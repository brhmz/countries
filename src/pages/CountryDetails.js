import React from 'react'
import { useParams } from 'react-router'
import { useNavigate } from "react-router-dom";
import BorderCountries from '../components/BorderCountries';

function CountryDetails({allCountries}) {
  
let navigate = useNavigate();  
const {countryName} = useParams()
const selectedCountry = allCountries.filter((item) => item.name === countryName)

// console.log(selectedCountry[0].borders)

  return (
    <div className='details-page-container'> 
      <div><button className='back-button' onClick={()=>navigate('../')}>Back to Home</button></div>
          <div className='selected-country-details'>
                <img className='details-page-flag' src={selectedCountry[0].flag} alt='Country Flag'/>
                <div className='country-details-info-container'>
                    <h2 className='details-page-title'>{selectedCountry[0].name}</h2>
                    <p>Region: {selectedCountry[0].region}</p>
                    <p>Subregion: {selectedCountry[0].subregion}</p>
                    <p>Capital: {selectedCountry[0].capital}</p>
                    <p>Currency: {selectedCountry[0].currencies[0].name}</p>
                    <p>Population: {selectedCountry[0].population}</p>
                  </div>
          </div>
        
          <div>
            <BorderCountries
              selectedCountry = {selectedCountry}
              allCountries = {allCountries}
            />   
          </div>
     

    </div>
  )
}

export default CountryDetails