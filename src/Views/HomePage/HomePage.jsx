import { useState } from "react"
import ProductGrid from "../../components/ProductGrid/ProductGrid"
import Hero from "../../components/Hero/Hero"
import Support from "../../components/Support/Support"
import Popup from "../../components/Popup/Popup"
import StylesOffer from "../../components/StylesOffer/StylesOffer"
import Categories from "../../components/Categories/Categories"
import InstagramGrid from "../../components/InstagramGrid/InstagramGrid"
import useBreakpoint from "../../shared/hooks/useBreakpoint"
import { useGetProductsQuery } from "../../Store/api/apiSlice"

const HomePage = () => {
  const bp = useBreakpoint()
  const [close, setClose] = useState(false)
  const { data } = useGetProductsQuery()

  return (
    <>
      {close || <Popup setClose={setClose} />}
      <Hero />
      <Categories />
      <div className="container-inner">
        <ProductGrid
          products={data}
          vertical={false}
          title="Featured Products"
          titleAlign="center"
          numberOfColumns={4}
          numberOfItems={8}
          showPagination={false}
          sorting={false}
          className={`mt-4 mb-4`}
        />
      </div>
      <StylesOffer />
      <div className="container-inner">
        <div
          className={`${(`d-flex`, `gap-2`, `mt-2`, `mb-2`)} ${
            bp.moreThan("md") ? `d-flex` : `d-block` && `p1`
          }`}>
          <ProductGrid
            products={data?.slice(3, 6)}
            vertical={true}
            title="Latest Products"
            titleAlign="left"
            numberOfColumns={1}
            numberOfItems={3}
            showPagination={false}
            sorting={false}
          />
          <ProductGrid
            products={data?.slice(6, 9)}
            vertical={true}
            title="Best Selling Products"
            titleAlign="left"
            numberOfColumns={1}
            numberOfItems={3}
            showPagination={false}
            sorting={false}
          />
          <ProductGrid
            products={data?.slice(0, 3)}
            vertical={true}
            title="Top Reacted Products"
            titleAlign="left"
            numberOfColumns={1}
            numberOfItems={3}
            showPagination={false}
            sorting={false}
          />
        </div>
        <Support className={`mt-4 mb-4`} />

        <InstagramGrid />
      </div>
    </>
  )
}

export default HomePage
