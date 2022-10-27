import React from "react"
import styles from "./ButtonMain.module.css"

const ButtonMain = ({
  text = "",
  variant = "",
  weight = "",
  onClick,
  className,
  align = "",
  border = false,
}) => {
  return (
    <div
      className={` ${styles.btnWrapper} ${
        align === "left" ? "flex-start" : align === "right" ? "flex-end" : "flex-center"
      } ${className}`}>
      <button
        onClick={(data) => onClick(data)}
        className={`${styles.btn} ${
          variant === "dark"
            ? styles.btnDark
            : variant === "light"
            ? styles.btnLight
            : styles.btnPrimary
        } 
        ${
          border &&
          (variant === "dark"
            ? styles.borderDark
            : variant === "light"
            ? styles.borderLight
            : styles.borderPrimary)
        }
        ${
          weight === "normal"
            ? styles.weightNormal
            : weight === "bold"
            ? styles.weightBold
            : styles.weightMedium
        }`}>
        {text}
      </button>
    </div>
  )
}

export default ButtonMain
