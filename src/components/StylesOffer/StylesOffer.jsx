import React from 'react'
import styles from './StylesOffer.module.css'
import OfficeStyle from './assets/OfficeStyle.png'
import PartyStyle from './assets/PartyStyle.png'

const StylesOffer = () => {
  return (
    <div className={`${styles.StylesOffer}  container-outer`}>
      <div className={`${styles.gridContainer}`}>
      <div className={`${styles.OfficeStyle}`}>
        <img src={OfficeStyle} alt="" />
      </div>
      <div className={`${styles.Fifty}`}>
        <div className={`${styles.FiftyContainer}`}>
          <h2>50% Offer</h2>
          <p>Sedutperspiciatisundeomnisistenatuserrorsit
            voluptatemaccusantiumdoloremquelaudantium,totam
            remapriameaqueipsaquaeabilloinventore</p>
        </div>
      </div>
      <div className={`${styles.OfficeStyle}`}>
        <img src={PartyStyle} alt="" />
      </div>

      </div>
    </div>
  )
}

export default StylesOffer