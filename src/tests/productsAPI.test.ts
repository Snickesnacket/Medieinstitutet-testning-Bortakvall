import { beforeAll, afterEach, afterAll, describe, it, expect } from 'vitest'
import { server } from '../mocks/server'
import * as productsAPI from '../services/productAPI'
import { createOrderData } from '../types/ productsOders'


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

const newOrder: createOrderData = {
	customer_first_name: 'hej',
	customer_last_name: 'hejdå',
	customer_address: 'hejvägen 45',
	customer_postcode: 89756,
	customer_city: 'Hejsingborg',
	customer_email: 'hej@hejhej.se',
	customer_phone: +46745454567,
}

describe('ProductAPI', () => {
	//kan hämta alla produkter
	it('should return a list of all the products', async () => {

	})
	//kan skapa en ny produkt
	it('Should create a product', async () =>{

	})
	//kan hämta den skapade produkten
	it('Should create and then get the product', async () => {

	})
})
