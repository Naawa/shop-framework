// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}

	interface Product  {
		id: number,
		title: string,
		price: number,
		sizes: string[],
		colors: string[],
		images: string[],
		rating: number,
		thumbnail: string,
		description: string,
		additionalInfo: string,
		reviews: string[],
	}
}

export {};
