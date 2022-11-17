import React from 'react'
import styles from '../ShoppingReturns/ShoppingReturns.module.css'
import useBreakPoints from '../../../../shared/hooks/useBreakpoint'


const ShoppingReturns = () => {
  const bp = useBreakPoints();

  return (
    <div>
      <p className='pb1'style={{paddingInline: bp.lessThan("lg") ? `1rem` : ``}}>Too end instrument possession contrasted motionless. Calling offence six joy feeling. Coming merits and was talent enough far. Sir joy northward sportsmen education. Discovery incommode earnestly no he commanded if. Put still any about manor heard. </p>
    </div>
  )
}

export default ShoppingReturns