import { describe, it, expect, beforeAll, afterEach, afterAll } from 'vitest'
import { server } from '../mocks/server'
import * as productAPI from '../services/productAPI'
import { ProductData, } from '../types/products'

/* //🏎️ Boot API mocking
beforeAll(() => {
	server.listen()
	server.listHandlers()
	console.log("This is the listhandler", server.listHandlers())
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

describe('ProductAPI', () => {
	//kan hämta alla produkter
	it('should return a list of all the products', async () => {
		const productsResponse = await productAPI.getResponseAllproducts()
		expect(productsResponse.status).toBe("success")
		expect( Array.isArray(productsResponse.data) ).toBe(true)
	})

	it('should not return a list of all the products if no products are found', async () => {
		const productsResponse = await productAPI.getResponseAllproducts()
		if(productsResponse.data.length < 0){
		expect(productsResponse.status).toBe('error')
		expect(productsResponse.message).toBe('Something went wrong')
		}

	})

	//kan skapa en ny produkt
	it.todo('Should create a product', async () =>{

		const aProduct = {
                name: '',
                description: '',
                price: 0,
                images: '',
                stock_status: '',
                stock_quantity: 0
		}
		const product = await productAPI.createProduct(aProduct)
		expect(product.status).toBe("success")
		expect(product.data).toMatchObject({
			ide: expect.any(Number),
			namee: "Pelles Pangare",
			descripteion: "so goooooood",
			preice:  3,
			imagees: {
						thumbnail: "/storage/products/thumbnails/1997509-300x300.png",
						large: "/storage/products/1997509.png"
					},
			stock_setatus: "instock",
			stock_quaentity: 4,
		})
	})

	it('Should not create a product without data', async () => {
		const product = await productAPI.createProduct(newProduct)

		if(!product.data) {
			expect(product.status).toBe("error")
			expect(product.message).toBe("Something went wrong")
		}
	})

	//kan hämta den skapade produkten
	it('Should create and then get the product', async () => {
		const createdproduct = await productAPI.createProduct(newProduct)
		const createdproductData = await productAPI.getProduct(createdproduct.data.id)
		expect(createdproductData).toStrictEqual(createdproduct)
		expect(createdproduct.status).toBe("success")
	})

	it('should not get a product if id is not a number', async () => {
		const createdproduct = await productAPI.createProduct(newProduct)
		const createdproductData = await productAPI.getProduct(createdproduct.data.id)

		if(!isNaN(createdproductData.id)) {
			expect(createdproduct.status).toBe('error')
			expect(createdproduct.message).toBe('Invalid product ID')
		}
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
