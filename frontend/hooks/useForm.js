import { PropertyTypeSelected, PropertyIdContext, ContractSigningDate } from '../components/Context'
import { useContext } from 'react'
import Axios from 'axios'
import { useState } from 'react'

const useForm = (callback, state) => {
  const { propertyTypeSelected } = useContext(PropertyTypeSelected)
  const { propertyIdContext } = useContext(PropertyIdContext)
  const { formattedDate } = useContext(ContractSigningDate)

  console.log('---use form date---', formattedDate)
  const [formState, setState] = useState(state)

  console.log('---form state---', formState)





  const handleSubmit = (event) => {
    event.preventDefault()
    let newFormState = formState

    console.log('formatted date', formattedDate)
    console.log('object', Object.keys(formattedDate.priceForSale).length === 0)
    if (formattedDate.priceForSale.contractExpiringDate || formattedDate.priceForSale.contractSigningDate) {    
      console.log('sale')
      newFormState = {
        ...newFormState,
        priceForSale: { ...newFormState.priceForSale,
          contractExpiringDate: formattedDate.priceForSale.contractExpiringDate,
          contractSigningDate: formattedDate.priceForSale.contractSigningDate
        }
      }
    } else if (formattedDate.priceForRent.contractExpiringDate || formattedDate.priceForRent.contractSigningDate ) {
      console.log('rent')
      newFormState = {
        ...newFormState,
        priceForRent: { ...newFormState.priceForRent,
          contractExpiringDate: formattedDate.priceForRent.contractExpiringDate,
          contractSigningDate: formattedDate.priceForRent.contractSigningDate
        }
      }
    }

    const formData = new FormData()

    for (let i = 0; i < formState.files.length; i++) {
      formData.append('file', formState.files[i])
    }
    for (const [key, value] of Object.entries(newFormState)) {
      formData.append(key, JSON.stringify(value))
    }

    const url = `/api/property/${propertyTypeSelected}/${propertyIdContext}`
    Axios.put(url, formData, { headers: { 'Content-Type': 'multipart/form-data' } })
      .then(res => {
        console.log(res)
        callback()
      })
      .catch(err => console.log(err))
  }


  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    const objKey = event.target.getAttribute('datacontainer')

    console.log('handle change', name, value)
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
        const prevSelected = formState[objKey][name]
        const newArray = prevSelected.filter((i) => i !== value)
        setState(prevState => ({
          ...prevState,
          [objKey]: { ...prevState[objKey], [name]: newArray }
        }))
      }
    } else if (objKey) {
      console.log('characteristics 5')
      console.log('form state', formState)
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
    console.log('handle location', name, value)
    const objKey = event.target.getAttribute('datacontainer')

    console.log('changed newState', {
      ...state,
      [objKey]: { ...state[objKey], [name]: value }
    })

    setState(prevState => ({
      ...prevState,
      [objKey]: { ...prevState[objKey], [name]: value }
    }))


  }

  const handleImageChange = (event) => {
    event.preventDefault()
    const fileListAsArray = Array.from(event.target.files)
    const filesUrls = fileListAsArray.map(file => URL.createObjectURL(file))
    setState({ ...formState, images: filesUrls, files: event.target.files })
  }
  return {
    formState,
    handleSubmit,
    handleChange,
    handlelocationChange,
    handleImageChange
  }

}

export default useForm