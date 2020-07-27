import React, { useEffect, useState } from 'react'
import Axios from 'axios'

const HousePrice = ({ handleChange, state }) => {

  const [configs, setConfigs] = useState(null)


  // console.log('features', state.facilities.features)
  useEffect(() => {
    // fetchCharacteristics()

    if (configs) {
      return
    } else {
      fetchCharacteristics()
    }
  })

  if (configs) {
    console.log('real estate', configs)
  }
  

  const isChecked = (selectedOptions, currentOption) => {
    return selectedOptions ? selectedOptions.includes(currentOption) : false
  }

  const fetchCharacteristics = () => {
    Axios.get('/api/property-config/house')
      .then(res => {
        console.log('res', res)
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
            <h4>Caracteristici apartament</h4>

            <div className="field">
              <h6>Destinatie</h6>
              <select
                defaultValue={state.useFor}
                name="useFor" >
                <option selected disabled hidden>--------</option>
                {configs.useFor.map(elem => {
                  return <option key={elem} value={elem}>{elem}</option>
                })}
              </select>
            </div>
            <div className="field">
              <h6>Tip casa</h6>
              <select defaultValue={state.houseType}
                name="houseType" >
                <option selected disabled hidden>--------</option>
                {configs.houseType.map(elem => {
                  return <option key={elem} value={elem}>{elem}</option>
                })}
              </select>
            </div>
            <div className="field">
              <h6>Stare interior</h6>
              <select defaultValue={state.interiorState}
                name="interiorState" >
                <option selected disabled hidden>--------</option>
                {configs.interiorState.map(elem => {
                  return <option key={elem} value={elem}>{elem}</option>
                })}
              </select>
            </div>
            <div className="field">
              <h6>Acoperis</h6>
              <select defaultValue={state.roof}
                name="roof" >
                <option selected disabled hidden>--------</option>
                {configs.roof.map(elem => {
                  return <option key={elem} value={elem}>{elem}</option>
                })}
              </select>
            </div>
            <div className="field">
              <h6>Stadiu Constructie</h6>
              <select defaultValue={state.constructionStage}
                name="constructionStage" >
                <option selected disabled hidden>--------</option>
                {configs.constructionStage.map(elem => {
                  return <option key={elem} value={elem}>{elem}</option>
                })}
              </select>
            </div>
            <div className="field">
              <h6>Tip Constructie</h6>
              <select defaultValue={state.constructionType}
                name="constructionType" >
                <option selected disabled hidden>--------</option>
                {configs.constructionType.map(elem => {
                  return <option key={elem} value={elem}>{elem}</option>
                })}
              </select>
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

            <div className="field">
              <h6>Anul finisarii</h6>
              <input type="text" name="refurbishedYear"
                defaultValue={state.refurbishedYear}
              />
            </div>
            <div className="field">
              <h6>An constructie</h6>
              <input type="text" name="constructionYear"
                defaultValue={state.constructionYear}
              />
            </div>

            <div className="field">
              <h6>S utila (mp)</h6>
              <input defaultValue={state.squareMeters}
                type="text" name="squareMeters" />
            </div>
            <div className="field">
              <h6>S construita (mp)</h6>
              <input defaultValue={state.builtArea}
                type="text" name="builtArea" />
            </div>
            <div className="field">
              <h6>S teren (mp)</h6>
              <input defaultValue={state.landSquareMeters}
                type="text" name="landSquareMeters" />
            </div>
            <div className="field">
              <h6>S curte (mp)</h6>
              <input defaultValue={state.gardenSquareMeter}
                type="text" name="gardenSquareMeter" />
            </div>
            <div className="field">
              <h6>S terasa (mp)</h6>
              <input defaultValue={state.terrace}
                type="text" name="terrace" />
            </div>
            <div className="field">
              <h6>Deschidere (m)</h6>
              <input defaultValue={state.frontAccess}
                type="text" name="frontAccess" />
            </div>
            <div className="field">
              <h6>Nr subsoluri</h6>
              <input defaultValue={state.basement}
                type="text" name="basement" />
            </div>
            <div className="field">
              <h6>Nr etaje</h6>
              <input defaultValue={state.numberOfFloors}
                type="text" name="numberOfFloors" />
            </div>
            <div className="checkbox">
              <input checked={state.historicalMonument}
                type="checkbox" name="historicalMonument" />
              <h6>Monument istoric</h6>
            </div>
            <div className="checkbox">
              <input checked={state.thermalRehabilitation}
                type="checkbox" name="thermalRehabilitation" />
              <h6>Reabilitat termic</h6>
            </div>
            <div className="checkbox">
              <input checked={state.consolidatedBuilding}
                type="checkbox" name="consolidatedBuilding" />
              <h6>Imobil consolidat</h6>
            </div>
            <div className="checkbox">
              <input checked={state.attic}
                type="checkbox" name="attic" />
              <h6>Mansarda</h6>
            </div>
          </div>




          <div className="characteristics-content">
            <h4>Incaperi si anexe</h4>
            <div className="field">
              <h6>Nr. camere</h6>
              <input defaultValue={state.numberOfRooms}
                type="text" name="numberOfRooms" />
            </div>
            <div className="field">
              <h6>Nr. dormitoare</h6>
              <input defaultValue={state.bedrooms}
                type="text" name="bedrooms" />
            </div>
            <div className="field">
              <h6>Nr. bucatarii</h6>
              <input defaultValue={state.kitchens}
                type="text" name="kitchens" />
            </div>
            <div className="field">
              <h6>Nr. bai</h6>
              <input defaultValue={state.bathrooms}
                type="text" name="bathrooms" />
            </div>
            <div className="checkbox">
              <input checked={state.bathroomWindow}
                type="checkbox" name="bathroomWindow" />
              <h6>Geam la baie</h6>
            </div>
            <div className="field">
              <h6>Nr. balcoane</h6>
              <input defaultValue={state.balconies}
                type="text" name="balconies" />
            </div>
            <div className="field">
              <h6>Nr. garaje</h6>
              <input defaultValue={state.garage}
                type="text" name="garage" />
            </div>
            <div className="field">
              <h6>Nr. locuri parcare</h6>
              <input defaultValue={state.parkingSpace}
                type="text" name="parkingSpace" />
            </div>
          </div>
        </div>
        {/* End of Characteristics */}





        {/* Facilities key */}
        <div className="right-container">
          <h4>Dotari si utilitati</h4>
          <div className="features-container">
            <div
              className="features-col">
              <h5>Dotari</h5>
              {configs.features.map((elem) => {

                return <div
                  key={elem} className="checkbox">
                  <input checked={isChecked(state.facilities.features, elem)}
                    datacontainer="facilities"
                    type="checkbox" name="features" value={elem} />
                  <h6>{elem}</h6>

                </div>
              })}
              <h5>Amenajare strazi</h5>
              {configs.streetFacilities.map((elem) => {
                return <div key={elem} className="checkbox">
                  <input checked={isChecked(state.facilities.streetFacilities, elem)}
                    datacontainer="facilities"
                    type="checkbox" name="streetFacilities" value={elem} />
                  <h6>{elem}</h6>
                </div>
              })}
              <h5>Utilitati generale</h5>
              {configs.generalUtilities.map((elem) => {
                return <div key={elem} className="checkbox">
                  <input checked={isChecked(state.facilities.generalUtilities, elem)}
                    datacontainer="facilities"
                    type="checkbox" name="generalUtilities" value={elem} />
                  <h6>{elem}</h6>
                </div>
              })}
              <h5>Izolatii termice</h5>
              {configs.insulation.map((elem) => {
                return <div key={elem} className="checkbox">
                  <input checked={isChecked(state.facilities.insulation, elem)}
                    datacontainer="facilities"
                    type="checkbox" name="insulation" value={elem} />
                  <h6>{elem}</h6>
                </div>
              })}
            </div>
            <div className="features-col">
              <h5>Dotari imobil</h5>
              {configs.realEstateFacilities.map((elem) => {
                return <div key={elem} className="checkbox">
                  <input checked={isChecked(state.facilities.realEstateFacilities, elem)}
                    datacontainer="facilities"
                    type="checkbox" name="realEstateFacilities" value={elem} />
                  <h6>{elem}</h6>
                </div>
              })}
              <h5>Parcare</h5>
              {configs.parking.map((elem) => {
                return <div key={elem} className="checkbox">
                  <input checked={isChecked(state.facilities.parking, elem)}
                    datacontainer="facilities"
                    type="checkbox" name="parking" value={elem} />
                  <h6>{elem}</h6>
                </div>
              })}
              <h5>Sistem incalzire</h5>
              {configs.heatingSystem.map((elem) => {
                return <div key={elem} className="checkbox">
                  <input checked={isChecked(state.facilities.heatingSystem, elem)}
                    datacontainer="facilities"
                    type="checkbox" name="heatingSystem" value={elem} />
                  <h6>{elem}</h6>
                </div>
              })}

            </div>
            <div className="features-col">
              <h5>Usa intrare</h5>
              {configs.doorEntry.map((elem) => {
                return <div key={elem} className="checkbox">
                  <input checked={isChecked(state.facilities.doorEntry, elem)}
                    datacontainer="facilities"
                    type="checkbox" name="doorEntry" value={elem} />
                  <h6>{elem}</h6>
                </div>
              })}
              <h5>Pereti</h5>
              {configs.walls.map((elem) => {
                return <div key={elem} className="checkbox">
                  <input checked={isChecked(state.facilities.walls, elem)}
                    datacontainer="facilities"
                    type="checkbox" name="walls" value={elem} />
                  <h6>{elem}</h6>
                </div>
              })}
              <h5>Mobilat</h5>
              {configs.furnished.map((elem) => {
                return <div key={elem} className="checkbox">
                  <input checked={isChecked(state.facilities.furnished, elem)}
                    datacontainer="facilities"
                    type="checkbox" name="furnished" value={elem} />
                  <h6>{elem}</h6>
                </div>
              })}
              <h5>Bucatarie</h5>
              {configs.kitchenType.map((elem) => {
                return <div key={elem} className="checkbox">
                  <input checked={isChecked(state.facilities.kitchenType, elem)}
                    datacontainer="facilities"
                    type="checkbox" name="kitchenType" value={elem} />
                  <h6>{elem}</h6>
                </div>
              })}
              <h5>Ferestre</h5>
              {configs.windows.map((elem) => {
                return <div key={elem} className="checkbox">
                  <input checked={isChecked(state.facilities.windows, elem)}
                    datacontainer="facilities"
                    type="checkbox" name="windows" value={elem} />
                  <h6>{elem}</h6>
                </div>
              })}
              <h5>Contorizare</h5>
              {configs.meters.map((elem) => {
                return <div key={elem} className="checkbox">
                  <input checked={isChecked(state.facilities.meters, elem)}
                    datacontainer="facilities"
                    type="checkbox" name="meters" value={elem} />
                  <h6>{elem}</h6>
                </div>
              })}
            </div>
            <div className="features-col">
              <h5>Usa interior</h5>
              {configs.interiorDoors.map((elem) => {
                return <div key={elem} className="checkbox">
                  <input checked={isChecked(state.facilities.interiorDoors, elem)}
                    datacontainer="facilities"
                    type="checkbox" name="interiorDoors" value={elem} />
                  <h6>{elem}</h6>
                </div>
              })}
              <h5>Podele</h5>
              {configs.floorType.map((elem) => {
                return <div key={elem} className="checkbox">
                  <input checked={isChecked(state.facilities.floorType, elem)}
                    datacontainer="facilities"
                    type="checkbox" name="floorType" value={elem} />
                  <h6>{elem}</h6>
                </div>
              })}
              <h5>Alte spatii</h5>
              {configs.otherSpaces.map((elem) => {
                return <div key={elem} className="checkbox">
                  <input checked={isChecked(state.facilities.otherSpaces, elem)}
                    datacontainer="facilities"
                    type="checkbox" name="otherSpaces" value={elem} />
                  <h6>{elem}</h6>
                </div>
              })}
              <h5>Priveliste</h5>
              {configs.view.map((elem) => {
                return <div key={elem} className="checkbox">
                  <input checked={isChecked(state.facilities.view, elem)}
                    datacontainer="facilities"
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


export default HousePrice