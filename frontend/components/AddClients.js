import React, { useState } from 'react'
import Axios from 'axios'
import auth from '../lib/auth'



import Nav from './Nav'

const Clients = (props) => {
  const [client, setClient] = useState()

  console.log('client', client)

  const handleSubmit = event => {
    event.preventDefault()
    console.log('submit client', client)
    Axios.post('/api/add-clients', client,
      { headers: { Authorization: `Bearer ${auth.getToken()}` } }) 
      .then(res => {
        props.history.push('/home')
        console.log('res', res)
      })
      .catch(error => console.log(error))
    
  }

  const handleChange = () => {
    const { name, value } = event.target
    // const objKey = event.target.getAttribute('datacontainer')
    setClient(prevState => ({
      ...prevState,
      [name]: value 
    }))

  }

  return <div className="clients-container">
    <Nav />
    <div className="lanlord-container">
      <form onChange={event => handleChange(event)} >
        <h3>Adauga client</h3>
        <div className="form-group col-md-6">
          <label >Nume</label>
          <input datacontainer="clients"
            // defaultValue={formState.lanlordDetails && formState.lanlordDetails.fullName ? formState.lanlordDetails.fullName : null}
            name="fullName"
            type="text" className="form-control" />
        </div>
        <div className="form-group col-md-6">
          <label >Email</label>
          <input datacontainer="clients"
            // defaultValue={formState.lanlordDetails && formState.lanlordDetails.email ? formState.lanlordDetails.email : null}
            name="email"
            type="email" className="form-control" />
        </div>
        <div className="form-group col-md-6">
          <label >Numar de telefon</label>
          <input datacontainer="clients"
            // defaultValue={formState.lanlordDetails && formState.lanlordDetails.telephoneNumber ? formState.lanlordDetails.telephoneNumber : null}
            name="telephoneNumber"
            type="number" className="form-control" />
        </div>
        <div className="form-group col-md-6 row-md-10">
          <label >Alte detalii</label>
          <textarea datacontainer="clients"
            // defaultValue={formState.lanlordDetails && formState.lanlordDetails.moreDetails ? formState.lanlordDetails.moreDetails : null}
            name="moreDetails"
            type="number" className="form-control" />
        </div>
        <button className="button"
          onClick={event => handleSubmit(event)}
          type="submit"
        >Adauga client</button>
      </form>



    </div>
  </div>

}


export default Clients