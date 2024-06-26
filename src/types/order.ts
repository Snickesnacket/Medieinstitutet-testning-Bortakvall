export type OrderList = Order[]

export type Order = { // aditional data for the order generated by the API. Complete order
	id: number
	customer_first_name: string
	customer_last_name: string
	customer_address: string
	customer_postcode: string
	customer_city: string
	customer_email: string
	customer_phone?: string
	order_total: number
    order_items:  OrderItem[]
}

export type OrderData = { // data from clientside
	customer_first_name: string
	customer_last_name: string
	customer_address: string
	customer_postcode: string
	customer_city: string
	customer_email: string
	customer_phone?: string
	order_total: number
	order_items: OrderItem[]
}

export type OrderItem = { // Data of the order item to be added to the order.
	qty: number
	item_price: number
	item_total: number
	product_id: number
}



