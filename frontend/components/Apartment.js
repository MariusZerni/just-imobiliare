import React, { useState, useEffect } from 'react'
import Axios from 'axios'

import Header from './Header'
import ApartmentCharacteristics from './ApartmentCharacteristics'
import ApartmentLocation from './ApartmentLocation'
import ApartmentPrice from './ApartmentPrice'
import ApartmentImages from './ApartmentImages'



const Apartment = (props) => {

  const [characteristics, setCharacteristics] = useState({
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

    console.log('state')
    console.log(characteristics)
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
    const { name, value, type, checked } = event.target
    const objKey = event.target.getAttribute('datacontainer')

    if (!objKey && type === 'checkbox') {
      console.log('not object')
      setCharacteristics(prevState => ({
        ...prevState,
        [name]: checked      
      })) 
    } else if (objKey === 'characteristics') {
      setCharacteristics(prevState => ({
        ...prevState,
        characteristics: type === 'checkbox' ?  { ...prevState.characteristics, [name]: checked } : { ...prevState.characteristics, [name]: value } 
      }))
    } else if (type === 'checkbox') {
      console.log('my check2')
      setCharacteristics(prevState => ({
        ...prevState,
        [objKey]: { ...prevState[objKey],[name]: [...prevState[objKey][name], value] }
        
      }))
    } else if (objKey) {
      setCharacteristics(prevState => ({
        ...prevState,
        [objKey]: { [name]: value }
      }))
    } else {
      setCharacteristics(prevState => ({
        ...prevState,
        [name]: value 
      }))
    }
  }




  const handleSubmit = (event) => {
    event.preventDefault()
    const { propertyType, propertyId } = props.history.location.state
    Axios.put(`/api/property/${propertyType}/${propertyId}`, characteristics)
      .then(res => console.log(res))
      .catch(error => console.log(error))
  }






  return <div className="property-container">
    <Header />
    <div className="fields-container">
      <div onClick={() => handleLocation()}
        className="content">
        <h4>Localizare / Imagini</h4>
      </div>
      <div onClick={() => handleCharacteristics()}
        className="content">
        <h4>Caracteristici</h4>
      </div>
      <div onClick={() => handlePrice()}
        className="content">
        <h4>Pret</h4>
      </div>
      {/* <div onClick={() => handleImages()}
        className="content">
        <h4>Imagini</h4>
      </div> */}
      <div className="content">
        <button type="submit" form="form"

        >Salveaza</button>
      </div>
    </div>
    {currentSelection === 'Characteristics' && <ApartmentCharacteristics
      handleSubmit={event => handleSubmit(event)}
      handleChange={event => handleChange(event)}
      characteristics={characteristics}
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