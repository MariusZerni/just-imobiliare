import React, { useState, useEffect } from 'react'

import Header from './Header'
import ApartmentConfig from './ApartmentConfig'
import Axios from 'axios'


const Apartment = (props) => {

  const [state, setState] = useState({
   
    characteristics: {},
    facilities: {
      features: [],
      doorEntry: [],
      interiorDoors: [],
      walls: [],
      floorType: [],
      furnished: [],
      streetFacilities: [],
      kitchenType: [],
      otherSpaces: [],
      parking: [],
      windows: [],
      generalUtilities: [],
      heatingSystem: [],
      insulation: [],
      meters: [],
      view: [],
      realEstateFacilities: [] 
    },
    priceForSale: {},
    priceForRenting: {},
    images: {},
    // user: {},
    address: {}
  })


  useEffect(() => {
    console.log(state)
  })


  const handleChange = (event) => {
    console.log(event.target)
    const { name, value, type, checked } = event.target
    const objKey = event.target.getAttribute('datacontainer')

    if (!objKey && type === 'checkbox') {
      console.log('not object')
      setState(prevState => ({
        ...prevState,
        [name]: checked      
      })) 
    } else if (objKey === 'characteristics') {
      setState(prevState => ({
        ...prevState,
        characteristics: type === 'checkbox' ?  { ...prevState.characteristics, [name]: checked } : { ...prevState.characteristics, [name]: value } 
      }))
    } else if (type === 'checkbox') {
      console.log('my check2')
      setState(prevState => ({
        ...prevState,
        [objKey]: { ...prevState[objKey],[name]: [...prevState[objKey][name], value] }
        
      }))
    } else if (objKey) {
      setState(prevState => ({
        ...prevState,
        [objKey]: { [name]: value }
      }))
    } else {
      setState(prevState => ({
        ...prevState,
        [name]: value 
      }))
    }
  }




  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('event')
    console.log(event.type)
    const { propertyType, propertyId } = props.history.location.state

    console.log(state)

    Axios.put(`/api/property/${propertyType}/${propertyId}`, state)
      .then(res => console.log(res))
      .catch(error => console.log(error))
  }



  return <div className="property-container">
    <Header />
    <div className="fields-container">
      <div className="content">
        <h4>Localizare</h4>
      </div>
      <div className="content">
        <h4>Caracteristici</h4>
      </div>
      <div className="content">
        <h4>Pret</h4>
      </div>
      <div className="content">
        <h4>Imagini</h4>
      </div>
      <div className="content">
        <button type="submit" form="form"

        >Adauga</button>
      </div>
    </div>
    <ApartmentConfig
      handleSubmit={event => handleSubmit(event)}
      handleChange={event => handleChange(event)}
    />
  </div>

}



export default Apartment