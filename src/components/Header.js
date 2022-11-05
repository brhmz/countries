import React from 'react'
import { useNavigate } from "react-router-dom";


function Header({selectRegion, handleFilter, backToAll}) {
  let navigate = useNavigate();
 
  return (
    <div>
          <div className='header-container'>
              <h1 className='title' onClick={()=>{navigate("/"); backToAll()}}>COUNTRIES OF THE WORLD!</h1>
              <button className='nav-button' onClick={()=>selectRegion('asia')}>Asia</button>
              <button className='nav-button' onClick={()=>selectRegion('africa')}>Africa</button>
              <button className='nav-button' onClick={()=>selectRegion('europe')}>Europe</button>
              <button className='nav-button' onClick={()=>selectRegion('americas')}>Americas</button>
              <button className='nav-button' onClick={()=>selectRegion('oceania')}>Oceania</button>
          </div>
          <div className='input-container'>
              <input onChange={handleFilter} className='input-filter' placeholder='Enter a country name to filter'></input>
          </div>
    </div>
  )
}

export default Header