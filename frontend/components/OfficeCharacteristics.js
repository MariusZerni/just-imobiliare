import React, { useState, useEffect } from 'react'
import Axios from 'axios'

const OfficeCharacteristics = ({ handleChange, state }) => {
  const [configs, setConfigs] = useState(null)

  // console.log('state configs', configs.servicesProvided)

  useEffect(() => {
    if (configs) {
      return
    } else {
      fetchCharacteristics()
      console.log('configs', configs)
    }

  })

  const isChecked = (selectedOptions, currentOption) => {
    return selectedOptions ? selectedOptions.includes(currentOption) : false
  }


  const fetchCharacteristics = () => {
    Axios.get('/api/property-config/office')
      .then(res => {
        console.log('res', res.data)
        if (res.data.length > 0) {
          setConfigs(res.data[0])
        }
      })
      .catch(error => console.log(error))
  }


  return configs ? <form onChange={event => handleChange(event)}>

    <div className="characteristics-container">
      <div className="left-container">
        <div className="characteristics">
          <div className="characteristics-content">
            <h4>Caracteristici spatiu de birouri</h4>
            <div className="field">
              <h6>Clasa birouri</h6>
              <select defaultValue={state.officeType}
                name="officeType" >
                <option selected disabled hidden>--------</option>
                {configs.officeType.map(elem => {
                  return <option key={elem} value={elem}>{elem}</option>
                })}
              </select>
            </div>


            <div className="field">
              <h6>Compartimentare</h6>
              <select defaultValue={state.layout}
                name="layout" >
                <option selected disabled hidden>--------</option>
                {configs.layout.map(elem => {
                  return <option key={elem} value={elem}>{elem}</option>
                })}
              </select>
            </div>

            <div className="field">
              <h6>Etaj</h6>
              <input type="text" name="floor"
                defaultValue={state.floor}
              />
            </div>


            <div className="field">
              <h6>Nr camere</h6>
              <input type="text" name="numberOfRooms"
                defaultValue={state.numberOfRooms}
              />
            </div>

            <div className="field">
              <h6>Nr bai</h6>
              <input type="text" name="bathrooms"
                defaultValue={state.bathrooms}
              />
            </div>
            <div className="field">
              <h6>Nr terase</h6>
              <input defaultValue={state.terrace}
                type="text" name="terrace" />
            </div>
            <div className="field">
              <h6>Disponibilitate</h6>
              <input defaultValue={state.availability}
                type="text" name="availability" />
            </div>
            <div className="field">
              <h6>S birouri</h6>
              <input defaultValue={state.squareMeters}
                type="text" name="squareMeters" />
            </div>
            <div className="field">
              <h6>Nr parcari</h6>
              <input defaultValue={state.parkings}
                type="text" name="parkings" />
            </div>
            <div className="field">
              <h6>Cost parcare</h6>
              <input defaultValue={state.parkingPrice}
                type="text" name="parkingPrice" />
            </div>
          </div>




          {/* Characteristics key */}
          <div className="characteristics-content">
            <h4>Caracteristici imobil</h4>
            <div className="field">
              <h6>Tip imobil</h6>
              <select defaultValue={state.buildingType}
                name="buildingType" >
                <option selected disabled hidden>--------</option>
                {configs.buildingType.map(elem => {
                  return <option key={elem} value={elem}>{elem}</option>
                })}
              </select>
            </div>
            <div className="field">
              <h6>An constructie</h6>
              <input defaultValue={state.year}
                type="text" name="year" />
            </div>
            <div className="field">
              <h6>Nr etaje</h6>
              <input defaultValue={state.numberOfFloors}
                type="text" name="numberOfFloors" />
            </div>
          </div>
        </div>
        {/* End of Characteristics */}



        {/* Facilities key */}
        <div className="right-container">
          <h4>Parametri tehnici</h4>
          <div className="features-container">
            <div
              className="features-col">
              <h5>Servicii asigurate in cladire</h5>
              {configs.servicesProvided.map((elem) => {

                return <div
                  key={elem} className="checkbox">
                  <input checked={isChecked(state.technicalParameters.servicesProvided, elem)}
                    datacontainer="technicalParameters"
                    type="checkbox" name="servicesProvided" value={elem} />
                  <h6>{elem}</h6>

                </div>
              })}
              <h5>Parcare</h5>
              {configs.parking.map((elem) => {
                return <div key={elem} className="checkbox">
                  <input checked={isChecked(state.technicalParameters.parking, elem)}
                    datacontainer="technicalParameters"
                    type="checkbox" name="parking" value={elem} />
                  <h6>{elem}</h6>
                </div>
              })}

            </div>
            <div className="features-col">
              <h5>Climatizare birou</h5>
              {configs.officeAirConditioning.map((elem) => {
                return <div key={elem} className="checkbox">
                  <input checked={isChecked(state.technicalParameters.officeAirConditioning, elem)}
                    datacontainer="officeAirConditioning"
                    type="checkbox" name="streetFacilities" value={elem} />
                  <h6>{elem}</h6>
                </div>
              })}
              <h5>IT&C</h5>
              {configs.internetAndComunication.map((elem) => {
                return <div key={elem} className="checkbox">
                  <input checked={isChecked(state.technicalParameters.internetAndComunication, elem)}
                    datacontainer="technicalParameters"
                    type="checkbox" name="internetAndComunication" value={elem} />
                  <h6>{elem}</h6>
                </div>
              })}
              <h5>Sistem electric</h5>
              {configs.electricalSystem.map((elem) => {
                return <div key={elem} className="checkbox">
                  <input checked={isChecked(state.technicalParameters.electricalSystem, elem)}
                    datacontainer="technicalParameters"
                    type="checkbox" name="electricalSystem" value={elem} />
                  <h6>{elem}</h6>
                </div>
              })}
            </div>
            <div className="features-col">

              <h5>Elemente ECO</h5>
              {configs.ecoElements.map((elem) => {
                return <div key={elem} className="checkbox">
                  <input checked={isChecked(state.technicalParameters.ecoElements, elem)}
                    datacontainer="technicalParameters"
                    type="checkbox" name="ecoElements" value={elem} />
                  <h6>{elem}</h6>
                </div>
              })}
              <h5>Arhitectura</h5>
              {configs.arhitecture.map((elem) => {
                return <div key={elem} className="checkbox">
                  <input checked={isChecked(state.technicalParameters.arhitecture, elem)}
                    datacontainer="technicalParameters"
                    type="checkbox" name="arhitecture" value={elem} />
                  <h6>{elem}</h6>
                </div>
              })}

            </div>


            <div className="features-col">
              <h5>Siguranta si securitate</h5>
              {configs.safetyAndSecurity.map((elem) => {
                return <div key={elem} className="checkbox">
                  <input checked={isChecked(state.technicalParameters.safetyAndSecurity, elem)}
                    datacontainer="technicalParameters"
                    type="checkbox" name="safetyAndSecurity" value={elem} />
                  <h6>{elem}</h6>
                </div>
              })}

              <h5>Priveliste</h5>
              {configs.arhitecture.map((elem) => {
                return <div key={elem} className="checkbox">
                  <input checked={isChecked(state.technicalParameters.view, elem)}
                    datacontainer="technicalParameters"
                    type="checkbox" name="view" value={elem} />
                  <h6>{elem}</h6>
                </div>
              })}

            </div>


          </div>
        </div>
      </div>

      {/* Characteristics key */}
      <div className="description-container">
        <div className="title">
          <h5>Title</h5>
          <textarea defaultValue={state.title}
            name="title" rows="2"></textarea>
        </div>
        <div className="description">
          <h5>Description</h5>
          <textarea defaultValue={state.description}
            name="description" rows="10"></textarea>
        </div>
      </div>

    </div>
  </form> : null
}



export default OfficeCharacteristics