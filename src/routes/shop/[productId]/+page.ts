export function load({ fetch, params }) {

    async function fetchProduct(productId: string) {
		const res = await fetch(`https://dummyjson.com/products/${productId}`);
		const data = await res.json();
		const product: Product = data

		return product
	}
	
	function fetchMockup(productId: string): Product {
		if(productId === "1") {
			return {
				id: 1,
				title: "Classic Hoodie",
				price: 49,
				rating: 4.7,
				description: "320 GSM",
				images: ["../Mockup.png", "../Mockup2.png"]
			}
		}
		return {
			id: 2,
			title: "Signature Hoodie",
			price: 49,
			rating: 4.3,
			description: "450 GSM",
			images: ["../Mockup2.png", "../Mockup.png"]
		}
	}

	return {
		//product: fetchProduct(params.productId)
		product: fetchMockup(params.productId)
	};
}