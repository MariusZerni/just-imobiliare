import React, { useState } from 'react'

import Axios from 'axios'

import Header from './Header'

const Home = (props) => {
  const [propertyTypeId, setPropertyTypeId] = useState('')
  const [state, setState] = useState({
    county: '',
    town: '',
    street: '',
    streetNumber: null


  })

 


  const handleChange = (event) => {
    // console.log(event.target.value)
    const { name, value } = event.target

    const state = { ...state, [name]: value }
    setState(state)

    console.log(state)  
  }

  const handleSubmit = (event) => {
    event.preventDefault()    
    Axios.post(`/api/property/${propertyTypeId}`, state)
      .then((res) => {
        const propertyId = res.data._id
        props.history.push(`/${propertyTypeId}/${propertyId}`, { propertyType: propertyTypeId, propertyId: propertyId })
      })
      .catch((error) => {
        console.log(error)
      })
  }


  return (
    <div className="main-container">
      <Header />
      <div className="section">
        <h3 className="title">Alege tipul proprietatii</h3>
        <div className="property-section">
          <div id="apartment"
            className={propertyTypeId === 'apartment' ? 'font-awesome clicked' : 'font-awesome'}
            onClick={(event) => setPropertyTypeId(event.target.id)}
          >
            <i style={{ pointerEvents: 'none' }} className="fas fa-building fa-3x"></i>
            <h5 style={{ pointerEvents: 'none' }} >Apartament</h5>
          </div>
          <div id="casa-vila"
            className={propertyTypeId === 'casa-vila' ? 'font-awesome clicked' : 'font-awesome'}
            onClick={() => 
              setPropertyTypeId(event.target.id)

            }
          >
            <i style={{ pointerEvents: 'none' }}
              className="fas fa-home fa-3x"></i>
            <h5 style={{ pointerEvents: 'none' }} >Casa / Vila</h5>
          </div>
          <div id="teren"

            className={propertyTypeId === 'teren' ? 'font-awesome clicked' : 'font-awesome'}
            onClick={(event) => setPropertyTypeId(event.target.id)}
          >
            <i style={{ pointerEvents: 'none' }} className="fas fa-box fa-3x" ></i>
            <h5 style={{ pointerEvents: 'none' }} >Teren</h5>
          </div>


          <div id="birou"
            className={propertyTypeId === 'birou' ? 'font-awesome clicked' : 'font-awesome'}
            onClick={(event) => setPropertyTypeId(event.target.id)}
          >
            <i style={{ pointerEvents: 'none' }} className="fas fa-city fa-3x"></i>
            <h5 style={{ pointerEvents: 'none' }} >Spatiu de birouri</h5>
          </div>

          <div id="spatiu-comercial"
            className={propertyTypeId === 'spatiu-comercial' ? 'font-awesome clicked' : 'font-awesome'}
            onClick={() => setPropertyTypeId(event.target.id)}>
            <i style={{ pointerEvents: 'none' }} className="fas fa-hotel fa-3x"></i>
            <h5 style={{ pointerEvents: 'none' }} >Spatiu comercial</h5>
          </div>
          <div id="spatiu-industrial"
            className={propertyTypeId === 'spatiu-industrial' ? 'font-awesome clicked' : 'font-awesome'}
            onClick={() => setPropertyTypeId(event.target.id)}
          >
            <i style={{ pointerEvents: 'none' }} className="fas fa-warehouse fa-3x"></i>
            <h5 style={{ pointerEvents: 'none' }} >Spatiu industrial</h5>
          </div>
        </div>
        <div className="property-address">
          <form onChange={(event) => handleChange(event)}
            onSubmit={(event) => handleSubmit(event)}>
            <div className="form-group col-md-10">
              <input 
                name="county"
                type="text" className="form-control" placeholder="Judet" />
            </div>
            <div className="form-group col-md-10">
              <input 
                name="town"
                type="text" className="form-control" placeholder="Localitate" />
            </div>
            <div className="form-row">
              <div className="form-group col-md-8">
                <input 
                  name="street"
                  type="text" className="form-control" placeholder="Strada" />
              </div>
              <div className="form-group col-md-4">
                <input 
                  name="streetNumber"
                  type="text" className="form-control" placeholder="Numar strada" />
              </div>
            </div>
            {/*If apartment is selected  */}
            {propertyTypeId === 'apartment' && <div className="form-row">
              <div className="form-group col-md-8">
                <input type="text" className="form-control" placeholder="Apartament" />
              </div>
              <div className="form-group col-md-4">
                <input type="text" className="form-control" placeholder="Numar apartament" />
              </div>
            </div>}
            <button type="submit"
              className=" btn btn-primary">
              Adauga proprietate
            </button>

          </form>
        </div>
      </div>
    </div>

  )
}



export default Home