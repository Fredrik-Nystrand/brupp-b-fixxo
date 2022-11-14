import React from "react"
import { Link } from "react-router-dom"
import styles from "./ProductCard.module.css"
import useBreakpoint from "../../shared/hooks/useBreakpoint"
import Rating from "../Rating/Rating"

const ProductCard = ({ product, vertical = false, className }) => {
  const bp = useBreakpoint()
  return (
    <Link to={`/product/${product.id}`}>
      <div className={`${className}`}>
        <div className={`${styles.wrapper} ${vertical ? "flex-row" : "flex-column"}`}>
          <div className={`${styles.imgWrapper} ${vertical ? styles.imgHalf : styles.imgFull} `}>
            <img src={product.imgUrl} alt="" />
          </div>
          <div className={`${styles.contentWrapper}`}>
            <div className={`${styles.category} ${vertical ? "flex-start" : "flex-center"}`}>
              {product.subCategory}
            </div>
            <div className={`${styles.name} ${vertical ? "flex-start" : "flex-center"}`}>
              <span>{product.name}</span>
            </div>
            <div className={`${styles.rating} ${vertical ? "flex-start" : "flex-center"}`}>
              <Rating
                value={product.rating}
                className={`${vertical ? "flex-start" : "flex-center"}`}
              />
            </div>
            <div className={`${styles.price} ${vertical ? "flex-start" : "flex-center"}`}>
              {product.salePrice ? (
                <div className={`${styles.priceWrapper}`}>
                  <span className={`${styles.inactivePrice}`}>{product.price} Kr</span>
                  <span>{product.salePrice} Kr</span>
                </div>
              ) : (
                <div>{product.price} Kr</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
