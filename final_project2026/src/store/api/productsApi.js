import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {API_BASE_URL} from "@constants/API.js";

export const productsApi = createApi({
  reducerPath: 'productsApi',
  
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  
  tagTypes: ['Products', 'Category'],
  
  endpoints: (build) => ({
    
    getProducts: build.query({
      query: ({ limit = 12, skip = 0, category = '' } = {}) =>
        category
          ? `products/category/${category}?limit=${limit}&skip=${skip}`
          : `products?limit=${limit}&skip=${skip}`,
      providesTags: ['Products'],
    }),
    
    getProductById: build.query({
      query: (id) => `products/${id}`,
      providesTags: ['Products'],
    }),
    
    getCategories: build.query({
      query: () => 'products/categories',
      providesTags: ['Categories'],
    }),
    
    searchProducts: build.query({
      query: ({ q = '', limit = 12, skip = 0 } = {}) =>
        `products/search?q=${q}&limit=${limit}&skip=${skip}`,
      providesTags: ['Products'],
    }),
    
    login: build.mutation({
      query:(credentials) => ({
        url: 'auth/login',
        method: 'POST',
        body: credentials
      })
    })
    
  })
})

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetCategoriesQuery,
  useSearchProductsQuery,
  useLoginMutation,
} = productsApi