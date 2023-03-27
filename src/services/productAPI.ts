import axios from 'axios'
import {ProductData, Product, ProductList} from '../types/products'
import { JSend } from '../types/results'

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
	return get<JSend<ProductList>>('/products')
}

/**
 * Get all products
 */
export const getProducts = () => {
	return get<ProductList>('/products')
}

/**
 * Get a product response
 */
export const getResponseProduct = (id:number) => {
	return get<JSend<Product>>(`/product/${id}`)
}
/**›
 * Get a single product
 */
export const getProduct = (id: number) => {
	console.log(getProduct)
	return get<Product>(`/products/${id}`)
}

/**
 * Get a response of created product
 */
export const createproductResponse = () => {
	return get<JSend<Product>>('/product')
}
/**
 * Create a new product
 */
export const createProduct = (product: ProductData) => {
	return post<JSend<Product>>(`/products`, product)
}
