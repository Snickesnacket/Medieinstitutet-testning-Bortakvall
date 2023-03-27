export type JSend <T> = { // reutn get< productListResponse<Product> >(`/product/${id}`) returnerar en product|| // reutn get< productListResponse<ProductList> >(`/product/${id}`) returnerar alla producter
	status: "success" | "fail" | "error"
	data: T // replace with array or single data. Jsend.data
	message?: string // when error return message
}
