import React from 'react';
import Country from '../Country/Country';
import './countrylist.css';
const CountryList = ({stats}) =>{
    return(
        <div className='countrylist'>
            {
             stats.map(country =><Country key={country.Country_text} stats={country}/>)
            }
        </div>
    )
}
export default CountryList;