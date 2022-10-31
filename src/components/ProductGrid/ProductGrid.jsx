import { useEffect } from "react"
import useBreakpoint from "../../shared/hooks/useBreakpoint"
import Pagination from "../Pagination/Pagination"
import ProductCard from "../ProductCard/ProductCard"
import styles from "./ProductGrid.module.css"
import usePaginate from "../../shared/hooks/usePaginate"

const ProductGrid = ({
  products,
  vertical = false,
  title = "",
  titleAlign = "center",
  showPagination = true,
  paginationStyle = "big",
  numberOfItems = 10,
  numberOfColumns = 2,
}) => {
  const bp = useBreakpoint()
  const paginate = usePaginate()

  useEffect(() => {
    paginate.setArrayToPaginate(products)
  }, [products])

  return (
    <div className={styles.wrapper}>
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
