export function GET() {
    function fetchMockups() {
		const products: Product[] = [{
			id: 1,
			title: "Classic Hoodie",
			price: 49,
			rating: 4.7,
			description: "320 GSM",
			images: ["../images/Mockup.png", "../images/Mockup2.png"],
		},
		{
			id: 2,
			title: "Signature Hoodie",
			price: 59,
			rating: 4.3,
			description: "450 GSM",
			images: ["../images/Mockup2.png", "../images/Mockup.png"],

		},{
			id: 1,
			title: "Classic Hoodie",
			price: 49,
			rating: 4.7,
			description: "320 GSM",
			images: ["../images/Mockup.png", "../images/Mockup2.png"],

		},
		{
			id: 2,
			title: "Signature Hoodie",
			price: 59,
			rating: 4.3,
			description: "450 GSM",
			images: ["../images/Mockup2.png", "../images/Mockup.png"],

		},{
			id: 1,
			title: "Classic Hoodie",
			price: 49,
			rating: 4.7,
			description: "320 GSM",
			images: ["../images/Mockup.png", "../images/Mockup2.png"],

		},
		{
			id: 2,
			title: "Signature Hoodie",
			price: 49,
			rating: 4.3,
			description: "450 GSM",
			images: ["../images/Mockup2.png", "../images/Mockup.png"],

		}]
		return products;
	}

    const products: Product[] = fetchMockups();

    return new Response(JSON.stringify(products),  { headers: {
        'Content-Type': 'application/json'
        }
    });
}