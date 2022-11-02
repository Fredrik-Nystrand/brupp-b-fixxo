import React from "react"
import styles from "./PaginationButton.module.css"
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"

const PaginationButton = ({ type, pageNumber, onClick, active, variation, className }) => {
  return (
    <div
      className={`${styles.wrapper} ${active && styles.active}  ${styles[variation]} ${className}`}
      onClick={onClick}>
      {type === "prev" ? (
        <BiChevronLeft className={`${styles.arrow}`} />
      ) : (
        type === "next" && <BiChevronRight className={`${styles.arrow}`} />
      )}
      {pageNumber}
    </div>
  )
}

export default PaginationButton
