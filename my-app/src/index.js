import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { getAllCountries } from './services'
import CountryList from './components/countryList'
import Select from './components/select'


const App = () => {
  
  const [countries, setCountries] = useState([])
  const [show, setShow] = useState (false)

  useEffect(()=> {
    getAllCountries().then(res => {
      setCountries(res.data)
    })
  }, [])

  return (
    <>
    <Select setCountries={setCountries} setShow={setShow}/>
    <CountryList countries={countries} show={show}/>
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



// 1. Приликом учитавања, приказују се заставе свих држава (img) (само заставе)
// 2. Постоји селект где можемо бирати државе на основу региона (континента)
// Напомена: Уместо селекта можете користити дугмиће
// На одабир државе, на страници остају само државе изабраног региона и приказују се
// додатне информације
// Име, застава, популација