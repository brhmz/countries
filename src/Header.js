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
    <div className='header-container'>
    <h1>COUNTRIES OF THE WORLD!</h1>
    <button onClick={()=>selectRegion('Asia')}>Asia</button>
    <button onClick={()=>selectRegion('Africa')}>Africa</button>
    <button onClick={()=>selectRegion('Europe')}>Europe</button>
    <button onClick={()=>selectRegion('Americas')}>Americas</button>
    <button onClick={()=>selectRegion('Oceania')}>Oceania</button>
    </div>
  )
}

export default Header