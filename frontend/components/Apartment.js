import React, { useState } from 'react'
import Axios from 'axios'

import Header from './Header'
import ApartmentCharacteristics from './ApartmentCharacteristics'
import ApartmentLocationImages from './ApartmentLocationImages'
import ApartmentPrice from './ApartmentPrice'




const Apartment = (props) => {

  const [state, setState] = useState({
    files: '',
    address: {
      county: '',
      town: '',
      street: '',
      streetNumber: null
    },
    images: '',
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
    priceForRenting: {}

  })

  const [currentSelection, setCurrentSelection] = useState('Location')
  const [location] = useState(props.history.location.state.location.address)




  const handleLocation = () => {
    setCurrentSelection('Location')
  }

  const handleCharacteristics = () => {
    setCurrentSelection('Characteristics')
  }

  const handlePrice = () => {
    setCurrentSelection('Price')
  }

  const handleSubmit = (event) => {

    event.preventDefault()

    const formData = new FormData()
    for (let i = 0; i < state.files.length; i++) {
      formData.append('file', state.files[i])
    }
    for (const [key, value] of Object.entries(state)) {
      formData.append(key, JSON.stringify(value))
    }
 
    // formData.forEach((value,key) => {
    //   console.log('for each')
    // })

    const { propertyType, propertyId } = props.history.location.state

    const url = `/api/property/${propertyType}/${propertyId}`
    Axios.put(url, formData, { headers: { 'Content-Type': 'multipart/form-data' } })
      .then(res => console.log(res))
      .catch(err => console.error(err))
  }


  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    const objKey = event.target.getAttribute('datacontainer')

    if (!objKey && type === 'checkbox') {
      console.log('characteristics 1')
      setState(prevState => ({
        ...prevState,
        [name]: checked
      }))
    } else if (type === 'checkbox') {
      console.log('characteristics 2')
      setState(prevState => ({
        ...prevState,
        [objKey]: { ...prevState[objKey], [name]: checked }
      }))
    } else if (objKey === 'characteristics') {
      console.log('characteristics 3')
      setState(prevState => ({
        ...prevState,
        [objKey]: type === 'checkbox' ? { ...prevState[objKey], [name]: checked } : { ...prevState[objKey], [name]: value }
      }))
    } else if (type === 'checkbox') {
      console.log('characteristics 4')
      setState(prevState => ({
        ...prevState,
        [objKey]: { ...prevState[objKey], [name]: [...prevState[objKey][name], value] }

      }))
    } else if (objKey) {
      console.log('characteristics 5')

      setState(prevState => ({
        ...prevState,
        [objKey]: { ...prevState[objKey], [name]: value }
      }))
    } else {
      console.log('characteristics 6')
      setState(prevState => ({
        ...prevState,
        [name]: value
      }))
    }
  }

  const handlelocationChange = (event) => {
    const { value, name } = event.target
    const objKey = event.target.getAttribute('datacontainer')
    setState(prevState => ({
      ...prevState,
      [objKey]: { ...prevState[objKey], [name]: [value] }
    }))
  }

  const handleImageChange = (event) => {
    event.preventDefault()
    const fileListAsArray = Array.from(event.target.files)
    const filesUrls = fileListAsArray.map(file => URL.createObjectURL(file))
    setState({ ...state, images: filesUrls, files: event.target.files })
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
      <div className="content">
        <button
          onClick={event => handleSubmit(event)}
          type="submit"
          form="form">Salveaza</button>
      </div>
    </div>
    {currentSelection === 'Characteristics' && <ApartmentCharacteristics
      handleChange={event => handleChange(event)}
      state={state}
    />}
    {currentSelection === 'Location' && <ApartmentLocationImages
      handlelocationChange={event => handlelocationChange(event)}
      handleImageChange={event => handleImageChange(event)}
      state={state}
      location={location}
    />}
    {currentSelection === 'Price' && <ApartmentPrice
      handleChange={event => handleChange(event)}
      state={state}
    />}
  </div>
}



export default Apartment