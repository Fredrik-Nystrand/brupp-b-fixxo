import { useState, useEffect } from "react"
import ProductGrid from "../../components/ProductGrid/ProductGrid"
import { useGetProductsQuery } from "../../Store/api/apiSlice"
import styles from "./ProductPage.module.css"
import {
  useGetCategoriesQuery,
  useGetSubCategoriesQuery,
  useGetSizesQuery,
  useGetColorsQuery,
} from "../../Store/api/apiSlice"
import RangeSlider from "react-range-slider-input"
import "react-range-slider-input/dist/style.css"

const ProductPage = () => {
  const { data } = useGetProductsQuery()
  const { data: categories } = useGetCategoriesQuery()
  const { data: subCategories } = useGetSubCategoriesQuery()
  const { data: sizes } = useGetSizesQuery()
  const { data: colors } = useGetColorsQuery()

  const [selectedCategory, setSelectedCategory] = useState()
  const [selectedColor, setSelectedColor] = useState()
  const [selectedSize, setSelectedSize] = useState()

  return (
    <div className={`container-inner ${styles.wrapper}`}>
      <div className={`${styles.left}`}>
        <div className={`${styles.filterTitle}`}>
          <h3>All Categories</h3>
        </div>
        <div className={`${styles.filterOptions}`}>
          {subCategories?.map((cat) => (
            <p
              key={cat.id}
              onClick={() =>
                selectedCategory === cat.id ? setSelectedCategory() : setSelectedCategory(cat.id)
              }
              className={`${selectedCategory === cat.id && styles.selected}`}>
              {cat.categoryName} (
              {categories?.filter((x) => x.id === cat.categoryId)[0]?.categoryName})
            </p>
          ))}
        </div>
        <div className={`${styles.filterTitle}`}>
          <h3>Price</h3>
        </div>
        <div className={`${styles.filterOptions}`}>
          <RangeSlider className={`${styles.slider}`} />
        </div>
        <div className={`${styles.filterTitle}`}>
          <h3>Sizes</h3>
        </div>
        <div className={`${styles.filterOptions}`}>
          {sizes?.map((size) => (
            <p
              key={size.id}
              onClick={() =>
                selectedSize === size.id ? setSelectedSize() : setSelectedSize(size.id)
              }
              className={`${selectedSize === size.id && styles.selected}`}>
              {size.size === "xs"
                ? "Extra small"
                : size.size === "s"
                ? "small"
                : size.size === "m"
                ? "medium"
                : size.size === "l"
                ? "Large"
                : size.size === "xl"
                ? "Extra Large"
                : size.size === "xxl"
                ? "Extra Extra Large"
                : size.size}
            </p>
          ))}
        </div>
        <div className={`${styles.filterTitle}`}>
          <h3>Colors</h3>
        </div>
        <div className={`${styles.filterOptions}`}>
          {colors?.map((color) => (
            <p
              onClick={() =>
                selectedColor === color.id ? setSelectedColor() : setSelectedColor(color.id)
              }
              className={`${selectedColor === color.id && styles.selected}`}
              key={color.id}>
              {color.color}
            </p>
          ))}
        </div>
      </div>
      <div className={`${styles.right}`}>
        <ProductGrid
          products={data}
          vertical={false}
          numberOfColumns={3}
          numberOfItems={12}
          showPagination={true}
          sorting={true}
          className={`mb-4`}
        />
      </div>
    </div>
  )
}

export default ProductPage
