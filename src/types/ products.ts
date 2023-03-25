

export type JSend <T> = {  // reutn get< productListResponse<Product> >(`/product/${id}`) returnerar en product|| // reutn get< productListResponse<ProductList> >(`/product/${id}`) returnerar alla producter
	status: "success"| "fail"| "error"
	data: T// replace with array or single data. Jsend.data
	message?: string // when error return message
}

export type productList = Product[]// array of all the products

export type Product = ProductData & { // complete product
	id: number
}


export type ProductData = {// data from user
	name: string,
    description: string,
    price: number,
    images: {},
    stock_status: string,
    stock_quantity: number,
}

export type productResponse = {
	status: "success"| "fail"| "error"
	data: Product
	message?: string
}

