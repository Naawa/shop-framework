export function load({ fetch }) {
	
	async function fetchProducts() {
		const res = await fetch('https://dummyjson.com/products');
		const data = await res.json();
		const products: Product[] = data.products

		return products
	}
   

	return {
		products: fetchProducts()
	};
};