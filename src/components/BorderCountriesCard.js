import React from 'react'

function BorderCountriesCard({borderCountry}) {

    console.log({borderCountry})

    return (
        <div className='borders-card-container'>
            <div>
                <div className='borders-flag-container' >
                    <img src={borderCountry.flags.png} alt='Border Countries'/>
                </div>
                <p>{borderCountry.name}</p>
            </div>
        </div>
    )
}

export default BorderCountriesCard