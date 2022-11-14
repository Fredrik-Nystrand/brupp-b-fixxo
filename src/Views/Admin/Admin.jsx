import { useEffect, useState } from "react"
import styles from "./Admin.module.css"
import axios from "axios"

const Admin = () => {
  const baseUrl = "https://localhost:7155/api/"
  const [colors, setColors] = useState([])
  const [sizes, setSizes] = useState([])
  const [categories, setCategories] = useState([])
  const [subCategories, setSubCategories] = useState([])

  const [selectedColors, setSelectedColors] = useState([])
  const [selectedSizes, setSelectedSizes] = useState([])
  const [selectedCategory, setSelectedCategory] = useState()
  const [selectedSubCategory, setSelectedSubCategory] = useState()
  const [selectedParentCategory, setSelectedParentCategory] = useState()
  const [name, setName] = useState("")
  const [imgUrl, setImgUrl] = useState("")
  const [price, setPrice] = useState(0)
  const [salePrice, setSalePrice] = useState(0)
  const [description, setDescription] = useState("")
  const [newColor, setNewColor] = useState("")
  const [newSize, setNewSize] = useState("")
  const [newCategory, setNewCategory] = useState("")
  const [newSubCategory, setNewSubCategory] = useState("")

  const [productRequest, setProductRequest] = useState()
  const [colorRequest, setColorRequest] = useState()
  const [sizeRequest, setSizeRequest] = useState()
  const [categoryRequest, setCategoryRequest] = useState()
  const [subCategoryRequest, setSubCategoryRequest] = useState()

  useEffect(() => {
    const getColors = async () => {
      const res = await axios.get(baseUrl + "colors")
      setColors(res.data)
    }

    const getSizes = async () => {
      const res = await axios.get(baseUrl + "sizes")
      setSizes(res.data)
    }

    const getCategories = async () => {
      const res = await axios.get(baseUrl + "categories")

      setCategories(res.data)
    }

    getColors()
    getSizes()
    getCategories()
  }, [])

  useEffect(() => {
    const getSubCategories = async () => {
      const res = await axios.get(baseUrl + "subcategories")

      setSubCategories(res.data)
    }

    if (subCategories?.length <= 0) {
      getSubCategories()
    }
  }, [selectedCategory])

  useEffect(() => {
    const addColor = async () => {
      const res = await axios.post(baseUrl + "colors?" + `color=${colorRequest}`)
      if (!res?.data?.hasOwnProperty("color")) {
        return
      }

      setColors((state) => [...state, res.data])
    }

    if (colorRequest) {
      addColor()
    }
  }, [colorRequest])

  useEffect(() => {
    const addSize = async () => {
      const res = await axios.post(baseUrl + "sizes?" + `size=${sizeRequest}`)
      if (!res?.data?.hasOwnProperty("size")) {
        return
      }

      setSizes((state) => [...state, res.data])
    }

    if (sizeRequest) {
      addSize()
    }
  }, [sizeRequest])

  useEffect(() => {
    const addCategory = async () => {
      const res = await axios.post(baseUrl + "categories?" + `category=${categoryRequest}`)
      if (!res?.data?.hasOwnProperty("categoryName")) {
        return
      }

      setCategories((state) => [...state, res.data])
    }

    if (categoryRequest) {
      addCategory()
    }
  }, [categoryRequest])

  useEffect(() => {
    const addSubCategory = async () => {
      const res = await axios.post(baseUrl + "subCategories", subCategoryRequest)
      if (!res?.data?.hasOwnProperty("categoryName")) {
        return
      }

      setSubCategories((state) => [...state, res.data])
    }

    if (subCategoryRequest) {
      addSubCategory()
    }
  }, [subCategoryRequest])

  useEffect(() => {
    const addProduct = async () => {
      const res = await axios.post(baseUrl + "product", productRequest)
      resetProductForm()
    }

    if (productRequest) {
      addProduct()
    }
  }, [productRequest])

  const addProduct = (e) => {
    e.preventDefault()

    if (!name) return
    if (!imgUrl) return
    if (!description) return
    if (price <= 0) return
    if (!selectedCategory) return
    if (!selectedSubCategory) return
    if (colors?.length <= 0) return
    if (sizes?.length <= 0) return

    setProductRequest({
      name,
      imgUrl,
      description,
      price,
      salePrice,
      categoryId: selectedCategory,
      subCategoryId: selectedSubCategory,
      colors: selectedColors,
      sizes: selectedSizes,
    })
  }

  const resetProductForm = () => {
    setName("")
    setImgUrl("")
    setDescription("")
    setPrice(0)
    setSalePrice(0)
    setSelectedCategory()
    setSelectedSubCategory()
    setSelectedColors([])
    setSelectedSizes([])
    setProductRequest()
  }

  const addColor = (e) => {
    e.preventDefault()

    if (!newColor) {
      return
    }

    setColorRequest(newColor)
  }

  const addSize = (e) => {
    e.preventDefault()

    if (!newSize) {
      return
    }

    setSizeRequest(newSize)
  }

  const addCategory = (e) => {
    e.preventDefault()

    if (!newCategory) {
      return
    }

    setCategoryRequest(newCategory)
  }

  const addSubCategory = (e) => {
    e.preventDefault()

    if (!newSubCategory) {
      return
    }

    if (!selectedParentCategory) {
      return
    }

    setSubCategoryRequest({
      categoryName: newSubCategory,
      categoryId: parseInt(selectedParentCategory),
    })
  }

  return (
    <div className={`d-flex gap-3`}>
      <div className={`${styles.left}`}>
        <div className="mt-3 mb-3">
          <h2>Add Color</h2>

          <form onSubmit={addColor}>
            <input type="text" value={newColor} onChange={(e) => setNewColor(e.target.value)} />
            <button type="submit">Add</button>
          </form>
        </div>
        <div className="mt-3 mb-3">
          <h2>Add Size</h2>

          <form onSubmit={addSize}>
            <input type="text" value={newSize} onChange={(e) => setNewSize(e.target.value)} />
            <button type="submit">Add</button>
          </form>
        </div>
        <div className="mt-3 mb-3">
          <h2>Add Category</h2>

          <form onSubmit={addCategory}>
            <input
              type="text"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
            />
            <button type="submit">Add</button>
          </form>
        </div>
        <div className="mt-3 mb-3">
          <h2>Add SubCategory</h2>

          <form className={`d-flex flex-column gap-1`} onSubmit={addSubCategory}>
            <select defaultValue="null" onChange={(e) => setSelectedParentCategory(e.target.value)}>
              <option value="null" disabled>
                Parent Category
              </option>
              {categories?.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.categoryName}
                </option>
              ))}
            </select>
            <input
              type="text"
              value={newSubCategory}
              onChange={(e) => setNewSubCategory(e.target.value)}
            />
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
      <div className={`${styles.right}`}>
        <div className="mt-3 mb-3">
          <h2>Add Product</h2>

          <form className={`d-flex flex-column gap-1`} onSubmit={addProduct}>
            <select
              multiple
              onChange={(e) =>
                setSelectedColors(
                  [...e.target]
                    .filter((x) => x.value !== "null" && x.selected)
                    .map((option) => option.value)
                )
              }>
              <option value="null" disabled>
                Select Color
              </option>
              {colors?.map((color) => (
                <option key={color.id} value={color.id}>
                  {color.color}
                </option>
              ))}
            </select>
            <select
              multiple
              onChange={(e) =>
                setSelectedSizes(
                  [...e.target]
                    .filter((x) => x.value !== "null" && x.selected)
                    .map((option) => option.value)
                )
              }>
              <option value="null" disabled>
                Select Sizes
              </option>
              {sizes?.map((size) => (
                <option key={size.id} value={size.id}>
                  {size.size}
                </option>
              ))}
            </select>
            <select defaultValue="null" onChange={(e) => setSelectedCategory(e.target.value)}>
              <option value="null" disabled>
                Select Category
              </option>
              {categories?.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.categoryName}
                </option>
              ))}
            </select>
            <select defaultValue="null" onChange={(e) => setSelectedSubCategory(e.target.value)}>
              <option value="null" disabled>
                Select SubCategory
              </option>
              {subCategories
                ?.filter((cat) => cat.categoryId == selectedCategory)
                .map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.categoryName}
                  </option>
                ))}
            </select>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="ImgUrl"
              value={imgUrl}
              onChange={(e) => setImgUrl(e.target.value)}
            />
            <label htmlFor="price">Price</label>
            <input
              id="price"
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <label htmlFor="salePrice">Sale-Price</label>
            <input
              id="salePrice"
              type="number"
              placeholder="Sale-price"
              value={salePrice}
              onChange={(e) => setSalePrice(e.target.value)}
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}></textarea>
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Admin
