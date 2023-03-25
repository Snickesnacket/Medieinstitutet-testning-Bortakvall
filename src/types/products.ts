export type ProductList = Product[] // array of all the products

export type Product = ProductData & { // complete product
	id: number
}

export type ProductData = { // data from user
	name: string,
    description: string,
    price: number,
    images: {},
    stock_status: string,
    stock_quantity: number,
}


