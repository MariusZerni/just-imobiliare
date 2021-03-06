import React, { useState } from 'react'
import useForm from '../hooks/useForm'


import Nav from './Nav'
import HouseCharacteristics from './HouseCharacteristics'
import PropertyLocationImages from './PropertyLocationImages'
import PropertyPrice from './PropertyPrice'
import LanlordDetails from './LanlordDetails'

const House = (props) => {

  const [location] = useState(props.location.state.location.address)
  const state = {
    priceForSale: {},
    priceForRenting: {},
    address: {
      county: location ? location.county : '',
      town: location ? location.town : '',
      street: location ? location.street : '',
      streetNumber: location ? location.streetNumber : null
    },
    images: '',
    files: '',
    useFor: '',
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
    }
  }
  const [currentSelection, setCurrentSelection] = useState('Location')
  const { formState, handleSubmit, handleChange, handlelocationChange, handleImageChange } = useForm(submit, state)


  function submit() {
    console.log('submitted')
    return props.history.push('/home')
  }






  return <div className="property-container">
    <Nav />
    <div className="fields-container">
      <div className="content">
        <button onClick={props.history.goBack} className="back-btn">
          <i className="fas fa-arrow-left"></i>
          Inapoi
        </button>
      </div>
      <div onClick={() => setCurrentSelection('Location')}
        className="content">
        <h4 className={currentSelection === 'Location' ? 'underline' : ''} >Localizare / Imagini</h4>
      </div>
      <div onClick={() => setCurrentSelection('Characteristics')}
        className="content">
        <h4 className={currentSelection === 'Characteristics' ? 'underline' : ''} >Caracteristici</h4>
      </div>
      <div onClick={() => setCurrentSelection('Price')}
        className="content">
        <h4 className={currentSelection === 'Price' ? 'underline' : ''} >Pret</h4>
      </div>
      <div onClick={() => setCurrentSelection('LanlordDetails')}
        className="content">
        <h4 className={currentSelection === 'LanlordDetails' ? 'underline' : ''} >Detalii Proprietar</h4>
      </div>
      <div className="content">
        <button className="button"
          onClick={event => handleSubmit(event)}
          type="submit"
          form="form">Salveaza</button>
      </div>
    </div>
    {currentSelection === 'Characteristics' && <HouseCharacteristics
      handleChange={event => handleChange(event)}
      formState={formState}
    />}
    {currentSelection === 'Location' && <PropertyLocationImages
      handlelocationChange={event => handlelocationChange(event)}
      handleImageChange={event => handleImageChange(event)}
      formState={formState}
    />}
    {currentSelection === 'Price' && <PropertyPrice
      handleChange={event => handleChange(event)}
      formState={formState}
    />}
    {currentSelection === 'LanlordDetails' && <LanlordDetails
      handleChange={event => handleChange(event)}
      formState={formState}
    />}
  </div>
}


export default House