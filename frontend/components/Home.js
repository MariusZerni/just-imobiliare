import React, { useState, useEffect } from 'react'
import Axios from 'axios'
// import auth from '../lib/auth'
import Header from './Header'
// import UserContext from '../components/UserContext'

const Home = (props) => {
  const [propertyTypeId, setPropertyTypeId] = useState('')
  const [user, setUser] = useState()
  const [state, setState] = useState({
    county: '',
    town: '',
    street: '',
    streetNumber: null
  })

  // const {user} = useContext(UserContext)
  

  useEffect(() => {
    console.log('user', user)
    if (!props.location.state || !props.location.state.user) {
      return
    } else if (!user && props.location.state.user) {
      // console.log('user')
      setUser(props.location.state.user)
    } 
    
  })

  // console.log(auth.getUserId())
  // console.log('user', user)
  // const findUser = () => {
  //   const userId = auth.getUserId()
  //   Axios.get(`/api/user/${userId}`)
  //     .then((res) => console.log(res))
  //     .catch(error => console.error(error))
  // }


  const handleChange = (event) => {
    const { name, value } = event.target
    setState(prevState => ({
      ...prevState,
      address: { ...prevState.address, [name]: value }
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    Axios.post(`/api/property/${propertyTypeId}`, state)
      .then((res) => {
        const propertyId = res.data._id
        props.history.push(`/${propertyTypeId}/${propertyId}`, { propertyType: propertyTypeId, propertyId: propertyId, location: state, user })
      })
      .catch((error) => {
        console.log(error)
      })
  }


  return (
    <div className="main-container">
      <Header user={user}/>
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
          <div id="house"
            className={propertyTypeId === 'house' ? 'font-awesome clicked' : 'font-awesome'}
            onClick={() =>
              setPropertyTypeId(event.target.id)

            }
          >
            <i style={{ pointerEvents: 'none' }}
              className="fas fa-home fa-3x"></i>
            <h5 style={{ pointerEvents: 'none' }} >Casa / Vila</h5>
          </div>
          <div id="land"

            className={propertyTypeId === 'land' ? 'font-awesome clicked' : 'font-awesome'}
            onClick={(event) => setPropertyTypeId(event.target.id)}
          >
            <i style={{ pointerEvents: 'none' }} className="fas fa-box fa-3x" ></i>
            <h5 style={{ pointerEvents: 'none' }} >Teren</h5>
          </div>


          <div id="office"
            className={propertyTypeId === 'office' ? 'font-awesome clicked' : 'font-awesome'}
            onClick={(event) => setPropertyTypeId(event.target.id)}
          >
            <i style={{ pointerEvents: 'none' }} className="fas fa-city fa-3x"></i>
            <h5 style={{ pointerEvents: 'none' }} >Spatiu de birouri</h5>
          </div>

          <div id="comercial-space"
            className={propertyTypeId === 'comercial-space' ? 'font-awesome clicked' : 'font-awesome'}
            onClick={() => setPropertyTypeId(event.target.id)}>
            <i style={{ pointerEvents: 'none' }} className="fas fa-hotel fa-3x"></i>
            <h5 style={{ pointerEvents: 'none' }} >Spatiu comercial</h5>
          </div>
          <div id="industrial-space"
            className={propertyTypeId === 'industrial-space' ? 'font-awesome clicked' : 'font-awesome'}
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