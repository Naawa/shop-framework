export function load({fetch, params}) {

    async function fetchProduct(productId: string) {
		const res = await fetch(`https://dummyjson.com/products/${productId}`);
		const data = await res.json();
		const product: Product = data

		return product
	}
   

	return {
		product: fetchProduct(params.productId)
	};
}