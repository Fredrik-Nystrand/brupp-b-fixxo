import React from "react"
import InstagramCard from "../InstagramCard/InstagramCard"
import InstagramPopup from "../InstagramPopup/InstagramPopup"
import styles from "./InstagramGrid.module.css"
import useBreakpoint from "../../shared/hooks/useBreakpoint"

const Instagram = () => {
  const bp = useBreakpoint()
  let uuid = 0

  return (
    <div className={`${styles.instagram_wrapper}`}>
      <h3 className={`${styles.instagram_header}`}>Our instagram</h3>
      <div
        className={`${styles.instagram_grid}`}
        style={{
          gridTemplateColumns: bp.lessThan("md")
            ? `repeat(2, minmax(0, 1fr))`
            : bp.lessThan("lg")
            ? `repeat(4, minmax(0, 1fr))`
            : `repeat(5, minmax(0, 1fr))`,
        }}>
        {[...Array(bp.lessThan("md") ? 6 : bp.lessThan("lg") ? 8 : 10)]?.map((card) => (
          <InstagramCard key={uuid++} />
        ))}

        <div className={`${styles.instagram_popup_wrapper}`}>
          <InstagramPopup />
        </div>
      </div>
    </div>
  )
}

export default Instagram
