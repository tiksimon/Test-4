import React from 'react'
import { getAllCountries } from '../services'

const CountryList = ({ countries, show }) => {
    return(
        <>
       {show ? 
            countries.map(country => 
                <div key={country.name}>
                    <p>{country.name}</p>
                    <img
                        src={country.flag}
                        alt=""
                        style={{ width: '150px' }}>
                    </img>
                </div>
            )
        :
        countries.map(country => 
            <img
                src={country.flag}
                alt=""
                style={{ width: '150px' }}>
                key={country.name}
            </img>
            )

    }
    </>
    )
}
    
export default CountryList