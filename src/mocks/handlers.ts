import {rest } from 'msw'
import {Product, ProductData,} from '../types/products'
import {Order} from '../types/order'
import {JSend} from '../types/results'

const BASE_URL = import.meta.env.VITE_API_BASE_URL
const dummyProducts: Product[] = [
	{
            "id": 5216,
            "name": "Gott & Blandat Giants",
            "description": "<p>En mix av lakrits och gelé med fruktsmak</p>\n<p>Innehållsförteckning: Socker, glukossirap, glukos-fruktossirap, stärkelse, VETEMJÖL, melass, syra (citronsyra), fuktighetsbevarande medel (sorbitoler, glycerol), lakritsextrakt, salt, vegetabiliska oljor (kokos, palm), aromer, färgämnen (E153, E120, E100, E141), ytbehandlingsmedel (bivax), stabiliseringsmedel (E471).</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
            "price": 12,
            "images": {
                "large": "/storage/products/1997509.png",
                "thumbnail": "/storage/products/thumbnails/1997509-300x300.png"
            },
            "stock_status": "instock",
            "stock_quantity": 5
        }
]

export const handlers = [
	// GET all prodcuts
	rest.get(BASE_URL + '/products', (_req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json(dummyProducts)
		)
	}),
	// GET a  product
	rest.get(BASE_URL + '/products/:productId', (req, res, ctx) => {
		const productId = Number(req.params.productId)

		// find the product among the dummyproducts
		const product = dummyProducts.find(product => product.id === productId)

		// if todo didn't exist, respond with 404
		if (!product) {
			return res(
				ctx.status(404),
				ctx.json({})
			)
		}

		// respond with todo
		return res(
			ctx.status(200),
			ctx.json(product)
		)
	}),

	// Mock create todo
	// POST http://localhost:3001/todos
	rest.post(BASE_URL + '/products', async (req, res, ctx) => {
		const payload = await req.json<ProductData>()

		// find next id
		const id = Math.max(0, ...dummyProducts.map(product => product.id) ) + 1

		// create our new dummy todo
		const product: Product = {
			...payload,
			id
		}

		// add dummy todo to list of dummy todos
		dummyProducts.push(product)

		// respond with dummy todo
		return res(
			ctx.status(201),
			ctx.json(product)
		)
	}),
]
