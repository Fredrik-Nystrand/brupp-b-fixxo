import React from 'react'
import styles from './StylesOffer.module.css'
import OfficeStyle from './assets/OfficeStyle.png'
import PartyStyle from './assets/PartyStyle.png'
import ButtonMain from '../ButtonMain/ButtonMain'


const StylesOffer = () => {
  return (
    <div className={`${styles.StylesOffer} container-outer`}>
      <div className={`${styles.gridContainer}`}>
        <div className={`${styles.OfficeStyle}`}>
          <img src={OfficeStyle} alt="" />
          <div className={`${styles.Officetext}`}> Office Style </div>
          <div className={`${styles.OfficetextBtn}`}>Shop now</div>

        </div>
      <div className={`${styles.Fifty}`}>
        <div className={`${styles.FiftyContainer}`}>
          <h2>50% Offer</h2>
          <p>Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium, totam
            rem apriam eaque ipsa quae ab illo inventore</p>
          <ButtonMain border="light" text='Flase Sale' variant='light' weight='' />
        </div>
      </div>
      <div className={`${styles.PartyStyle}`}>
        <img src={PartyStyle} alt="" />
      </div>

      </div>
    </div>
  )
}

export default StylesOffer