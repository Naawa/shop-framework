export function GET({ params }) {
    function fetchMockup(productId: string): Product {
		if(productId === "1") {
			return {
				id: 1,
				title: "Classic Hoodie",
				price: 49,
				rating: 4.7,
				description: "320 GSM",
				images: ["../images/Mockup.png", "../images/Mockup2.png"]
			}
		}
		return {
			id: 2,
			title: "Signature Hoodie",
			price: 59,
			rating: 4.3,
			description: "450 GSM",
			images: ["../images/Mockup.png", "../images/Mockup.png"]
		}
	}

    const product: Product = fetchMockup(params.productId);

    return new Response(JSON.stringify(product),  { headers: {
        'Content-Type': 'application/json'
        }
    });
}