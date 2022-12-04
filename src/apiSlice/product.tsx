import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "../interfaces/product";
export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
    tagTypes: ["Product"],
    endpoints: (builder) => ({
        getProducts: builder.query<IProduct[], void>({
            query: () => "/products",
            providesTags: ["Product"],
        }),
        getProduct: builder.query<IProduct, void>({
            query: (id: void) => ({
                url: `/products/${id}`,
                method: "GET",
            }),
            providesTags: ['Product']
        }),
        addProduct: builder.mutation<IProduct, Omit<IProduct, "id">>({
            query: (product) => ({
                url: "/products",
                method: "POST",
                body: product,
            }),
            invalidatesTags: ["Product"],
        }),
        editProduct: builder.mutation<IProduct, IProduct>({
            query: (product) => ({
                url: `products/${product.id}`,
                method: 'PUT',
                body: product,
            }),
            invalidatesTags: ['Product'],
        }),
        removeProduct: builder.mutation<IProduct, IProduct>({
            query: (id) => ({
                url: `products/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Product'],
        }),
        // upload: builder.mutation<IProduct, IProduct>({

        // })
    })
});
export const { useGetProductsQuery,
    useGetProductQuery,
    useAddProductMutation,
    useEditProductMutation,
    useRemoveProductMutation } = productApi;
