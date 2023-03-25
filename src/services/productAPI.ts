import axios from 'axios'
import { T } from 'vitest/dist/types-fafda418'
import {ProductData, Product, productList, JSend, productResponse } from '../types/ products'

const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const get = async <T>(endpoint: string) => {
	const res = await axios.get<T>(BASE_URL + endpoint)
	return res.data
}

export const post = async <T>(endpoint: string, data: any) => {
	const res = await axios.post<T>(BASE_URL + endpoint, data)
	return res.data
}

/**
 * Get all products response
 */
export const getResponseAllproducts = () => {
	console.log(getResponseAllproducts)
	return get<JSend<T>>('/products')
}

/**
 * Get all products
 */
export const getProducts = () => {
	console.log(getProducts)
	return get<productList>('/products')
}

/**
 * Get a product response
 */
export const getResponseProduct = (id:number) => {
	console.log(getResponseProduct)
	return get<productResponse["data"]>(`/product/${id}`)
}
/**›
 * Get a single product
 */
export const getProduct = (id: number) => {
	console.log(getProduct)
	return get<productList>(`/products/${id}`)
}

/**
 * Get a response of created product
 */
export const createproductResponse = () => {
	console.log(createproductResponse)
	return get<JSend<Product>>('/product')
}
/**
 * Create a new product
 */
export const createProduct = (product: ProductData) => {
	console.log(createProduct)
	return post<JSend<Product>>(`/products`, product)
}
