import { useEffect, useState, useCallback } from "react"

function usePaginate() {
  const [arrayToPaginate, setArrayToPaginate] = useState()
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(15)
  const [paginatedItems, setPaginatedItems] = useState()
  const [totalPages, setTotalPages] = useState([])
  const offset = (currentPage - 1) * itemsPerPage

  useEffect(() => {
    if (arrayToPaginate) {
      setPaginatedItems(arrayToPaginate.slice(offset).slice(0, itemsPerPage))
      setTotalPages(Math.ceil(arrayToPaginate.length / itemsPerPage))
    }
  }, [arrayToPaginate, currentPage, itemsPerPage, offset, setPaginatedItems, setTotalPages])

  const nextPage = useCallback(() => {
    return totalPages > currentPage ? setCurrentPage(currentPage + 1) : null
  }, [currentPage, totalPages])

  const previousPage = useCallback(() => {
    return currentPage - 1 ? setCurrentPage(currentPage - 1) : null
  }, [currentPage])

  const getTotalItems = useCallback(() => {
    return arrayToPaginate.length
  }, [arrayToPaginate])

  const getTotalPages = useCallback(() => {
    return totalPages
  }, [totalPages])

  const getCurrentPage = useCallback(() => {
    return currentPage
  }, [currentPage])

  const getPageItems = useCallback(() => {
    return paginatedItems
  }, [paginatedItems])

  const getArrayLength = useCallback(() => {
    if (arrayToPaginate) {
      return arrayToPaginate.length
    }
  }, [arrayToPaginate])

  return {
    setArrayToPaginate,
    setItemsPerPage,
    setCurrentPage,
    nextPage,
    previousPage,
    getTotalItems,
    getTotalPages,
    getCurrentPage,
    getPageItems,
    getArrayLength,
  }
}

export default usePaginate
