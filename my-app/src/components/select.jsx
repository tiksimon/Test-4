import React from 'react'
import { useState,useEffect } from 'react'
import { getAllCountries } from 'my-app/src/services.js'

const Select =() => {

    const [value, setValue]=useState('')

    useEffect(() => {
        value !== ''?
        getByRegion(value).then(res =>{
        setCountries(res.data)
        })
    :
        getAllCountries(value).then(res =>{
        setCountries(res.data)
        })
    })
    return (
  
        <select>
            <option>Chose region</option>
            <option value='africa'>Africa</option>
            <option value='america'>America</option>
            <option value='asia'>Asia</option>
            <option value='europe'>Europe</option>
            <option value='oceania'>Oceania</option>
        </select>
       
    )
}

export default Select