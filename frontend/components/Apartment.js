import React, { useState, useEffect } from 'react'
import Axios from 'axios'

import Header from './Header'
import ApartmentCharacteristics from './ApartmentCharacteristics'
import ApartmentLocation from './ApartmentLocation'
import ApartmentPrice from './ApartmentPrice'
import ApartmentImages from './ApartmentImages'



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

  const [currentSelection, setCurrentSelection] = useState('Location')



  useEffect(() => {


    console.log(currentSelection)
  })

  const handleLocation = () => {
    setCurrentSelection('Location')
  }

  const handleCharacteristics = () => {
    console.log('characteristics')
    setCurrentSelection('Characteristics')
  }

  const handlePrice = () => {
    setCurrentSelection('Price')
  }

  const handleImages = () => {
    setCurrentSelection('Images')
  }



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
    const { propertyType, propertyId } = props.history.location.state
    Axios.put(`/api/property/${propertyType}/${propertyId}`, state)
      .then(res => console.log(res))
      .catch(error => console.log(error))
  }






  return <div className="property-container">
    <Header />
    <div className="fields-container">
      <div onClick={() => handleLocation()}
        className="content">
        <h4>Localizare</h4>
      </div>
      <div onClick={() => handleCharacteristics()}
        className="content">
        <h4>Caracteristici</h4>
      </div>
      <div onClick={() => handlePrice()}
        className="content">
        <h4>Pret</h4>
      </div>
      <div onClick={() => handleImages()}
        className="content">
        <h4>Imagini</h4>
      </div>
      <div className="content">
        <button type="submit" form="form"

        >Adauga</button>
      </div>
    </div>
    {currentSelection === 'Characteristics' && <ApartmentCharacteristics
      handleSubmit={event => handleSubmit(event)}
      handleChange={event => handleChange(event)}
    />} 
    {currentSelection === 'Location' && <ApartmentLocation
      handleSubmit={event => handleSubmit(event)}
      handleChange={event => handleChange(event)}
    />}
    {currentSelection === 'Price' && <ApartmentPrice
      handleSubmit={event => handleSubmit(event)}
      handleChange={event => handleChange(event)}
    />}
    {currentSelection === 'Images' && <ApartmentImages
      handleSubmit={event => handleSubmit(event)}
      handleChange={event => handleChange(event)}
    />}
    
  </div>

}



export default Apartment