import React, { useState, useEffect } from 'react'
import { squareMeters, thousandsSeparators } from '../utilities/Utilities'


const ApartmentPrice = ({ handleChange, state }) => {

  const [saleRent, setSaleRent] = useState('Sale')
  const [priceSqm, setPriceSqm] = useState()
  const [price, setPrice] = useState()


  const handleSale = () => {
    setSaleRent('Sale')
  }

  const handleRent = () => {
    setSaleRent('Rent')
  }

  const { priceForSale } = state

  useEffect(() => {
    const { price } = priceForSale
    if (price) {
      setPrice(thousandsSeparators(price))
      const resultSqM = squareMeters(price, state.builtArea)      
      setPriceSqm(resultSqM.toLocaleString().toString())
    } else {
      setPriceSqm('')
      setPrice('')
    } 
  })
  

  return <div className="container-price">
    <form onChange={event => handleChange(event)}>
      <section className="sale-rent">
        <div onClick={() => handleSale()}
          className={`${saleRent === 'Sale' ? 'sale border-bottom' : 'sale'}`}>
          <h4>Vanzare</h4>

        </div>
        <div onClick={() => handleRent()}
          className={`${saleRent === 'Rent' ? 'rent border-bottom' : 'rent'}`}>
          <h4>Inchiriere</h4>
        </div>
      </section>
      <div className="sale-content">
        <div className="columns-p-s">
          <div className="column-p-s">
            <div className="row-p-s">
              <div className="field">
                <h6>Pret vanzare (€)</h6>              
                <input type="text" name="price"
                  datacontainer="priceForSale"
                  value={price || ''}
                  defaultValue={priceForSale.price}
                />
              </div>
              <div className="field">
                <h6>Ultimul pret vanzare (€)</h6>              
                <input type="text" name="lowerPrice"
                  datacontainer="priceForSale"
                  defaultValue={priceForSale.lowerPrice} />
              </div>

            </div>
            <div className="row-p-s">
              <div className="field">
                <h6>Pret vanzare mp (€)</h6>              
                <input type="text" name="priceSqm"
                  datacontainer="priceForSale"
                  defaultValue={priceSqm}/>
              </div>
              <div className="field">                
                <input className="checkbox" type="checkbox" name="negociable"
                  datacontainer="priceForSale"
                  defaultValue={priceSqm} />
                <h6>Pret vanzare negociabil</h6> 
              </div>
            </div>
            <div className="row-p-s">
              <div className="field">
                <h6>TVA</h6>
                <select defaultValue={priceForSale.VAT}
                  datacontainer="priceForSale"
                  name="VAT"> 
                  <option selected disabled hidden>--------</option>
                  <option >Nu se aplica TVA</option>
                  <option >TVA inclus</option>
                  <option >+ 5% TVA</option>
                  <option >+ 19% TVA</option>
                </select>                 
              </div>
              <div className="field">   
                <h6>Tip proprietar</h6>
                <select defaultValue={priceForSale.lanlord}
                  datacontainer="priceForSale"
                  name="lanlord"> 
                  <option selected disabled hidden>--------</option>
                  <option>Persoana fizica</option>
                  <option>Persoana juridica</option>
                </select>              
              </div>
            </div>
          </div>
          <h5>Comision de la proprietar la vanzare</h5>
          <div className="column-p-s">
            <div className="row-p-s">

            </div>
            <div className="row-p-s"></div>
            <div className="row-p-s"></div>
          </div>
          <div className="column-p-s">
            <div className="row-p-s"></div>
            <div className="row-p-s"></div>
            <div className="row-p-s"></div>
          </div>

        </div>
      </div>
    </form>
  </div>

}


export default ApartmentPrice