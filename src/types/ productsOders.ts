export type Product = {
	id: number,
    name: string,
    description: string,
    price: number,
    images: JSON,
    stock_status: string,
    stock_quantity: number,
	order_items:    OrderItem[]
}

export type createProductData = {
	name: string,
    description: string,
    price: number,
    images: JSON,
    stock_status: string,
    stock_quantity: number,
}

export type Order = createOrderData & {

  id: number,
  order_total:        number
  order_items:        OrderItem[]
}

export type OrderItem = {
  id: number
  qty: number
  item_price: number
  item_total: number
  order:      Order
  order_id:   number
  product:    Product
  product_id: number
}

export type createOrderData = {
	customer_first_name: string,
	customer_last_name: string,
	customer_address: string,
	customer_postcode: number
	customer_city: string
	customer_email: string
	customer_phone?: number
}
