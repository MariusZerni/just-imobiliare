import React, { useState, useEffect } from 'react'
import Axios from 'axios'

const ApartmentCharacteristics = ({ handleChange, handleSubmit, characteristics }) => {
  const [configs, setConfigs] = useState(null)

  

  console.log(characteristics.historicalMonument)
  useEffect(() => {
    if (configs) {
      return
    } else {
      fetchCharacteristics()
    }
  })

  const isChecked = (selectedOptions, currentOption) => {
    const isChecked = selectedOptions.includes(currentOption)
    return isChecked
  }

  const isCheckedSingle = (selectedOption) => {
    console.log(selectedOption)
    // return true
    if (selectedOption) {
      return true
    }
    return
  } 

  const fetchCharacteristics = () => {
    Axios.get('/api/property-config/apartment')
      .then(res => {
        if (res.data.length > 0) {
          setConfigs(res.data[0])
        }
      })
      .catch(error => console.log(error))
  }


  return configs ? <form
    id="form"
    onSubmit={event => handleSubmit(event)}
    onChange={event => handleChange(event)}>
    <div className="characteristics-container">
      <div className="main-content">
        <div className="characteristics">
          <div className="characteristics-content">
            <h4>Caracteristici apartament</h4>
            <div className="field">
              <h6>Tip tranzactie</h6>
              <select defaultValue={characteristics.transactionType}
                name="transactionType" >
                <option value="apartament">Inchiriere</option>
                <option value="casa">Vanzare</option>
              </select>
            </div>
            <div className="field">
              <h6>Tip proprietate</h6>
              <select defaultValue={characteristics.propertyType}
                name="propertyType" >
                <option value="apartament">Apartament</option>
                <option value="casa">Casa</option>
              </select>
            </div>
            <div className="field">
              <h6>Tip apartament</h6>
              <select defaultValue={characteristics.apartmentType}
                name="apartmentType" >
                {configs.apartmentType.map(elem => {
                  return <option key={elem._id} value={elem}>{elem}</option>
                })}
              </select>

            </div>
            <div className="field">
              <h6>Compartimentare</h6>
              <select defaultValue={characteristics.compartments}
                name="compartments" >
                {configs.compartments.map(elem => {
                  return <option key={elem._id} value={elem}>{elem}</option>
                })}
              </select>
            </div>
            <div className="field">
              <h6>Orientare</h6>
              <select defaultValue={characteristics.facingDirection}
                name="facingDirection" >
                {configs.facingDirection.map(elem => {
                  return <option key={elem._id} value={elem}>{elem}</option>
                })}
              </select>
            </div>
            <div className="field">
              <h6>Etaj</h6>
              <select defaultValue={characteristics.floor}
                name="floor" >
                {configs.floor.map(elem => {
                  return <option key={elem._id} value={elem}>{elem}</option>
                })}
              </select>
            </div>
            <div className="field">
              <h6>Confort</h6>
              <select defaultValue={characteristics.comforType}
                name="comfortType" >
                {configs.comfortType.map(elem => {
                  return <option key={elem._id} value={elem}>{elem}</option>
                })}
              </select>
            </div>
            <div className="field">
              <h6>Stare interior</h6>
              <select defaultValue={characteristics.interiorState}
                name="interiorState" >
                {configs.interiorState.map(elem => {
                  return <option key={elem._id} value={elem}>{elem}</option>
                })}
              </select>
            </div>
            <div className="field">



              <h6>Disponibilitate</h6>
              <input type="text" name="availability" 
                defaultValue={characteristics.availability}
              />
            </div>
            <div className="field">
              <h6>Anul finisarii</h6>
              <input defaultValue={characteristics.year}
                type="text" name="year" />
            </div>
            <div className="field">
              <h6>S utila (mp)</h6>
              <input defaultValue={characteristics.squareMeters}
                type="text" name="squareMeters" />
            </div>
            <div className="field">
              <h6>S construita (mp)</h6>
              <input defaultValue={characteristics.biltArea}
                type="text" name="builtArea" />
            </div>
            <div className="field">
              <h6>S terasa (mp)</h6>
              <input defaultValue={characteristics.terrace}
                type="text" name="terrace" />
            </div>
            <div className="field">
              <h6>S balcoane (mp)</h6>
              <input defaultValue={characteristics.balcony}
                type="text" name="balcony" />
            </div>
            <div className="field">
              <h6>S curte (mp)</h6>
              <input defaultValue={characteristics.garden}
                type="text" name="garden" />
            </div>
          </div>
          <div className="characteristics-content">
            <h4>Incaperi si anexe</h4>
            <div className="field">
              <h6>Nr. camere</h6>
              <input defaultValue={characteristics.numberOfRooms}
                type="text" name="numberOfRooms" />
            </div>
            <div className="field">
              <h6>Nr. dormitoare</h6>
              <input defaultValue={characteristics.bedrooms}
                type="text" name="bedrooms" />
            </div>
            <div className="field">
              <h6>Nr. bucatarii</h6>
              <input defaultValue={characteristics.kitchen}
                type="text" name="kitchen" />
            </div>
            <div className="field">
              <h6>Nr. bai</h6>
              <input defaultValue={characteristics.bathrooms}
                type="text" name="bathrooms" />
            </div>
            <div className="checkbox">
              <input 
                type="checkbox" name="bathroomWindow" />
              <h6>Geam la baie</h6>
            </div>
            <div className="field">
              <h6>Nr. garaje</h6>
              <input defaultValue={characteristics.garage}
                type="text" name="garage" />
            </div>
            <div className="field">
              <h6>Nr. locuri parcare</h6>
              <input defaultValue={characteristics.parkingSpace}
                type="text" name="parkingSpace" />
            </div>
          </div>

          {/* Characteristics key */}
          <div className="characteristics-content">
            <h4>Caracteristici imobil</h4>
            <div className="field">
              <h6>Imobil</h6>
              <select defaultValue={characteristics.buildingType}
                datacontainer="characteristics"
                name="buildingType" >
                {configs.buildingType.map(elem => {
                  return <option key={elem._id} value={elem}>{elem}</option>
                })}
              </select>
            </div>
            <div className="field">
              <h6>An. constructie</h6>
              <input defaultValue={characteristics.constructionYear}
                datacontainer="characteristics"
                type="text" name="constructionYear" />
            </div>
            <div className="field">
              <h6>Stadiu constructie</h6>
              <select defaultValue={characteristics.constructionStage}
                datacontainer="characteristics"
                name="constructionStage" >
                {configs.constructionStage.map(elem => {
                  return <option key={elem._id} value={elem}>{elem}</option>
                })}
              </select>
            </div>
            <div className="field">
              <h6>Tip constructie</h6>
              <select defaultValue={characteristics.constructionType}
                datacontainer="characteristics"
                name="constructionType" >
                {configs.constructionType.map(elem => {
                  return <option key={elem._id} value={elem}>{elem}</option>
                })}
              </select>
            </div>
            <div className="field">
              <h6>Risc seismic</h6>
              <select defaultValue={characteristics.seismicRisk}
                datacontainer="characteristics"
                name="seismicRisk" >
                {configs.seismicRisk.map(elem => {
                  return <option key={elem._id} value={elem}>{elem}</option>
                })}
              </select>
            </div>

            <div className="field">
              <h6>Nr. etaje imobil</h6>
              <input defaultValue={characteristics.numberofFloors}
                datacontainer="characteristics"
                type="text" name="numberOfFloors" />
            </div>
            <div className="field">
              <h6>Nr. subsoluri</h6>
              <input defaultValue={characteristics.characteristics}
                datacontainer="characteristics"
                type="text" name="lowerGroundFloor" />
            </div>
            <div className="checkbox">
              <input checked={isCheckedSingle(characteristics.historicalMonument)}
                // checked={characteristics.historicalMonument ? true : false}
                datacontainer="characteristics"
                type="checkbox" name="historicalMonument" />
              <h6>Monument istoric</h6>
            </div>
            <div className="checkbox">
              <input datacontainer="characteristics"
                type="checkbox" name="thermalRehabilitation" />
              <h6>Reabilitare termic</h6>
            </div>
            <div className="checkbox">
              <input datacontainer="characteristics"
                type="checkbox" name="consolidatedBuilding" />
              <h6>Imobil consolidatc</h6>
            </div>
            <div className="checkbox">
              <input datacontainer="characteristics"
                type="checkbox" name="attic" value="attic" />
              <h6>Pod</h6>
            </div>
          </div>
        </div>
        {/* End of Characteristics */}

        {/* Facilities key */}
        <div className="features">
          <h4>Dotari si utilitati</h4>
          <div className="features-container">
            <div 
              className="features-col">
              <h5>Dotari</h5>
              {configs.features.map((elem) => {
                console.log('features')
                console.log(characteristics.facilities.features)
                // console.log(event.target.value)
                // const { value, checked } = event.target
                // console.log(checked)
                return <div 
                  key={elem._id} className="checkbox">
                  <input checked={isChecked(characteristics.facilities.features, elem)}
                    datacontainer="facilities"
                    type="checkbox" name="features" value={elem}  />
                  <h6>{elem}</h6>

                </div>
              })}

              <h5>Amenajare strazi</h5>
              {configs.streetFacilities.map((elem) => {
                return <div key={elem._id} className="checkbox">
                  <input checked={isChecked(characteristics.facilities.streetFacilities, elem)}
                    datacontainer="facilities"
                    type="checkbox" name="streetFacilities" value={elem} />
                  <h6>{elem}</h6>
                </div>
              })}
              <h5>Utilitati generale</h5>
              {configs.generalUtilities.map((elem) => {
                return <div key={elem._id} className="checkbox">
                  <input checked={isChecked(characteristics.facilities.generalUtilities, elem)}
                    datacontainer="facilities"
                    type="checkbox" name="generalUtilities" value={elem} />
                  <h6>{elem}</h6>
                </div>
              })}
              <h5>Izolatii termice</h5>
              {configs.insulation.map((elem) => {
                return <div key={elem._id} className="checkbox">
                  <input checked={isChecked(characteristics.facilities.insulation, elem)}
                    datacontainer="facilities"
                    type="checkbox" name="insulation" value={elem} />
                  <h6>{elem}</h6>
                </div>
              })}
            </div>
            <div className="features-col">
              <h5>Dotari imobil</h5>
              {configs.realEstateFacilities.map((elem) => {
                return <div key={elem._id} className="checkbox">
                  <input checked={isChecked(characteristics.facilities.realEstateFacilities, elem)}
                    datacontainer="facilities"
                    type="checkbox" name="realEstateFacilities" value={elem} />
                  <h6>{elem}</h6>
                </div>
              })}
              <h5>Parcare</h5>
              {configs.parking.map((elem) => {
                return <div key={elem._id} className="checkbox">
                  <input checked={isChecked(characteristics.facilities.parking, elem)}
                    datacontainer="facilities"
                    type="checkbox" name="parking" value={elem} />
                  <h6>{elem}</h6>
                </div>
              })}
              <h5>Sistem incalzire</h5>
              {configs.heatingSystem.map((elem) => {
                return <div key={elem._id} className="checkbox">
                  <input checked={isChecked(characteristics.facilities.heatingSystem, elem)}
                    datacontainer="facilities"
                    type="checkbox" name="heatingSystem" value={elem} />
                  <h6>{elem}</h6>
                </div>
              })}

            </div>
            <div className="features-col">
              <h5>Usa intrare</h5>
              {configs.doorEntry.map((elem) => {
                return <div key={elem._id} className="checkbox">
                  <input checked={isChecked(characteristics.facilities.doorEntry, elem)}
                    datacontainer="facilities"
                    type="checkbox" name="doorEntry" value={elem} />
                  <h6>{elem}</h6>
                </div>
              })}
              <h5>Pereti</h5>
              {configs.walls.map((elem) => {
                return <div key={elem._id} className="checkbox">
                  <input checked={isChecked(characteristics.facilities.walls, elem)}
                    datacontainer="facilities"
                    type="checkbox" name="walls" value={elem} />
                  <h6>{elem}</h6>
                </div>
              })}
              <h5>Mobilat</h5>
              {configs.furnished.map((elem) => {
                return <div key={elem._id} className="checkbox">
                  <input checked={isChecked(characteristics.facilities.furnished, elem)}
                    datacontainer="facilities"
                    type="checkbox" name="furnished" value={elem} />
                  <h6>{elem}</h6>
                </div>
              })}
              <h5>Bucatarie</h5>
              {configs.kitchenType.map((elem) => {
                return <div key={elem._id} className="checkbox">
                  <input checked={isChecked(characteristics.facilities.kitchenType, elem)}
                    datacontainer="facilities"
                    type="checkbox" name="kitchenType" value={elem} />
                  <h6>{elem}</h6>
                </div>
              })}
              <h5>Ferestre</h5>
              {configs.windows.map((elem) => {
                return <div key={elem._id} className="checkbox">
                  <input checked={isChecked(characteristics.facilities.windows, elem)}
                    datacontainer="facilities"
                    type="checkbox" name="windows" value={elem} />
                  <h6>{elem}</h6>
                </div>
              })}
              <h5>Contorizare</h5>
              {configs.meters.map((elem) => {
                return <div key={elem._id} className="checkbox">
                  <input checked={isChecked(characteristics.facilities.meters, elem)}
                    datacontainer="facilities"
                    type="checkbox" name="meters" value={elem} />
                  <h6>{elem}</h6>
                </div>
              })}
            </div>
            <div className="features-col">
              <h5>Usa interior</h5>
              {configs.interiorDoors.map((elem) => {
                return <div key={elem._id} className="checkbox">
                  <input checked={isChecked(characteristics.facilities.interiorDoors, elem)}
                    datacontainer="facilities"
                    type="checkbox" name="interiorDoors" value={elem} />
                  <h6>{elem}</h6>
                </div>
              })}
              <h5>Podele</h5>
              {configs.floorType.map((elem) => {
                return <div key={elem._id} className="checkbox">
                  <input checked={isChecked(characteristics.facilities.floorType, elem)}
                    datacontainer="facilities"
                    type="checkbox" name="floorType" value={elem} />
                  <h6>{elem}</h6>
                </div>
              })}
              <h5>Alte spatii</h5>
              {configs.otherSpaces.map((elem) => {
                return <div key={elem._id} className="checkbox">
                  <input checked={isChecked(characteristics.facilities.otherSpaces, elem)}
                    datacontainer="facilities"
                    type="checkbox" name="otherSpaces" value={elem} />
                  <h6>{elem}</h6>
                </div>
              })}
              <h5>Priveliste</h5>
              {configs.view.map((elem) => {
                return <div key={elem._id} className="checkbox">
                  <input checked={isChecked(characteristics.facilities.view, elem)}
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
          <textarea defaultValue={characteristics.title}
            name="title" rows="2"></textarea>
        </div>
        <div className="description">
          <h5>Description</h5>
          <textarea defaultValue={characteristics.description}
            name="description" rows="10"></textarea>
        </div>
      </div>

    </div>
  </form> : null
}



export default ApartmentCharacteristics