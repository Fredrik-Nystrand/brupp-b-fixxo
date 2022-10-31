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
            onClick={() => paginationHook.setCurrentPage(index)}></PaginationButton>,
        ])
      }
    }
  }, [
    paginationHook.getTotalPages,
    paginationHook.getCurrentPage,
    paginationHook.setCurrentPage,
    paginationHook,
  ])

  return (
    <>
      {showPagination && variation === "big" && (
        <div className={`${styles.wrapper} ${styles[variation]} ${className}`}>
          <PaginationButton type="prev" onClick={() => paginationHook.previousPage()} />
          {paginationElements}
          <PaginationButton type="next" onClick={() => paginationHook.nextPage()} />
        </div>
      )}
      {showPagination && variation === "small" && (
        <div className={`${styles.wrapper} ${styles[variation]} ${className}`}>
          <PaginationButton
            type="prev"
            variation={variation}
            onClick={() => paginationHook.previousPage()}
          />
          <PaginationButton
            type="next"
            variation={variation}
            onClick={() => paginationHook.nextPage()}
          />
        </div>
      )}
    </>
  )
}

export default Pagination
