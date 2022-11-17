import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { SERVER_IP, SERVER_PORT } from "../../env"

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: `${SERVER_IP}:${SERVER_PORT}/api` }),
  tagTypes: ["products", "product", "categories", "sub_categories", "sizes", "colors"],
  endpoints: (builder) => ({
    //Products (multiple)
    getProducts: builder.query({
      query: () => "/product",
      providesTags: ["products"],
    }),
    //Product (singular)
    getProduct: builder.query({
      query: (id) => `/product/${id}`,
      providesTags: ["product"],
    }),
    //Categories
    getCategories: builder.query({
      query: () => `/categories`,
      providesTags: ["categories"],
    }),
    //Sub-Categories
    getSubCategories: builder.query({
      query: () => `/subCategories`,
      providesTags: ["sub_categories"],
    }),
    //Sizes
    getSizes: builder.query({
      query: () => `/sizes`,
      providesTags: ["sizes"],
    }),
    //Colors
    getColors: builder.query({
      query: () => `/colors`,
      providesTags: ["colors"],
    }),
  }),
})

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useGetCategoriesQuery,
  useGetSubCategoriesQuery,
  useGetSizesQuery,
  useGetColorsQuery,
} = apiSlice
