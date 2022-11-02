import React from "react"
import { IoStarSharp } from "react-icons/io5"
import styles from "./Rating.module.css"

const Rating = ({ min = 0, max = 5, value, className }) => {
  const getPercentage = (maxRating, currentRating) => {
    return (currentRating / maxRating) * 100
  }

  return (
    <div className={`${styles.wrapper} ${className}`}>
      <div className={`${styles.starsBackground}`}>
        {[...Array(max)].map((star, index) => (
          <IoStarSharp key={index} />
        ))}
      </div>
      <div className={`${styles.foregroundWrapper}`}>
        <div
          className={`${styles.starsForeground}`}
          style={{ width: getPercentage(max, value) + "%" }}>
          {[...Array(max)].map((star, index) => (
            <IoStarSharp key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Rating
