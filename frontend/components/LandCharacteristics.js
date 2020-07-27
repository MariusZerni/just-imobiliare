import React, { useState, useEffect } from 'react'
import Axios from 'axios'

const LandCharacteristics = ({ handleChange, state }) => {
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
    Axios.get('/api/property-config/land')
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
            <h4>Caracteristici teren</h4>
            <div className="field">
              <h6>Tip teren</h6>
              <select defaultValue={state.landType}
                name="landType" >
                <option selected disabled hidden>--------</option>
                {configs.landType.map(elem => {
                  return <option key={elem} value={elem}>{elem}</option>
                })}
              </select>
            </div>
            <div className="field">
              <h6>Deschidere la</h6>
              <select
                defaultValue={state.accessFrom}
                name="accessFrom" >
                <option selected disabled hidden>--------</option>
                {configs.accessFrom.map(elem => {
                  return <option key={elem} value={elem}>{elem}</option>
                })}
              </select>
            </div>
            <div className="field">
              <h6>Clasificare</h6>
              <select defaultValue={state.classification}
                name="classification" >
                <option selected disabled hidden>--------</option>
                {configs.classification.map(elem => {
                  return <option key={elem} value={elem}>{elem}</option>
                })}
              </select>
            </div>
            <div className="field">
              <h6>Destinatie</h6>
              <select defaultValue={state.useFor}
                name="useFor" >
                <option selected disabled hidden>--------</option>
                {configs.useFor.map(elem => {
                  return <option key={elem} value={elem}>{elem}</option>
                })}
              </select>
            </div>



            <div className="field">
              <h6>S teren</h6>
              <input type="text" name="squareMeters"
                defaultValue={state.squareMeters}
              />
            </div>
            <div className="field">
              <h6>Front stradal (m)</h6>
              <input defaultValue={state.streetFront}
                type="text" name="streetFront" />
            </div>
            <div className="field">
              <h6>Distanta utilitati</h6>
              <input defaultValue={state.distanceFromUtilities}
                type="text" name="distanceFromUtilities" />
            </div>
            <div className="field">
              <h6>Inclinatie</h6>
              <input defaultValue={state.inclination}
                type="text" name="inclination" />
            </div>
            <div className="field">
              <h6>Clasificare</h6>
              <input defaultValue={state.classification}
                type="text" name="classification" />
            </div>
            <div className="field">
              <h6>Disponibilitate</h6>
              <input defaultValue={state.availability}
                type="text" name="availability" />
            </div>
          </div>




          {/* Characteristics key */}
          <div className="characteristics-content">
            <h4>Urbanism</h4>
            <div className="field">
              <h6>CUT</h6>
              <input defaultValue={state.CUT}
                type="text" name="CUT" />
            </div>
            <div className="field">
              <h6>POT (%)</h6>
              <input defaultValue={state.POT}
                type="text" name="POT" />
            </div>
            <div className="checkbox">
              <input checked={state.constructionAuthorization}
                type="checkbox" name="constructionAuthorization" />
              <h6>Autorizatie de constructie</h6>
            </div>
            <div className="checkbox">
              <input checked={state.approvedPUD}
                type="checkbox" name="approvedPUD" />
              <h6>PUD aprobat</h6>
            </div>
            <div className="checkbox">
              <input checked={state.approvedPUZ}
                type="checkbox" name="approvedPUZ" />
              <h6>PUZ aprobat</h6>
            </div>
            <div className="checkbox">
              <input checked={state.urbanCertificate}
                type="checkbox" name="urbanCertificate" />
              <h6>Certificat de urbanism</h6>
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
              <h5>Alte caracteristici</h5>
              {configs.moreFeatures.map((elem) => {

                return <div
                  key={elem} className="checkbox">
                  <input checked={isChecked(state.additionalFeatures.moreFeatures, elem)}
                    datacontainer="additionalFeatures"
                    type="checkbox" name="moreFeatures" value={elem} />
                  <h6>{elem}</h6>

                </div>
              })}
              <h5>Utilitati teren</h5>
              {configs.landUtilities.map((elem) => {
                return <div key={elem} className="checkbox">
                  <input checked={isChecked(state.additionalFeatures.landUtilities, elem)}
                    datacontainer="additionalFeatures"
                    type="checkbox" name="landUtilities" value={elem} />
                  <h6>{elem}</h6>
                </div>
              })}
            </div>
            <div className="features-col">
              <h5>Amenajare strazi</h5>
              {configs.streetFacilities.map((elem) => {
                return <div key={elem} className="checkbox">
                  <input checked={isChecked(state.additionalFeatures.streetFacilities, elem)}
                    datacontainer="additionalFeatures"
                    type="checkbox" name="streetFacilities" value={elem} />
                  <h6>{elem}</h6>
                </div>
              })}
            </div>
            <div className="features-col">

              <h5>Priveliste</h5>
              {configs.view.map((elem) => {
                return <div key={elem} className="checkbox">
                  <input checked={isChecked(state.additionalFeatures.view, elem)}
                    datacontainer="additionalFeatures"
                    type="checkbox" name="view" value={elem} />
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



export default LandCharacteristics