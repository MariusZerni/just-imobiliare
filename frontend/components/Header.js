import React from 'react'
// import Axios from 'axios'



const Header = (props, handleLocation, handleCharacteristics, handlePrice, handleSubmit ) => {



  // const handleLocation = () => {
  //   setCurrentSelection('Location')
  // }

  // const handleCharacteristics = () => {
  //   setCurrentSelection('Characteristics')
  // }

  // const handlePrice = () => {
  //   setCurrentSelection('Price')
  // }

  return <div className="fields-container">
    {/* <div className="content">
      <button onClick={props.history.goBack} className="back-btn">Inapoi</button>
    </div> */}
    <div onClick={() => handleLocation()}
      className="content">
      <h4>Localizare / Imagini</h4>
    </div>
    <div onClick={() => handleCharacteristics()}
      className="content">
      <h4>Caracteristici</h4>
    </div>
    <div onClick={() => handlePrice()}
      className="content">
      <h4>Pret</h4>
    </div>
    <div className="content">
      <button className="button"
        onClick={event => handleSubmit(event)}
        type="submit"
        form="form">Salveaza</button>
    </div>
  </div>
}


export default Header




