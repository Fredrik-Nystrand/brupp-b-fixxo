import { useEffect } from "react"
import DetailView from "../../components/SingleProduct/DetailView/DetailView"
import InfoView from "../../components/SingleProduct/InfoView/InfoView"
import { useParams } from "react-router-dom"
import { useGetProductQuery } from "../../Store/api/apiSlice"

const SingleProductPage = () => {
  const { id } = useParams()
  const { data } = useGetProductQuery(id)

  return (
    <div className="container-inner">
      <DetailView product={data} />
      <InfoView />
    </div>
  )
}

export default SingleProductPage
