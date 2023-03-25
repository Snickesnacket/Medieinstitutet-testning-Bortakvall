import { describe, it, expect } from 'vitest'
import { orderData } from '../types/order'
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



const newOrder: orderData = {
	customer_first_name: 'hej',
	customer_last_name: 'hejdå',
	customer_address: 'hejvägen 45',
	customer_postcode: "89756",
	customer_city: 'Hejsingborg',
	customer_email: 'hej@hejhej.se',
	customer_phone: "+46745454567",
	order_total: 45,
	order_items: []
}

describe('ordersAPI', () => {
	// kan hämta alla ordrar
	it("should return a list of all the orders", async () =>{
		const ordersResponse = await ordersAPI.getOrders()
		expect(ordersResponse.status).toBe("success")
		expect( Array.isArray(ordersResponse.data) ).toBe(true)

		console.log('get products', ordersResponse.status)
		console.log('get products', ordersResponse.data)

	})
	//kan skapa en ny order
	it('should create a order', async  () => {
		const order = await ordersAPI.createOrder(newOrder)
		console.log("this is the order", order)

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
			order_items: []

		})
	})

	//kan hämta den skapade ordern
	it('should create a order and then return the order', async () => {
		const createdOrder = await ordersAPI.createOrder(newOrder)
		const createdOrderData = await ordersAPI.getOrder(createdOrder.data.id)
		expect(createdOrderData).toStrictEqual(createdOrder)
	})

	it('should create and then find the order among all orders', async () => {
		console.log("hej")
		// create a new product
		const orderTestdata = await ordersAPI.createOrder(newOrder)
		console.log("this the created order",orderTestdata.data)
		const allOrders = await ordersAPI.getOrders()
		console.log("this is all the orders", allOrders.data)
		const orderLength = allOrders.data.length
		const orderArray = allOrders.data
		const lastIndex = orderLength -1
		const theObject = orderArray[lastIndex]
		const allOrderIds = allOrders.data.map(object => object.id)
		expect(theObject).toStrictEqual(orderTestdata.data)
		expect(allOrderIds).toContain(orderTestdata.data.id)
	})

})
