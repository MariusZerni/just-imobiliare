import React, { useState } from 'react'
import Nav from './Nav'
import Axios from 'axios'
import Moment from 'react-moment'
import auth from '../lib/auth'



const Properties = () => {
  const [properties, setProperties] = useState()
  const [propertyType, setPropertyType] = useState()
  console.log('state', properties)

  if (propertyType) {
    console.log('filter value', propertyType)
  }

  // useEffect(() => {
  //   !properties ? fetchProperties() : null

  // })

  const fetchProperties = () => {
    Axios.get(`/api/property/${propertyType}`)
      .then((res) => {
        setProperties(res.data)
        console.log('res', res.data)
      })
      .catch(err => {
        console.log('error', err.response.data.errors)
        // setErrors(err.response.data.errors)
      })
  }

  const handleDelete = (event) => {
    const { id, name } = event.target
    console.log('handle delete', event.target)
    Axios.delete(`/api/property/${name}/${id}`,
      { headers: { Authorization: `Bearer ${auth.getToken()}` } })
      .then(res => {
        console.log('res', res)
        fetchProperties()
      })
      .catch(err => console.log(err))
  }



  const handleClick = (event) => {
    event.preventDefault()
    console.log('handle submit')
    fetchProperties()

  }

  const isOwner = (arg) => {
    return arg === auth.getUserId()
  }

  const handleChange = event => {
    const { value } = event.target
    console.log('handle change')
    setPropertyType(value)

  }


  return <div className="main-container">
    <Nav />
    <div className="properties-container">
      <div className="filter-container">
        <h4>Filtreaza dupa:</h4>
        <form onChange={event => handleChange(event)}>
          {/* <label htmlFor="filter">Tip proprietate</label> */}
          <select id="filter">
            <option selected disabled hidden>Tip proprietate</option>
            <option value="apartment">Apartament</option>
            <option value="house">Casa / Vila</option>
            <option value="land">Teren</option>
            <option value="office">Spatiu birouri</option>
            <option value="industrial-property">Spatiu industrial</option>
            <option value="commercial-property">Spatiu comercial</option>
          </select>
          <button type="submit"
            onClick={event => handleClick(event)}
            className="button" >Cauta</button>
        </form>
      </div>
      <div className="property">
        <div className="numbering title">Nr.</div>
        <div className="date title">Data</div>
        <div className="bedrooms title">Camere</div>
        <div className="square-meters title">Suprafata</div>
        <div className="location title">Locatie</div>
        <div className="landlord title">Proprietar</div>
        <div className="price title">Pret</div>
        <div className="images title">Imagini</div>
        <div className="agent-name title">Agent</div>
        <div className="actions title">Operatiuni</div>
      </div>

      <div className="property">
        <div className="numbering details">Nr.</div>
        <div className="date details">22/03/2020</div>
        <div className="bedrooms details">2</div>
        <div className="square-meters details">76mp</div>
        <div className="location details">Londra</div>
        <div className="landlord details">Amalia Hoszu</div>
        <div className="price details">458,000</div>
        <div className="images details">Nespecificat</div>
        <div className="agent-name details">Agent</div>
        <div className="actions">
          <button className="details-btn">Detalii</button>
          <button className="edit-btn" >Editeaza</button>
          <button className="delete-btn" >Sterge</button>
        </div>
      </div>


      {properties ? properties.map((property, num) => {

        return <div key={property._id} className="property property-hover">
          <div className="numbering details">{num + 1}</div>
          <div className="date details">
            {property.date && <h5><Moment format="YYYY/MM/DD HH:mm">{property.date}</Moment></h5>}
            {!property.date && <h5>Nespecificat</h5>}
          </div>
          <div className="bedrooms details">
            {property.numberOfRooms && <h5>{property.numberOfRooms}</h5>}
            {!property.numberOfRooms && <h5>Nespecificat</h5>}
          </div>
          <div className="square-meters details">
            {property.builtArea && <h5>{`${property.builtArea}mp`}</h5>}
            {!property.builtArea && <h5>Nespecificat</h5>}
          </div>
          <div className="location details">
            {property.address && <h5>{property.address.town}</h5>}
            {!property.address && <h5>Nespecificat</h5>}
          </div>
          <div className="landlord details">
            Amalia Hoszu
          </div>
          <div className="price details">
            {property.priceForSale && <h5>{property.priceForSale.price}</h5>}
            {!property.priceForSale && <h5>Nespecificat</h5>}
          </div>
          <div className="images details">

            {property.images && property.images[0] && <div className="property-image" style={{ backgroundImage: `url(${'http://localhost:8000/images/' + (property.images[0])})` }}></div>}
            {!property.images[0] && <h5>Nespecificat</h5>}
          </div>
          <div className="agent-name details">
            {property.user && <h5>{property.user.name}</h5>}
            {!property.user && <h5>Nespecificat</h5>}
          </div>
          <div className="actions">
            <button className="details-btn">Detalii</button>
            <button className="edit-btn" >Editeaza</button>
            {isOwner(property.user._id) && <button id={property._id} name={property.propertyType}
              onClick={(event) => handleDelete(event)}
              className="delete-btn" >Sterge</button>}

          </div>
        </div>
      }) : null}

    </div>
  </div>
}


export default Properties