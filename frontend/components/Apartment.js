import React, { useState, useEffect } from 'react'
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

  

  useEffect(() => {
    // console.log('chracteristics', state)
  })

  const handleLocation = () => {
    setCurrentSelection('Location')
  }

  const handleCharacteristics = () => {
    setCurrentSelection('Characteristics')
  }

  const handlePrice = () => {
    setCurrentSelection('Price')
  }

  const handleImageChange = (event) => {
    event.preventDefault()    
    const fileListAsArray = Array.from(event.target.files)
    const filesUrls = fileListAsArray.map(file =>  URL.createObjectURL(file))
    // setState(filesUrls)
    setState({ ...state, images: filesUrls, files: event.target.files } )
  }

  const handleImageSubmit = (event) => {
    console.log(event)
    console.log('images')
    event.preventDefault()
    
    
    const formData = new FormData()
    for (let i = 0; i < state.files.length; i++) {
      formData.append('file', state.files[i])
    }

//     for (var value of formData.values()) {
//       console.log(value)
//    }

//    for (var key of formData.keys()) {
//     console.log(key)
//  }
   
    const { propertyType, propertyId } = props.history.location.state

    const url = `/api/property/${propertyType}/${propertyId}`
    Axios.put(url, formData, { headers: { 'Content-Type': 'multipart/form-data' } })
      .then(() => res => console.log(res))
      .catch(err => console.error(err))
  } 



  const handleChangeLocation = (event) => {
    const { value, name } = event.target
    const objKey = event.target.getAttribute('datacontainer')
    // console.log(name)
    setState(prevState => ({
      ...prevState,
      [objKey]: { ...prevState[objKey], [name]: [value] }
    }))
  }



  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    const objKey = event.target.getAttribute('datacontainer')

    if (!objKey && type === 'checkbox') {
      setState(prevState => ({
        ...prevState,
        [name]: checked      
      })) 
    } else if (objKey === 'characteristics') {
      setState(prevState => ({
        ...prevState,
        state: type === 'checkbox' ?  { ...prevState.state, [name]: checked } : { ...prevState.state, [name]: value } 
      }))
    } else if (type === 'checkbox') {
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




  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   const { propertyType, propertyId } = props.history.location.state
  //   Axios.put(`/api/property/${propertyType}/${propertyId}`, state)
  //     .then(res => console.log(res))
  //     .catch(error => console.log(error))
  // }








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
        <button type="submit" form="form_i"

        >Salveaza</button>
      </div>
    </div>
    {currentSelection === 'Characteristics' && <ApartmentCharacteristics
      // handleSubmit={event => handleSubmit(event)}
      handleChange={event => handleChange(event)}
      state={state}
    />} 
    {currentSelection === 'Location' && <ApartmentLocationImages
      handleImageSubmit={event => handleImageSubmit(event)}
      handleChangeLocation={event => handleChangeLocation(event)}
      handleImageChange={event => handleImageChange(event)}
      state={state}
    />}
    {currentSelection === 'Price' && <ApartmentPrice
      // handleSubmit={event => handleSubmit(event)}
      handleChange={event => handleChange(event)}
    />}

    
  </div>

}



export default Apartment