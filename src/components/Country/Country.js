import React from 'react';
import './country.css';
const Country = ({stats}) => {

    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }

    const images = importAll(require.context('../../flags', true, /\.png/));

    return(
        <div className='country'>
            {/* <img src={`https://www.countryflags.io/${stats.CountryCode}/flat/64.png`} alt={stats.Country}></img> */}
            {   (() =>  {
                            if (images[`${stats.Country_text}.png`]!==undefined){
                                return <img className="flagImage" src={images[`${stats.Country_text}.png`].default} />
                            }
                       }
                )()
            }

            <h2>{stats.Country_text}</h2>
            <div className='describe'>
                <div><p>{`Active`}</p> <p>{`${stats.active}`}</p></div> 
                <div><p>{`Confirmed`}</p> <p>{`${stats.confirmed}`}</p></div> 
               <div> <p>{`Deaths`}</p> <p>{`${stats.deaths}`}</p> </div>
                <div><p>{`Recovered`}</p> <p>{`${stats.recovered}`}</p> </div>
            </div>
        </div>
    )
}

export default Country;