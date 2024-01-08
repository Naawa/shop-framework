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
		images: string[],
		rating: number,
		description: string
		quantity: number,
	}
}

export {};
