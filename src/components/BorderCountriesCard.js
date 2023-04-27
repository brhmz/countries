import React from 'react'
import { useNavigate } from 'react-router'

function BorderCountriesCard({borderCountry}) {

    let navigate = useNavigate()

    return (
        <div className='borders-card-container' onClick={() => navigate(`/countrydetails/${borderCountry?.name}`)}>
            <div>
                <div className='borders-flag-container' >
                    <img src={borderCountry?.flags?.png} alt='Border Countries'/>
                </div>
                <p>{borderCountry?.name}</p>
            </div>
        </div>
    )
}

export default BorderCountriesCard