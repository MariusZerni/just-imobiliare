import React, { useState } from 'react'
import useForm from '../hooks/useForm'


import Nav from './Nav'
import OfficeCharacteristics from './OfficeCharacteristics'
import PropertyLocationImages from './PropertyLocationImages'
import PropertyPrice from './PropertyPrice'

const Office = (props) => {

  const [location] = useState(props.location.state.location.address)
  const initialState = {
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
    technicalParameters: {
      servicesProvided: [],
      internetAndComunication: [],
      safetyAndSecurity: [],
      electricalSystem: [],
      ecoElements: [],
      arhitecture: [],
      officeAirConditioning: [],
      parking: [],
      view: []
    }
  }
  const [currentSelection, setCurrentSelection] = useState('Location')
  const { formState, handleSubmit, handleChange, handlelocationChange, handleImageChange } = useForm(submit, initialState)

  function submit() {
    console.log('submitted')
    return props.history.push('/home')
  }

  const handleLocation = () => {
    setCurrentSelection('Location')
  }

  const handleCharacteristics = () => {
    setCurrentSelection('Characteristics')
  }

  const handlePrice = () => {
    setCurrentSelection('Price')
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
      <div className="content">
        <button className="button"
          onClick={event => handleSubmit(event)}
          type="submit"
          form="form">Salveaza</button>
      </div>
    </div>
    {currentSelection === 'Characteristics' && <OfficeCharacteristics
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
  </div>
}


export default Office