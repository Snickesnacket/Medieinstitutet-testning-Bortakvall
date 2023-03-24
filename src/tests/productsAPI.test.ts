import { describe, it, expect } from 'vitest'
//import { server } from '../mocks/server'
import * as productAPI from '../services/productAPI'
import { ProductData, } from '../types/ productsOders'


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

describe('ProductAPI', () => {
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


		/* expect(product).toMatchObject({
			status: 'success',
			data: {}
				}) */

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

			//order_items: []
		})

	})
	//kan hämta den skapade produkten
	it('Should create and then get the product', async () => {
		const createdproduct = await productAPI.createProduct(newProduct)
		const createdproductData = await productAPI.getProduct(createdproduct.id)
		expect(createdproductData.data.id).toStrictEqual(createdproduct.id)

		//const productResponse = await productAPI.getResponseProduct(createdproductDataId)






	})
})


