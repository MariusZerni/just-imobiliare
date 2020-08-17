import React, { useState, useEffect, useContext } from 'react'
import Axios from 'axios'
import auth from '../lib/auth'
import Nav from './Nav'
import { PropertyTypeSelected, PropertyIdContext } from './Context'

const Home = (props) => {
  const [propertyType, setPropertyType] = useState('')
  const [user, setUser] = useState()
  const [state, setState] = useState({})
  const [error, setError] = useState()
  const { setPropertyTypeSelected } = useContext(PropertyTypeSelected)
  const { setPropertyIdContext } = useContext(PropertyIdContext)


  console.log('error', error)
  useEffect(() => {
    console.log('user', user)
    if (!props.location.state || !props.location.state.user) {
      return
    } else if (!user && props.location.state.user) {
      setUser(props.location.state.user)
    }

  })



  const handleChange = (event) => {
    const { name, value } = event.target
    console.log(value)
    setState(prevState => ({
      ...prevState,
      propertyType: propertyType,
      address: { ...prevState.address, [name]: value }
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('propertyType', propertyType)

    Axios.post(`/api/property/${propertyType}`, state,
      { headers: { Authorization: `Bearer ${auth.getToken()}` } })
      .then((res) => {
        const propertyId = res.data._id
        console.log('propertyID', propertyId)
        // setState(propertyType)
        setPropertyTypeSelected(propertyType)
        setPropertyIdContext(propertyId)
        console.log('res', res.data)
        props.history.push(`/${propertyType}/${propertyId}`,
          { propertyType: propertyType, propertyId: propertyId, location: state }
        )
      })
      .catch((error) => {
        if (error.response.status === 404) {
          console.log(error)
          setError({ message: 'Selecteaza o proprietate' })
        } else {
          setError(error.response.data)
          console.log(error.response.data)
        }
      })
  }


  return (
    <div className="main-container">
      <Nav user={user} />
      <div className="section">

        <h3 className="title">Alege tipul proprietatii</h3>
        {error && error.message && <span className="is-warning">{error.message}</span>}
        <div className="property-section">
          <div id="apartment"
            className={propertyType === 'apartment' ? 'font-awesome clicked' : 'font-awesome'}
            onClick={(event) => {
              setState({ propertyType: event.target.id })
              setPropertyType(event.target.id)
            }}
          >
            <i style={{ pointerEvents: 'none' }} className="fas fa-building fa-3x"></i>
            <h5 style={{ pointerEvents: 'none' }} >Apartament</h5>
          </div>
          <div id="house"
            className={propertyType === 'house' ? 'font-awesome clicked' : 'font-awesome'}
            onClick={() => {
              setState({ propertyType: event.target.id })
              setPropertyType(event.target.id)
            }}

          >
            <i style={{ pointerEvents: 'none' }}
              className="fas fa-home fa-3x"></i>
            <h5 style={{ pointerEvents: 'none' }} >Casa / Vila</h5>
          </div>
          <div id="land"
            className={propertyType === 'land' ? 'font-awesome clicked' : 'font-awesome'}
            onClick={(event) => {
              setState({ propertyType: event.target.id })
              setPropertyType(event.target.id)
            }}
          >
            <i style={{ pointerEvents: 'none' }} className="fas fa-box fa-3x" ></i>
            <h5 style={{ pointerEvents: 'none' }} >Teren</h5>
          </div>


          <div id="office"
            className={propertyType === 'office' ? 'font-awesome clicked' : 'font-awesome'}
            onClick={(event) => {
              setState({ propertyType: event.target.id })
              setPropertyType(event.target.id)
            }}
          >
            <i style={{ pointerEvents: 'none' }} className="fas fa-city fa-3x"></i>
            <h5 style={{ pointerEvents: 'none' }} >Spatiu de birouri</h5>
          </div>

          <div id="commercial-property"
            className={propertyType === 'commercial-property' ? 'font-awesome clicked' : 'font-awesome'}
            onClick={() => {
              setState({ propertyType: event.target.id })
              setPropertyType(event.target.id)
            }}>
            <i style={{ pointerEvents: 'none' }} className="fas fa-hotel fa-3x"></i>
            <h5 style={{ pointerEvents: 'none' }} >Spatiu comercial</h5>
          </div>
          <div id="industrial-property"
            className={propertyType === 'industrial-property' ? 'font-awesome clicked' : 'font-awesome'}
            onClick={() => {
              setState({ propertyType: event.target.id })
              setPropertyType(event.target.id)
            }}
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
            {propertyType === 'apartment' && <div className="form-row">
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