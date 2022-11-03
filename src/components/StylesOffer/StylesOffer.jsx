import React from 'react'
import styles from './StylesOffer.module.css'
import OfficeStyle from './assets/OfficeStyle.png'
import PartyStyle from './assets/PartyStyle.png'
import ButtonMain from '../ButtonMain/ButtonMain'
import useBreakpoint from '../../shared/hooks/useBreakpoint'


const StylesOffer = () => {
  const bp = useBreakpoint();

  return (
  <div className={`${styles.StylesWrapper}`}>
    <div className={`${styles.StylesOffer} container-outer`}>
      <div  style={ {gridTemplateColumns : bp.lessThan("md") ? "repeat(1, minmax(0, 1fr))" : bp.lessThan("lg") ? "repeat(2, minmax(0, 1fr))" : "repeat(3, minmax(0, 1fr))" }} 
            className={`${styles.gridContainer}`}>
        <div className={`${styles.OfficeStyle}`}>
          <img src={OfficeStyle} alt="" />
          <div className={`${styles.OfficeContainer}`}>
            <div className={`${bp.lessThan("xl") ? 
              styles.Officetext_SM : 
              styles.Officetext_LG}
              ${ styles.Officetext}`} >
                Office Style 
            </div>
            <div className={`${bp.lessThan("xl") ? 
              styles.OfficetextBtn_SM : 
              styles.OfficetextBtn_LG}
              ${ styles.OfficetextBtn}`}>Shop now</div>
          </div>

          </div>

        { bp.lessThan("lg") || <div className={`${styles.Fifty}`}>
              <div className={`${styles.FiftyContainer}`}>
                <h2>50% Offer</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam
                  rem apriam eaque ipsa quae ab illo inventore
                </p>
                <ButtonMain border="light" text='Flase Sale' variant='light' weight='' />
              </div>
      </div>}

      <div className={`${styles.PartyStyle}`}>
          <img src={PartyStyle} alt="" />
          <div className={`${styles.PartyContainer}`}>
            <div className={`${bp.lessThan("xl") ? 
              styles.Partytext_SM : 
              styles.Partytext_LG }
              ${styles.Partytext}`} >
                Party Style 
            </div>
            <div className={`${bp.lessThan("xl") ? 
              styles.PartytextBtn_SM : 
              styles.PartytextBtn_LG }
              ${ styles.PartytextBtn}`}>
                Shop now
            </div>
          </div>
      </div>
      </div>
    </div>
    
  </div>
  )
}

export default StylesOffer