import { describe, it, expect } from 'vitest'
//import { server } from '../mocks/server'
import * as productAPI from '../services/productAPI'
import { ProductData, } from '../types/ products'


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
 const newProduct: ProductData = {
	name: "Pelles Pangare",
    description: "so goooooood",
    price:  3,
    images: {
                thumbnail: "/storage/products/thumbnails/1997509-300x300.png",
                large: "/storage/products/1997509.png"
            },
    stock_status: "instock",
    stock_quantity: 4,
}

describe.todo('ProductAPI', () => {
	//kan hämta alla produkter
	it('should return a list of all the products', async () => {
		const productsResponse = await productAPI.getResponseAllproducts()
		expect(productsResponse.status).toBe("success")
		expect( Array.isArray(productsResponse.data) ).toBe(true)

		console.log('get products', productsResponse.status)
		console.log('get products', productsResponse.data)

	})

	//kan skapa en ny produkt
	it('Should create a product', async () =>{
		const product = await productAPI.createProduct(newProduct)
		console.log("this is the product", product)

		expect(product.data).toMatchObject({
			id: expect.any(Number),
			name: "Pelles Pangare",
			description: "so goooooood",
			price:  3,
			images: {
						thumbnail: "/storage/products/thumbnails/1997509-300x300.png",
						large: "/storage/products/1997509.png"
					},
			stock_status: "instock",
			stock_quantity: 4,
		})

	})
	//kan hämta den skapade produkten
	it('Should create and then get the product', async () => {
		const createdproduct = await productAPI.createProduct(newProduct)
		const createdproductData = await productAPI.getProduct(createdproduct.data.id)
		expect(createdproductData).toStrictEqual(createdproduct)

	})

	it('should create and then find the product among all products', async () => {
			// create a new product
			const product = await productAPI.createProduct(newProduct)
			// get all products
			const productsResponse = await productAPI.getResponseAllproducts()
		expect(productsResponse.status).toBe("success")
			//expect created product to exist in the array pf all products
		expect(productsResponse.data).toContainEqual(product.data)
	})
})


