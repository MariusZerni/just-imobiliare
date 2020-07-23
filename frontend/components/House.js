// import React, { useState, useEffect } from 'react'
// import Axios from 'axios'


// import Header from './Header'

// const House = (props) => {

//   const [state, setState] = useState()
//   const [currentSelection, setCurrentSelection] = useState('Location')
//   const [user, setUser] = useState()

  

//   useEffect(() => {
//     if (!props.location.state || !props.location.state.user) {
//       return
//     } else if (!user && props.location.state.user) {
//       console.log('user')
//       setUser(props.history.location.state.user)
//     } 
    
//   })


//   const handleLocation = () => {
//     setCurrentSelection('Location')
//   }

//   const handleCharacteristics = () => {
//     setCurrentSelection('Characteristics')
//   }

//   const handlePrice = () => {
//     setCurrentSelection('Price')
//   }

//   const handleSubmit = (event) => {

//     event.preventDefault()

//     const formData = new FormData()
//     for (let i = 0; i < state.files.length; i++) {
//       formData.append('file', state.files[i])
//     }
//     for (const [key, value] of Object.entries(state)) {
//       formData.append(key, JSON.stringify(value))
//     }
 
//     // formData.forEach((value,key) => {
//     //   console.log('for each')
//     // })

//     const { propertyType, propertyId } = props.history.location.state

//     const url = `/api/property/${propertyType}/${propertyId}`
//     Axios.put(url, formData, { headers: { 'Content-Type': 'multipart/form-data' } })
//       .then(res => {
//         console.log(res)
//         props.history.push('/home')
//       })
//       .catch(err => console.error(err))
//   }


//   return <div className="property-container">
//     <Header user={user} />
//     <div className="fields-container">
//       <div onClick={() => handleLocation()}
//         className="content">
//         <h4>Localizare / Imagini</h4>
//       </div>
//       <div onClick={() => handleCharacteristics()}
//         className="content">
//         <h4>Caracteristici</h4>
//       </div>
//       <div onClick={() => handlePrice()}
//         className="content">
//         <h4>Pret</h4>
//       </div>
//       <div className="content">
//         <button className="button"
//           onClick={event => handleSubmit(event)}
//           type="submit"
//           form="form">Salveaza</button>
//       </div>
//     </div>
//     {/* {currentSelection === 'Characteristics' && <ApartmentCharacteristics
//       // isChecked={(selectedOptions, currentOption) => isChecked(selectedOptions, currentOption)}
//       handleChange={event => handleChange(event)}
//       state={state}
//     />}
//     {currentSelection === 'Location' && <ApartmentLocationImages
//       handlelocationChange={event => handlelocationChange(event)}
//       handleImageChange={event => handleImageChange(event)}
//       state={state}
//       location={location}
//     />}
//     {currentSelection === 'Price' && <ApartmentPrice
//       // checkboxHandler={event => checkboxHandler(event)}
//       handleChange={event => handleChange(event)}
//       state={state}
//     />} */}
//   </div>
// }


// export default House