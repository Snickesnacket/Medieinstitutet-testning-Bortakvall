import {rest } from 'msw'
import {Product, Order} from '../types/products'

const BASE_URL = import.meta.env.VITE_API_BASE_URL



/* export const handlers = [
	// Mock get all todos
	// GET http://localhost:3001/todos
	rest.get(BASE_URL + '/todos', (_req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json(h)
		)
	})
] */
