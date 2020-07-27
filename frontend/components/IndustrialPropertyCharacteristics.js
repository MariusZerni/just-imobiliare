import React, { useState, useEffect } from 'react'
import Axios from 'axios'

const IndustrialPropertyCharacteristics = ({ handleChange, state }) => {
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
    Axios.get('/api/property-config/industrial-space')
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
            <h4>Caracteristici spatiu industrial</h4>
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
              <h6>Nr bai</h6>
              <input type="text" name="bathrooms"
                defaultValue={state.bathrooms}
              />

            </div>



            <div className="field">
              <h6>Nr terase</h6>
              <input type="text" name="terrace"
                defaultValue={state.terrace}
              />
            </div>
            <div className="field">
              <h6>An constructie</h6>
              <input defaultValue={state.kitconstructionYearchen}
                type="text" name="constructionYear" />
            </div>
            <div className="field">
              <h6>S. construita</h6>
              <input defaultValue={state.squareMeters}
                type="text" name="squareMeters" />
            </div>
            <div className="field">
              <h6>S. birouri</h6>
              <input defaultValue={state.roadofficeSquareMetersFront}
                type="text" name="officeSquareMeters" />
            </div>
            <div className="field">
              <h6>S. productie</h6>
              <input defaultValue={state.productionAreaSqm}
                type="text" name="productionAreaSqm" />
            </div>
            <div className="field">
              <h6>Dimensiuni usi intrare (m)</h6>
              <input defaultValue={state.doorsDimensions}
                type="text" name="doorsDimensions" />
            </div>
            <div className="field">
              <h6>Tip imobil</h6>
              <input defaultValue={state.buildingType}
                type="text" name="buildingType" />
            </div>
            
            <div className="field">
              <h6>Tip imobil</h6>
              <input defaultValue={state.numberOfFloors}
                type="text" name="numberOfFloors" />
            </div>

            <div className="field">
              <h6>Nr camere</h6>
              <input defaultValue={state.numberOfRooms}
                type="text" name="numberOfRooms" />
            </div>
            <div className="field">
              <h6>Nr vestiare</h6>
              <input defaultValue={state.cloackroom}
                type="text" name="cloackroom" />
            </div>

            <div className="field">
              <h6>Nr bucatarii</h6>
              <input defaultValue={state.kitchen}
                type="text" name="kitchen" />
            </div>
            <div className="field">
              <h6>Nr locuri parcare</h6>
              <input defaultValue={state.parking}
                type="text" name="parking" />
            </div>
            <div className="field">
              <h6>S. teren (mp)</h6>
              <input defaultValue={state.landSquareMeters}
                type="text" name="landSquareMeters" />
            </div>
            <div className="field">
              <h6>Inaltime interioara</h6>
              <input defaultValue={state.interiorHeight}
                type="text" name="interiorHeight" />
            </div>
            <div className="field">
              <h6>Disponibilitate</h6>
              <input defaultValue={state.interioravailabilityHeight}
                type="text" name="availability" />
            </div>
          </div>
        </div>



        {/* End of Characteristics */}

        {/* Facilities key */}
        <div className="right-container">
          <h4>Caracteristici suplimentare</h4>
          <div className="features-container">
            <div className="features-col">
              <h5>Alte caracteristici</h5>
              {configs.moreCharacteristics.map((elem) => {

                return <div
                  key={elem} className="checkbox">
                  <input checked={isChecked(state.additionalCharacteristics.moreCharacteristics, elem)}
                    datacontainer="additionalCharacteristics"
                    type="checkbox" name="moreCharacteristics" value={elem} />
                  <h6>{elem}</h6>

                </div>
              })}

            </div>
            <div className="features-col">
              <h5>Amenajare strazi</h5>
              {configs.streetFacilities.map((elem) => {
                return <div key={elem} className="checkbox">
                  <input checked={isChecked(state.additionalCharacteristics.streetFacilities, elem)}
                    datacontainer="additionalCharacteristics"
                    type="checkbox" name="streetFacilities" value={elem} />
                  <h6>{elem}</h6>
                </div>
              })}
              <h5>Utilitati teren</h5>
              {configs.landFacilities.map((elem) => {
                return <div key={elem} className="checkbox">
                  <input checked={isChecked(state.additionalCharacteristics.landFacilities, elem)}
                    datacontainer="additionalCharacteristics"
                    type="checkbox" name="landFacilities" value={elem} />
                  <h6>{elem}</h6>
                </div>
              })}
            </div>
            <div className="features-col">


              <h5>Parcare</h5>
              {configs.parking.map((elem) => {
                return <div key={elem} className="checkbox">
                  <input checked={isChecked(state.additionalCharacteristics.parking, elem)}
                    datacontainer="additionalCharacteristics"
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



export default IndustrialPropertyCharacteristics