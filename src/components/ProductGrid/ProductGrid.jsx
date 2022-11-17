import { useEffect, useState } from "react"
import useBreakpoint from "../../shared/hooks/useBreakpoint"
import Pagination from "../Pagination/Pagination"
import ProductCard from "../ProductCard/ProductCard"
import styles from "./ProductGrid.module.css"
import usePaginate from "../../shared/hooks/usePaginate"
import useHelpers from "../../shared/hooks/useHelpers"

const ProductGrid = ({
  products,
  vertical = false,
  title = "",
  titleAlign = "center",
  showPagination = true,
  paginationStyle = "big",
  numberOfItems = 6,
  numberOfColumns = 2,
  sorting = true,
  className,
}) => {
  const bp = useBreakpoint()
  const paginate = usePaginate()
  const {
    ArrayFunctions: { sortArrayOfObjects, sortArrayOfObjectsNumber },
  } = useHelpers()

  const [sortedProducts, setSortedProducts] = useState([])

  useEffect(() => {
    if (products) {
      setSortedProducts([...products])
    }
  }, [products])

  useEffect(() => {
    paginate.setArrayToPaginate(sortedProducts)
  }, [sortedProducts])

  function handleFilter(e) {
    switch (e.target.value) {
      case "6": {
        paginate.setItemsPerPage(6)
        break
      }
      case "12": {
        paginate.setItemsPerPage(12)
        break
      }
      case "24": {
        paginate.setItemsPerPage(24)
        break
      }
      case "all": {
        paginate.setItemsPerPage(paginate.getTotalItems())
        break
      }
      default:
        break
    }
  }

  function handleSorting(e) {
    switch (e.target.value) {
      case "mostPopular": {
        setSortedProducts((state) => sortArrayOfObjects("rating", state, "DESC"))
        break
      }
      case "leastPopular": {
        setSortedProducts((state) => sortArrayOfObjects("rating", state, "ASC"))
        break
      }
      case "priceLow": {
        setSortedProducts((state) => sortArrayOfObjectsNumber("price", state, "ASC"))
        break
      }
      case "priceHigh": {
        setSortedProducts((state) => sortArrayOfObjectsNumber("price", state, "DESC"))
        break
      }
      default:
        break
    }
  }

  return (
    <div className={`${styles.wrapper} ${className}`}>
      <div
        className={`${
          titleAlign === "left" ? "flex-start" : titleAlign === "right" ? "flex-end" : "flex-center"
        } ${styles.title}`}>
        <h4>{title}</h4>
        {paginationStyle === "small" && (
          <div className={`${styles.titlePagination}`}>
            <Pagination
              paginationHook={paginate}
              showPagination={showPagination}
              variation={paginationStyle}
              itemsPerPage={numberOfItems}
            />
          </div>
        )}
      </div>
      {sorting && (
        <div
          className={`${styles.filterWrapper} ${
            bp.lessThan("sm") ? "pi1" : bp.lessThan("lg") && "pi2"
          }`}>
          <div className={`${styles.select}`}>
            <select onChange={handleSorting}>
              <option value="mostPopular">Most Popular</option>
              <option value="leastPopular">Least Popular</option>
              <option value="priceLow">Price (Low)</option>
              <option value="priceHigh">Price (High)</option>
            </select>
          </div>
          <div className={`${styles.select}`}>
            <label>Show:</label>
            <select defaultValue={numberOfItems} onChange={handleFilter}>
              <option value="6">06</option>
              <option value="12">12</option>
              <option value="24">24</option>
              <option value="all">All</option>
            </select>
          </div>
        </div>
      )}
      <div
        className={`${styles.grid} ${bp.lessThan("sm") ? "p1" : bp.lessThan("lg") && "p2"}
        `}
        style={{
          gridTemplateColumns: bp.lessThan("md")
            ? `repeat(1, minmax(0, 1fr))`
            : bp.lessThan("lg")
            ? `repeat(2, minmax(0, 1fr))`
            : `repeat(${numberOfColumns}, minmax(0, 1fr))`,
        }}>
        {paginate.getPageItems()?.map((product) => (
          <ProductCard
            vertical={vertical}
            className={`${styles.gridItem}`}
            key={product.id}
            product={product}
          />
        ))}
      </div>
      {paginationStyle === "big" && (
        <Pagination
          paginationHook={paginate}
          showPagination={showPagination}
          variation={paginationStyle}
          itemsPerPage={numberOfItems}
        />
      )}
    </div>
  )
}

export default ProductGrid
