import axios from 'axios'
import { createProductData, createProductData, Product } from '../types/ productsOders'

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
 * Get all products
 */
export const getProducts = () => {
	console.log(getProducts)
	return get<Product[]>('/products')
}


/**
 * Get a single product
 */
export const getProduct = (id: number) => {
	console.log(getProduct)
	return get<Product>(`/product/${id}`)
}

/**
 * Create a new todo
 */
export const createProduct = (product: createProductData) => {
	console.log(createProduct)
	return post<Product>(`/products`, product)
}
