import React, { useState, useEffect } from 'react'
// import { useBetween } from 'use-between'
// import Axios from 'axios'

import Header from './Header'
import ApartmentConfig from './ApartmentConfig'
import Axios from 'axios'
// import Home from './Home'


const Apartment = (props) => {

  const [state, setState] = useState({
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
    realEstateFacilities: [],
    characteristics: {},
    facilities: {},
    priceForSale: {},
    priceForRenting: {},
    images: {},
    // user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
    address: {}
  })
  // const { propertyTypeId,setPropertyTypeId} = useBetween(Home)

  //console.log(state)
  // console.log('propertyId')
  // console.log(props)
  useEffect(() => {
    console.log(state)
  })


  const handleChange = (event) => {
    console.log(event.target)
    const { name, value, type } = event.target
    const objKey = event.target.getAttribute('datacontainer')

    console.log('type' + type)
    console.log(event.target.getAttribute('datacontainer'))


    if (type === 'checkbox') {
      console.log('my check')
      setState(prevState => ({
        ...prevState,
        [name]: [...prevState[name], value] 
        
      }))
    } else {
      // console.log(objKey)
      setState(prevState => ({
        ...prevState,
        [objKey]: { [name]: value }
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