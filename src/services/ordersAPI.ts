import axios from 'axios'
import { T } from 'vitest/dist/types-fafda418'
import { orderData, Order, JSend, OrderItem, orderList, } from '../types/ productsOders'

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
 * Get all orders
 */
export const getOrders = () => {
	console.log(getOrders)
	return get<JSend<T>>('/orders')
}


/**
 * Get a single order
 */
export const getOrder = (id: number) => {
	console.log(getOrder)
	return get<orderList>(`/orders/${id}`)
}


/**
 * Create a new order
 */
export const createOrder = (order: orderData) => {
	console.log(createOrder)
	return post<JSend<Order<OrderItem>>>(`/orders`, order)
}

