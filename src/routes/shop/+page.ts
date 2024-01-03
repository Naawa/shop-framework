export function load({ fetch }) {
	
	async function fetchProducts() {
		const res = await fetch('https://dummyjson.com/products');
		const data = await res.json();
		const products: Product[] = data.products;

		return products;
	}

	async function fetchMockups() {
		const products: Product[] = [{
			id: 1,
			title: "Classic Hoodie",
			price: 49,
			rating: 4.7,
			description: "320 GSM",
			images: ["../Mockup.png", "../Mockup2.png"],

		},
		{
			id: 2,
			title: "Signature Hoodie",
			price: 49,
			rating: 4.3,
			description: "450 GSM",
			images: ["../Mockup2.png", "../Mockup.png"],

		},{
			id: 1,
			title: "Classic Hoodie",
			price: 49,
			rating: 4.7,
			description: "320 GSM",
			images: ["../Mockup.png", "../Mockup2.png"],

		},
		{
			id: 2,
			title: "Signature Hoodie",
			price: 49,
			rating: 4.3,
			description: "450 GSM",
			images: ["../Mockup2.png", "../Mockup.png"],

		},{
			id: 1,
			title: "Classic Hoodie",
			price: 49,
			rating: 4.7,
			description: "320 GSM",
			images: ["../Mockup.png", "../Mockup2.png"],

		},
		{
			id: 2,
			title: "Signature Hoodie",
			price: 49,
			rating: 4.3,
			description: "450 GSM",
			images: ["../Mockup2.png", "../Mockup.png"],

		}]
		return products;
	}
   

	return {
		//products: fetchProducts()
		products: fetchMockups()
	};
};


