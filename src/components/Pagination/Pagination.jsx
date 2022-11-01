import { useState, useEffect } from "react"
import PaginationButton from "./PaginationButton/PaginationButton"
import styles from "./Pagination.module.css"

const Pagination = ({
  paginationHook,
  showPagination = true,
  variation = "big",
  itemsPerPage = 10,
  className,
}) => {
  const [paginationElements, setPaginationElements] = useState([])

  useEffect(() => {
    paginationHook.setItemsPerPage(itemsPerPage)
  }, [itemsPerPage])

  useEffect(() => {
    if (paginationHook.getTotalPages() && paginationHook.getCurrentPage()) {
      setPaginationElements([])
      for (let index = 1; index <= paginationHook.getTotalPages(); index++) {
        setPaginationElements((state) => [
          ...state,
          <PaginationButton
            pageNumber={index.toString().length === 1 ? "0" + index : index}
            key={index}
            active={index === paginationHook.getCurrentPage()}
            onClick={() => goToPage(index)}></PaginationButton>,
        ])
      }
    }
  }, [
    paginationHook.getTotalPages,
    paginationHook.getCurrentPage,
    paginationHook.setCurrentPage,
    paginationHook,
  ])

  const goToPage = (page) => {
    paginationHook.setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const prev = () => {
    paginationHook.previousPage()
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const next = () => {
    paginationHook.nextPage()
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      {showPagination && variation === "big" && (
        <div className={`${styles.wrapper} ${styles[variation]} ${className}`}>
          <PaginationButton type="prev" onClick={() => prev()} />
          {paginationElements}
          <PaginationButton type="next" onClick={() => next()} />
        </div>
      )}
      {showPagination && variation === "small" && (
        <div className={`${styles.wrapper} ${styles[variation]} ${className}`}>
          <PaginationButton type="prev" variation={variation} onClick={() => prev()} />
          <PaginationButton type="next" variation={variation} onClick={() => next()} />
        </div>
      )}
    </>
  )
}

export default Pagination
