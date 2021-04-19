import React from 'react';
import './country.css';
const Country = ({stats}) => {
    return(
        <div className='country'>
            <img src={`https://www.countryflags.io/${stats.CountryCode}/flat/64.png`} alt={stats.Country}></img>
            <h2>{stats.Country}</h2>
            <div className='describe'>
                <div><p>{`Active`}</p> <p>{`${stats.Active}`}</p></div> 
                <div><p>{`Confirmed`}</p> <p>{`${stats.Confirmed}`}</p></div> 
               <div> <p>{`Deaths`}</p> <p>{`${stats.Deaths}`}</p> </div>
                <div><p>{`Recovered`}</p> <p>{`${stats.Recovered}`}</p> </div>
            </div>
        </div>
    )
}

export default Country;