import React, { useState } from 'react'
import styles from '../InfoView/InfoView.module.css'
import Description from './Description/Description'
import ShoppingReturns from './ShoppingReturns/ShoppingReturns'
import useBreakPoints from '../../../shared/hooks/useBreakpoint'

const InfoView = () => {
  const bp = useBreakPoints();
  const [showAll, setShowAll] = useState(false)

  return (
    <div className={`${styles.info_wrapper}`}>

        <div className={`${styles.dflex}`} 
        style={{
          padding: bp.lessThan("lg") ? `1rem` : ``
        }}>
            <div className={`${styles.btn_toggle}`}>
                <a href='#' onClick={() => setShowAll(true)} className={showAll ? `${styles.link_active}` : `${styles.link} `}>Description</a>
                <a href='#' onClick={() => setShowAll(false)} className={showAll ?`${styles.link}` : `${styles.link_active}`}>Shopping & Returns</a>
            </div>
            {bp.moreThan("lg") && <div className={`${styles.line}`}></div>}
        </div>
        
        { showAll ? <Description/> : <ShoppingReturns/>  }
    </div>
  )
}

export default InfoView