import { describe, it, expect } from 'vitest'
import { OrderData } from '../types/order'
import * as ordersAPI from '../services/ordersAPI'
// import { server } from '../mocks/server'

/* // 🏎️ Boot API mocking
beforeAll(() => {
	server.listen()
})

// 🧨 Reset handlers
afterEach(() => {
	server.resetHandlers()
})

// 🧹 Clean up after ourselves
afterAll(() => {
	server.close()
}) */


const newOrder: OrderData = {
	customer_first_name: 'hej',
	customer_last_name: 'hejdå',
	customer_address: 'hejvägen 45',
	customer_postcode: "89756",
	customer_city: 'Hejsingborg',
	customer_email: 'hej@hejhej.se',
	customer_phone: "+46745454567",
	order_total: 45,
	order_items: [
		{
			qty: 4,
			item_price: 8,
			item_total: 32,
			product_id: 5216,
		}
	]
}

describe('ordersAPI', () => {
	// kan hämta alla ordrar
	it("should return a list of all the orders", async () =>{
		const ordersResponse = await ordersAPI.getOrders()

		expect(ordersResponse.status).toBe("success")
		expect(Array.isArray(ordersResponse.data)).toBe(true)
	})
	//kan skapa en ny order
	it('should create a order', async  () => {
		const order = await ordersAPI.createOrder(newOrder)

		expect(order.data).toMatchObject({
			id: expect.any(Number),
			customer_first_name: 'hej',
			customer_last_name: 'hejdå',
			customer_address: 'hejvägen 45',
			customer_postcode: "89756",
			customer_city: 'Hejsingborg',
			customer_email: 'hej@hejhej.se',
			customer_phone: "+46745454567",
			order_total: 45,
			order_items: [
				{
					id: expect.any(Number),
					qty: 4,
					item_price: 8,
					item_total: 32,
					order_id: expect.any(Number),
					product_id: 5216,
				}
			]
		})
	})

	it('should create a order without phone number ', async () => {
		const noPhoneOrder = {
			...newOrder,
			customer_phone: undefined
		}
		const order = await ordersAPI.createOrder(noPhoneOrder)
		expect(order.data).toMatchObject({
			id: expect.any(Number),
			customer_first_name: 'hej',
			customer_last_name: 'hejdå',
			customer_address: 'hejvägen 45',
			customer_postcode: "89756",
			customer_city: 'Hejsingborg',
			customer_email: 'hej@hejhej.se',
			order_total: 45,
			order_items: [
				{
					id: expect.any(Number),
					qty: 4,
					item_price: 8,
					item_total: 32,
					order_id: expect.any(Number),
					product_id: 5216,
				}
			]

		})
	})

	//kan hämta den skapade ordern
	it('should create a order and then return the order', async () => {
		const createdOrder = await ordersAPI.createOrder(newOrder)
		const createdOrderData = await ordersAPI.getOrder(createdOrder.data.id)

		expect(createdOrderData).toStrictEqual(createdOrder)
	})

	it('should create and then find the order among all orders', async () => {
		// create a new product
		const orderTestdata = await ordersAPI.createOrder(newOrder)
		const allOrders = await ordersAPI.getOrders()
		const allOrderIds = allOrders.data.map(object => object.id)

		expect(allOrderIds).toContain(orderTestdata.data.id)
	})
})
