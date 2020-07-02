import React from 'react'



const ApartmentLocationImages = ({ handleChangeLocation, handleSubmitLocation, handleImageChange, handleImageSubmit, state }) => {

  // const [images, setimages] = useState([])
  // console.log(images)
  // const handleImageChange = (event) => {
  //   console.log(event, 'images')
  //   setimages(event.target.files)
  // }
  console.log(state.images)


  return <div className="location-container">
    <div className="wrap-container">

      <section className="section-container ">
        <div className="address-container">
          <h4>Adresa Proprietate</h4>
          <form id="form"
            onChange={(event) => handleChangeLocation(event)}
            // onSubmit={(event) => handleSubmitLocation(event)}
          >
            <div className="form-group col-md-10">
              <input datacontainer="address"
                name="county"
                type="text" className="form-control" placeholder="Judet" />
            </div>
            <div className="form-group col-md-10">
              <input datacontainer="address"
                name="town"
                type="text" className="form-control" placeholder="Localitate" />
            </div>
            <div className="form-group col-md-10">
              <input datacontainer="address"
                name="street"
                type="text" className="form-control" placeholder="Strada" />
            </div>
            <div className="form-group col-md-10">
              <input datacontainer="address"
                name="streetNumber"
                type="text" className="form-control" placeholder="Numar strada" />
            </div>
            {/*If apartment is selected  */}
            <div className="form-group col-md-10">
              <input datacontainer="address"
                type="text" className="form-control" placeholder="Apartament" />
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
          <form onSubmit={ event => handleImageSubmit(event)}
            encType='mutipart/form-data' id="form_i">       
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


export default ApartmentLocationImages