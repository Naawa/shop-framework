export function load({ fetch }) {
	
	async function fetchProducts() {
		const res = await fetch('https://dummyjson.com/products');
		const data = await res.json();
		const products: Product[] = data.products;

		return products;
	}
   
	async function fetchMockups() {
		const res = await fetch('/shop');
		const data = await res.json();
		const products: Product[] = data;

		return products;
	}

	return {
		//products: fetchProducts()
		products: fetchMockups()
	};
};


