import React, { useState, useEffect } from 'react'
import Axios from 'axios'


import Header from './Header'
import HouseCharacteristics from './HouseCharacteristics'
import PropertyLocationImages from './PropertyLocationImages'
import PropertyPrice from './PropertyPrice'

const House = (props) => {

  const [state, setState] = useState({
    priceForSale: {},
    priceForRenting: {},
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
  })
  const [currentSelection, setCurrentSelection] = useState('Location')
  const [location] = useState(props.history.location.state.location.address)
  const [user, setUser] = useState()



  useEffect(() => {

    console.log('use efefct house', state)
    if (!props.location.state || !props.location.state.user) {
      return
    } else if (!user && props.location.state.user) {
      console.log('user')
      setUser(props.history.location.state.user)
    } 
    // console.log('features', state.facilities.features)
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
    console.log('propertyType', propertyType)
    console.log('propertyId', propertyId)
    const url = `/api/property/${propertyType}/${propertyId}`
    Axios.put(url, formData, { headers: { 'Content-Type': 'multipart/form-data' } })
      .then(res => {
        console.log(res)
        props.history.push('/home')
      })
      .catch(err => console.error(err))
  }


  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    const objKey = event.target.getAttribute('datacontainer')

    if (!objKey && type === 'checkbox') {
      //statement for apartmentCharacteristics objKey = 'bathroomWindow' 
      console.log('characteristics 1')
      setState(prevState => ({
        ...prevState,
        [name]: checked
      }))

    } else if (objKey === 'characteristics') {
      console.log('characteristics 3')
      //statement from apartmentCharacteristics objKey(characteristics) = objKey[name]
      setState(prevState => ({
        ...prevState,
        [objKey]: type === 'checkbox' ? { ...prevState[objKey], [name]: checked } : { ...prevState[objKey], [name]: value }
      }))
    } else if ((objKey === 'priceForSale' || objKey === 'priceForRent') && type === 'checkbox') {
      //statement for checkboxes from propertyPrice 
      console.log('characteristics 2')
      setState(prevState => ({
        ...prevState,
        [objKey]: { ...prevState[objKey], [name]: checked }
      }))
    } else if (type === 'checkbox') {
      //statement from apartmentCharacteristics(checkboxes) objKey = 'characteristics'
      console.log('characteristics 4')    
      if (checked) {
        setState(prevState => ({
          ...prevState,
          [objKey]: { ...prevState[objKey], [name]: [...prevState[objKey][name], value] }

        }))
      } else {
        const prevSelected = state[objKey][name]      
        const newArray = prevSelected.filter((i) => i !== value)
        setState(prevState => ({
          ...prevState,
          [objKey]: { ...prevState[objKey], [name]: newArray }
        }))
      }
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
      [objKey]: { ...prevState[objKey], [name]: value }
    }))
  }

  const handleImageChange = (event) => {
    event.preventDefault()
    const fileListAsArray = Array.from(event.target.files)
    const filesUrls = fileListAsArray.map(file => URL.createObjectURL(file))
    setState({ ...state, images: filesUrls, files: event.target.files })
  }


  return <div className="property-container">
    <Header user={user} />
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
        <button className="button"
          onClick={event => handleSubmit(event)}
          type="submit"
          form="form">Salveaza</button>
      </div>
    </div>
    {currentSelection === 'Characteristics' && <HouseCharacteristics
      // isChecked={(selectedOptions, currentOption) => isChecked(selectedOptions, currentOption)}
      handleChange={event => handleChange(event)}
      state={state}
    />}
    {currentSelection === 'Location' && <PropertyLocationImages
      handlelocationChange={event => handlelocationChange(event)}
      handleImageChange={event => handleImageChange(event)}
      state={state}
      location={location}
    />}
    {currentSelection === 'Price' && <PropertyPrice
      // checkboxHandler={event => checkboxHandler(event)}
      handleChange={event => handleChange(event)}
      state={state}
    />}
  </div>
}


export default House