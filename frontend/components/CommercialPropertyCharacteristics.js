import React, { useState, useEffect } from 'react'
import Axios from 'axios'

const CommercialPropertyCharacteristics = ({ handleChange, state }) => {
  const [configs, setConfigs] = useState(null)

  console.log('state configs', configs)

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
    Axios.get('/api/property-config/commercial-space')
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
            <h4>Caracteristici spatiu comercial</h4>
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
              <h6>Trafic pietonal</h6>
              <select
                defaultValue={state.pedestrianTraffic}
                name="pedestrianTraffic" >
                <option selected disabled hidden>--------</option>
                {configs.pedestrianTraffic.map(elem => {
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
              <h6>Nr bai</h6>
              <input type="text" name="bathrooms"
                defaultValue={state.bathrooms}
              />
            </div>
            <div className="field">
              <h6>Nr bucatarii</h6>
              <input defaultValue={state.kitchen}
                type="text" name="kitchen" />
            </div>
            <div className="field">
              <h6>S utila</h6>
              <input defaultValue={state.squareMeters}
                type="text" name="squareMeters" />
            </div>
            <div className="field">
              <h6>Front stradal</h6>
              <input defaultValue={state.roadFront}
                type="text" name="roadFront" />
            </div>
            <div className="field">
              <h6>Inaltime interioara</h6>
              <input defaultValue={state.interiorHeight}
                type="text" name="interiorHeight" />
            </div>
            <div className="field">
              <h6>Disponibilitate</h6>
              <input defaultValue={state.availability}
                type="text" name="availability" />
            </div>
            <div className="field">
              <h6>Nr camere</h6>
              <input defaultValue={state.numberOfRooms}
                type="text" name="numberOfRooms" />
            </div>
            <div className="field">
              <h6>Nr terase</h6>
              <input defaultValue={state.terrace}
                type="text" name="terrace" />
            </div>
            <div className="field">
              <h6>Nr parcari</h6>
              <input defaultValue={state.parkingSpace}
                type="text" name="parkingSpace" />
            </div>

          </div>




          {/* Characteristics key */}
          <div className="characteristics-content">
            <h4>Caracteroistici imobil</h4>
            <div className="field">
              <h6>An constructie</h6>
              <input defaultValue={state.constructionYear}
                type="text" name="constructionYear" />
            </div>
            <div className="field">
              <h6>Nr etaje</h6>
              <input defaultValue={state.numberOfRooms}
                type="text" name="numberOfRooms" />
            </div>
            <div className="field">
              <h6>Risc seismic</h6>
              <select defaultValue={state.seismicRisk}
                name="seismicRisk" >
                <option selected disabled hidden>--------</option>
                {configs.seismicRisk.map(elem => {
                  return <option key={elem} value={elem}>{elem}</option>
                })}
              </select>
            </div>
            <div className="checkbox">
              <input checked={state.consolidatedBuilding}
                type="checkbox" name="consolidatedBuilding" />
              <h6>Imobil consolidat</h6>
            </div>
            <div className="checkbox">
              <input checked={state.historicalMonument}
                type="checkbox" name="historicalMonument" />
              <h6>Monument istoric</h6>
            </div>
            <div className="checkbox">
              <input checked={state.attic}
                type="checkbox" name="attic" />
              <h6>Mansarda</h6>
            </div>
          </div>
        </div>
        {/* End of Characteristics */}

        {/* Facilities key */}
        <div className="right-container">
          <h4>Caracteristici suplimentare</h4>
          <div className="features-container">
            <div
              className="features-col">
              <h5>Utilitati teren</h5>
              {configs.landUtilities.map((elem) => {

                return <div
                  key={elem} className="checkbox">
                  <input checked={isChecked(state.additionalFeatures.landUtilities, elem)}
                    datacontainer="additionalFeatures"
                    type="checkbox" name="landUtilities" value={elem} />
                  <h6>{elem}</h6>

                </div>
              })}
              <h5>Parcare</h5>
              {configs.parking.map((elem) => {
                return <div key={elem} className="checkbox">
                  <input checked={isChecked(state.additionalFeatures.parking, elem)}
                    datacontainer="additionalFeatures"
                    type="checkbox" name="parking" value={elem} />
                  <h6>{elem}</h6>
                </div>
              })}
            </div>
            <div className="features-col">
              <h5>Elemente ECO</h5>
              {configs.ecoElements.map((elem) => {
                return <div key={elem} className="checkbox">
                  <input checked={isChecked(state.additionalFeatures.ecoElements, elem)}
                    datacontainer="additionalFeatures"
                    type="checkbox" name="ecoElements" value={elem} />
                  <h6>{elem}</h6>
                </div>
              })}
              <h5>Priveliste</h5>
              {configs.view.map((elem) => {
                return <div key={elem} className="checkbox">
                  <input checked={isChecked(state.additionalFeatures.view, elem)}
                    datacontainer="additionalFeatures"
                    type="checkbox" name="view" value={elem} />
                  <h6>{elem}</h6>
                </div>
              })}
            </div>
            <div className="features-col">


              <h5>Alte caracteristici</h5>
              {configs.extraCharacteristics.map((elem) => {
                return <div key={elem} className="checkbox">
                  <input checked={isChecked(state.additionalFeatures.extraCharacteristics, elem)}
                    datacontainer="additionalFeatures"
                    type="checkbox" name="extraCharacteristics" value={elem} />
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



export default CommercialPropertyCharacteristics