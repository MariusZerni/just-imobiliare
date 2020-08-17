import React, { useState, useEffect, useContext } from 'react'
import { ContractSigningDate } from './Context'
import { squareMeters, thousandsSeparators } from '../utilities/Utilities'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'


const PropertyPrice = ({ handleChange, formState }) => {

  const [saleRent, setSaleRent] = useState('Sale')

  const [priceSqm, setPriceSqm] = useState()
  const [price, setPrice] = useState()

  const { priceForSale, priceForRenting } = formState

  const { formattedDate, setFormattedDate } = useContext(ContractSigningDate)
  const [signingDate, setSigningDate] = useState(formattedDate && formattedDate.contractSigningDate ? new Date(formattedDate.contractSigningDate) : null)
  const [expiringDate, setExpiringDate] = useState(formattedDate && formattedDate.contractExpiringDate ? new Date(formattedDate.contractExpiringDate) : null)

  console.log('formattedDate', formattedDate)
  console.log('signing date', signingDate)

  const handleChangeDate = (event, name) => {
    const date = event.toLocaleDateString('en-CA', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    })

    console.log('handleChangeDate', date)
    console.log('XXXXXXXX')


    if (saleRent === 'Sale') {
      if (formattedDate && formattedDate.priceForSale) {
        setFormattedDate({ ...formattedDate, priceForSale: { ...formattedDate.priceForSale, [name]: date } })
      } else {
        setFormattedDate({ ...formattedDate, priceForSale: { [name]: date } })
      }
    } else if (saleRent === 'Rent')
      if (formattedDate && formattedDate.priceForRent) {
        setFormattedDate({ ...formattedDate, priceForRent: { ...formattedDate.priceForSale, [name]: date } })
      } else {
        setFormattedDate({ ...formattedDate, priceForRent: { [name]: date } })

      }
  }


  useEffect(() => {
    const { price } = priceForSale
    if (price) {
      setPrice(thousandsSeparators(price))
      const resultSqM = squareMeters(price, formState.builtArea)
      console.log('result sqm', resultSqM)
      setPriceSqm(resultSqM.toLocaleString().toString())
    } else {
      setPriceSqm('')
      setPrice('')
    }
  })


  return <div className="container-price">
    <form onChange={event => handleChange(event)}>
      <section className="sale-rent">
        <div onClick={() => setSaleRent('Sale')}
          className={`${saleRent === 'Sale' ? 'sale border-bottom' : 'sale'}`}>
          <h4>Vanzare</h4>

        </div>
        <div onClick={() => setSaleRent('Rent')}
          className={`${saleRent === 'Rent' ? 'rent border-bottom' : 'rent'}`}>
          <h4>Inchiriere</h4>
        </div>
      </section>
      {saleRent === 'Sale' && <div className="sale-content">
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
                  defaultValue={priceSqm} />
              </div>
              <div className="field">
                <input className="checkbox" type="checkbox" name="negociable"
                  datacontainer="priceForSale"
                  defaultChecked={priceForSale.negociable} />
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
          <div className="subtitle">
            <h5>Comision de la proprietar la vanzare</h5>
          </div>
          <div className="column-p-s">
            <div className="row-p-s">
              <div className="field">
                <h6>Nr contract vanzare</h6>
                <input type="text" name="contractNumber"
                  datacontainer="priceForSale"
                  defaultValue={priceForSale.contractNumber} />
              </div>
              <div className="field">
                <h6>Data semnare contract</h6>
                <DatePicker
                  autoComplete="off"
                  name="contractSigningDate"
                  dateFormat='dd/MM/yyyy'
                  onChange={event => {
                    setSigningDate(event)
                    handleChangeDate(event, 'contractSigningDate')
                  }}
                  selected={signingDate} />
              </div>
              <div className="field">
                <h6>Data expirare contract</h6>
                <DatePicker
                  autoComplete="off"
                  name="contractExpiringDate"
                  dateFormat='dd/MM/yyyy'
                  onChange={event => {
                    setExpiringDate(event)
                    handleChangeDate(event, 'contractExpiringDate')
                  }}
                  selected={expiringDate} />
              </div>
            </div>
            <div className="row-p-s">
              <div className="field">
                <h6>Comision proprietar(€)</h6>
                <input type="text" name="lanlordComission"
                  datacontainer="priceForSale"
                  defaultValue={priceForSale.lanlordComission} />
              </div>
              <div className="field">
                <h6>Comision proprietar(%)</h6>
                <input type="text" name="lanlordComssionPercentage"
                  datacontainer="priceForSale"
                  defaultValue={priceForSale.lanlordComssionPercentage} />
              </div>
            </div>
            <div className="row-p-s">
              <div className="field">
                <input className="checkbox" type="checkbox" onChange={() => { }} name="exclusive"
                  datacontainer="priceForSale"
                  defaultChecked={priceForSale.exclusive} />
                <h6>Reprezentare exclusiva</h6>
              </div>
              <div className="field">
                <input className="checkbox" type="checkbox" onChange={() => { }} name="intermediation"
                  datacontainer="priceForSale"
                  defaultChecked={priceForSale.intermediation} />
                <h6>Intermediere exclusiva</h6>
              </div>
            </div>
          </div>
          <div className="subtitle">
            <h5>Colaborare la vanzare</h5>
          </div>
          <div className="column-p-s">
            <div className="row-p-s">
              <div className="field">
                <h6>Comision inchiriere (€)</h6>
                <input type="text" name="comissionOnCollab"
                  datacontainer="priceForSale"
                  defaultValue={priceForSale.comissionOnCollab} />

              </div>
            </div>
            <div className="row-p-s">
              <div className="field">
                <h6>Comision inchiriere (%)</h6>
                <input type="text" name="comissionOnCollabPercent"
                  datacontainer="priceForSale"
                  defaultValue={priceForSale.comissionOnCollabPercent} />
              </div>
            </div>
          </div>
        </div>
      </div>}
      {saleRent === 'Rent' && <div className="sale-content">
        <div className="columns-p-s">
          <div className="column-p-s">
            <div className="row-p-s">
              <div className="field">
                <h6>Pret chirie luna (€)</h6>
                <input type="text" name="pricePerMounth"
                  datacontainer="priceForRenting"
                  defaultValue={priceForRenting.pricePerMounth}
                />
              </div>
              <div className="field">
                <h6>Ultimul pret inchiriere (€)</h6>
                <input type="text" name="lastPrice"
                  datacontainer="priceForRenting"
                  defaultValue={priceForRenting.lastPrice} />
              </div>
            </div>
            <div className="row-p-s">
              <div className="field">
                <h6>Garantie</h6>
                <input type="text" name="deposit"
                  datacontainer="priceForRenting"
                  defaultValue={priceForRenting.deposit} />
              </div>
              <div className="field">
                <h6>Tip proprietar</h6>
                <select defaultValue={priceForRenting.lanlord}
                  datacontainer="priceForRenting"
                  name="lanlord">
                  <option selected disabled hidden>--------</option>
                  <option >Persoana fizica</option>
                  <option >Persoana juidica</option>
                </select>
              </div>
            </div>
            <div className="row-p-s">
              <div className="field">
                <h6>TVA</h6>
                <select defaultValue={priceForRenting.VAT}
                  datacontainer="priceForRenting"
                  name="VAT">
                  <option selected disabled hidden>--------</option>
                  <option >Nu se aplica TVA</option>
                  <option >TVA inclus</option>
                  <option >+ 5% TVA</option>
                  <option >+ 19% TVA</option>
                </select>
              </div>

            </div>
          </div>
          <div className="subtitle">
            <h5>Comision de la proprietar la inchiriere</h5>
          </div>
          <div className="column-p-s">
            <div className="row-p-s">
              <div className="field">
                <h6>Nr contract inchiriere</h6>
                <input type="text" name="contractNumber"
                  datacontainer="priceForRenting"
                  defaultValue={priceForRenting.contractNumber} />
              </div>
              <div className="field">
                <h6>Data semnare contract</h6>
                <DatePicker
                  autoComplete="off"
                  name="contractSigningDate"
                  dateFormat='dd/MM/yyyy'
                  onChange={event => {
                    setSigningDate(event)
                    handleChangeDate(event, 'contractSigningDate')
                  }}
                  selected={signingDate} />
              </div>
              <div className="field">
                <h6>Data expirare contract</h6>
                <DatePicker
                  autoComplete="off"
                  name="contractExpiringDate"
                  dateFormat='dd/MM/yyyy'
                  onChange={event => {
                    setExpiringDate(event)
                    handleChangeDate(event, 'contractExpiringDate')
                  }}
                  selected={expiringDate} />
                {/* <input type="text" name="contractExpiringDate"
                  datacontainer="priceForRenting"
                  defaultValue={priceForRenting.contractExpiringDate} /> */}
              </div>
            </div>
            <div className="row-p-s">
              <div className="field">
                <h6>Comision proprietar(€)</h6>
                <input type="text" name="lanlordComision"
                  datacontainer="priceForRenting"
                  defaultValue={priceForRenting.lanlordComision} />
              </div>
              <div className="field">
                <h6>Comision proprietar(%)</h6>
                <input type="text" name="lanlordCommissionPercentage"
                  datacontainer="priceForRenting"
                  defaultValue={priceForRenting.lanlordCommissionPercentage} />
              </div>
            </div>
            <div className="row-p-s">
              <div className="field">
                <input className="checkbox" type="checkbox" onChange={() => { }} name="exclusive"
                  datacontainer="priceForRenting"
                  defaultChecked={priceForRenting.exclusive} />
                <h6>Reprezentare exclusiva</h6>
              </div>
              <div className="field">
                <input className="checkbox" type="checkbox" onChange={() => { }} name="intermediation"
                  datacontainer="priceForRenting"
                  defaultChecked={priceForRenting.intermediation} />
                <h6>Intermediere exclusiva</h6>
              </div>
            </div>
          </div>
          <div className="subtitle">
            <h5>Colaborare la inchiriere</h5>
          </div>
          <div className="column-p-s">
            <div className="row-p-s">
              <div className="field">
                <h6>Comision inchiriere (€)</h6>
                <input type="text" name="commissionCurrency"
                  datacontainer="priceForSale"
                  defaultValue={priceForSale.commissionCurrency} />
              </div>
            </div>
            <div className="row-p-s">
              <div className="field">
                <h6>Comision inchiriere (%)</h6>
                <input type="text" name="commissionPercentage"
                  datacontainer="priceForSale"
                  defaultValue={priceForSale.commissionPercentage} />
              </div>
            </div>
          </div>
        </div>
      </div>}
    </form>
  </div>

}


export default PropertyPrice