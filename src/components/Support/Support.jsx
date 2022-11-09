import React from "react"
import styles from "./Support.module.css"
import support from "../../assets/support/customer.svg"
import payment from "../../assets/support/payment.svg"
import truck from "../../assets/support/truck.svg"
import useBreakpoint from "../../shared/hooks/useBreakpoint"

const Support = () => {
  const bp = useBreakpoint()

  return (
    <div className={`${styles.grid}`} style={{
      gridTemplateColumns: bp.lessThan("md")
      ? `repeat(1, minmax(0, 1fr))`
      : bp.moreThan("md")
      ? `repeat(4, minmax(0, 1fr))`
      : `repeat(2, minmax(0, 1fr))`
    }}>
      <div className={`${styles.card} ${styles.center}`}>
        <div className={`${styles.bg_img} ${styles.d_flex}`}>
          <img src={support} alt="customer-service" />
        </div>
        <h3>Customer Support</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, temporibus.</p>
      </div>

      <div className={`${styles.card} ${styles.center}`}>
        <div className={`${styles.bg_img} ${styles.d_flex}`}>
          <img src={payment} alt="credit-card" />
        </div>
        <h2>Secured Payment</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, temporibus.</p>
      </div>

      <div className={`${styles.card} ${styles.center}`}>
        <div className={`${styles.bg_img} ${styles.d_flex} `}>
          <img src={truck} alt="truck" />
        </div>
        <h3>Free Home Delivery</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, temporibus.</p>
      </div>

      <div className={`${styles.card} ${styles.center}`}>
        <div className={`${styles.bg_img} ${styles.d_flex}`}>
          <img src={truck} alt="truck" />
        </div>
        <h3>30 Day Returns</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, temporibus.</p>
      </div>
    </div>
  )
}

export default Support
