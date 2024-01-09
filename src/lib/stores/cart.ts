import { browser } from "$app/environment";
import { writable } from "svelte/store";

function accessCart() {  
    let items: Item[] = [];
    const cart = writable<Item[]>([]);
    loadFromLocalStorage();

    function saveToLocalStorage(): void {
        if(browser) {
            window.localStorage.clear();
            window.localStorage.setItem("cart", JSON.stringify(items));
            cart.set(items);
        }
    }

    function loadFromLocalStorage(): void {
        if(browser) {
            items = (window.localStorage.getItem("cart")) ? JSON.parse(window.localStorage.getItem("cart") || "") : [];
            items.forEach(async function(item, i) {
                const res = await fetch(`/shop/${item.product.id}`);
                const data = await res.json();
                const product: Product = data;
                items[i].product = {
                    ...product,
                };
                saveToLocalStorage();
            });
        }
    }

    function add(item: Item) {
        cart.update(() => {
            items.push(item);
            return items;
        });
        saveToLocalStorage();
    }

    function remove(item: Item): void {
        cart.update(() => {
            let i = 0;
            for(i; i < items.length; i++) {
                if(items[i].product.id == item.product.id) {
                    break;
                }
            }
            items.splice(i, 1);
            return items
        });
        saveToLocalStorage();
    }
    function update(item: Item): void {
        cart.update(() => {
            let i = 0;
            for(i; i < items.length; i++) {
                if(items[i].product.id == item.product.id) {
                    items[i] = item;
                    break;
                }
            }
            return items
        });
        saveToLocalStorage();
    }
    function clear(): void {
        items = []
        cart.set(items);
        saveToLocalStorage();
    }
    function exists(item: Item): boolean {
        for(let i = 0; i < items.length; i++) {
            if(items[i].product.id == item.product.id) {
                return true;
            }
        }
        return false
    }
    function total(): number {
        let total: number = 0;
        items.forEach(item => {
            let itemPrice = item.product.price * item.options.quantity;
            total += itemPrice;
        });
        return total;
    }
	return {
        ...cart,
        items,
        add,
        remove,
        update,
        clear,
        exists,
        total
	}
}

export const cart = accessCart();


