import { browser } from "$app/environment";
import { writable} from "svelte/store";

function accessCart() {  
    let items: CartItem[] = [];
    const cart = writable<CartItem[]>([]);
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
            
            items.forEach(async function(cartItem, i) {
                const res = await fetch(`/shop/${cartItem.id}`);
                const data = await res.json();
                const { product, item } = data;
                items[i] = {
                    ...product,
                    ...item
                };
                saveToLocalStorage();
            });
        }
    }

    function add(item: CartItem) {
        cart.update(() => {
            items.push(item);
            return items;
        });
        saveToLocalStorage();
    }

    function remove(item: CartItem): void {
        cart.update(() => {
            let i = 0;
            for(i; i < items.length; i++) {
                if(items[i].id == item.id) {
                    break;
                }
            }
            items.splice(i, 1);
            return items
        });
        saveToLocalStorage();
    }
    function update(item: CartItem): void {
        cart.update(() => {
            let i = 0;
            for(i; i < items.length; i++) {
                if(items[i].id == item.id) {
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
    function exists(item: CartItem): boolean {
        for(let i = 0; i < items.length; i++) {
            if(items[i].id == item.id) {
                return true;
            }
        }
        return false
    }
    function total(): number {
        let total: number = 0;
        items.forEach(item => {
            let itemPrice = item.price * item.quantity;
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


