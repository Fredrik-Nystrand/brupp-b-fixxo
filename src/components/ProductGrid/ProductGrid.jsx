import React from "react"
import useBreakpoint from "../../shared/hooks/useBreakpoint"
import ProductCard from "../ProductCard/ProductCard"
import styles from "./ProductGrid.module.css"

const ProductGrid = ({ products, vertical = false, title = "" }) => {
  const bp = useBreakpoint()

  return (
    <>
      <div className={`${vertical ? "flex-start" : "flex-center"} ${styles.title}`}>
        <h4>{title}</h4>
      </div>
      <div
        className={`${styles.grid} ${
          bp.lessThan("md") ? styles.col1 : bp.lessThan("lg") ? styles.col2 : styles.col3
        } ${bp.lessThan("sm") ? "p1" : bp.lessThan("lg") && "p2"}`}>
        {products.map((product) => (
          <ProductCard
            vertical={vertical}
            className={`${styles.gridItem}`}
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </>
  )
}

export default ProductGrid
