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

export type Order = {

  id: number,
  customer_first_name: String
  customer_last_name:  String
  customer_address:  String
  customer_postcode:   String
  customer_city:      String
  customer_email:      String
  customer_phone?:     String
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
