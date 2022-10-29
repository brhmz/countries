import React, { useState } from 'react'
import axios from 'axios';

function Header({selectRegion}) {
    
    // const [selectedRegion, setSelectedRegion] = useState()

    // useEffect(() => {
    //     axios.get(`https://restcountries.com/v2/region/${selectedRegion}`)
    //     .then(response => setSelectedRegion(response.data))
    //     .catch(err=>console.log(err))
    //   }, [])


  return (
    <div>
        <div className='header-container'>
            <h1>COUNTRIES OF THE WORLD!</h1>
            <button className='nav-button' onClick={()=>selectRegion('Asia')}>Asia</button>
            <button className='nav-button' onClick={()=>selectRegion('Africa')}>Africa</button>
            <button className='nav-button' onClick={()=>selectRegion('Europe')}>Europe</button>
            <button className='nav-button' onClick={()=>selectRegion('Americas')}>Americas</button>
            <button className='nav-button' onClick={()=>selectRegion('Oceania')}>Oceania</button>
        </div>
        <div className='input-container'>
            <input className='input-filter' placeholder='Enter a country name to filter'></input>
        </div>
    </div>
  )
}

export default Header