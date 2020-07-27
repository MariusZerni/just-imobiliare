import React from 'react'


const PropertyLocationImages = ({ handlelocationChange, handleImageChange, state, location }) => {

  console.log('apartment location ', location)

  return <div className="location-container">
    <div className="wrap-container">

      <section className="section-container ">
        <div className="address-container">
          <h4>Adresa Proprietate</h4>
          <form onChange={(event) => handlelocationChange(event)}
          >
            <div className="form-group col-md-10"> 
              <input 
                value={location && location.county ? location.county : null}
                datacontainer="address"
                name="county"
                type="text" className="form-control" placeholder="Judet" />
            </div>
            <div className="form-group col-md-10">
              <input datacontainer="address"
                value={location && location.town ? location.town : null}
                name="town"
                type="text" className="form-control" placeholder="Localitate" />
            </div>
            <div className="form-group col-md-10">
              <input datacontainer="address"
                value={location && location.street ? location.street : null}
                name="street"
                type="text" className="form-control" placeholder="Strada" />
            </div>
            <div className="form-group col-md-10">
              <input datacontainer="address"
                value={location && location.streetNumber ? location.streetNumber : null}
                name="streetNumber"
                type="text" className="form-control" placeholder="Numar strada" />
            </div> 
            {/*If apartment is selected  */}
            <div className="form-group col-md-10">
              <input datacontainer="address"
                type="text" className="form-control" placeholder="Scara" />
            </div>
            <div className="form-group col-md-10">
              <input datacontainer="address"
                type="text" className="form-control" placeholder="Numar apartament" />
            </div>
            <div className="form-group col-md-10">
              <textarea datacontainer="address"
                name="moreDetails"
                type="text" className="form-control" placeholder="Alte detalii" />
            </div>
          </form>
        </div>
      </section>
      <section className="section-container">
        {/* <h4>Adauga imagini</h4> */}
        <div className="image-container">
          <form encType='multipart/form-data'>       
            <label> Adauga imagini
              <input onChange={event => handleImageChange(event)}
                name="file"
                type="file" size="60"
                accept="image/png, image/jpeg"
                multiple
              />
            </label>
          </form>
        </div>
        <div className="img-wrapper">
          {state.images && state.images.map(image => {
            return <div key={image._id} className="image-content"
              style={{ backgroundImage: `url(${image})` }}>

            </div>
          })}
        </div>

      </section>

    </div>
  </div>

}


export default PropertyLocationImages