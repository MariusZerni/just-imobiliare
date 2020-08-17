import React from 'react'


const LanlordDetails = ({ handleChange, formState }) => {

  console.log('form state lanlord ', formState)


  return <div className="lanlord-container">
    <form onChange={event => handleChange(event)} >
      <div className="form-group col-md-6">
        <label >Nume</label>
        <input datacontainer="lanlordDetails"
          defaultValue={formState.lanlordDetails && formState.lanlordDetails.fullName ? formState.lanlordDetails.fullName : null}
          name="fullName"
          type="text" className="form-control" />
      </div>
      <div className="form-group col-md-6">
        <label >Email</label>
        <input datacontainer="lanlordDetails"
          defaultValue={formState.lanlordDetails && formState.lanlordDetails.email ? formState.lanlordDetails.email : null}
          name="email"
          type="email" className="form-control" />
      </div>
      <div className="form-group col-md-6">
        <label >Numar de telefon</label>
        <input datacontainer="lanlordDetails"
          defaultValue={formState.lanlordDetails && formState.lanlordDetails.telephoneNumber ? formState.lanlordDetails.telephoneNumber : null}
          name="telephoneNumber"
          type="number" className="form-control" />
      </div>
      <div className="form-group col-md-6 row-md-10">
        <label >Alte detalii</label>
        <textarea datacontainer="lanlordDetails"
          defaultValue={formState.lanlordDetails && formState.lanlordDetails.moreDetails ? formState.lanlordDetails.moreDetails : null}
          name="moreDetails"
          type="number" className="form-control" />
      </div>
    </form>



  </div>
}


export default LanlordDetails