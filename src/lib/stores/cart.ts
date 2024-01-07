import { browser } from "$app/environment";
import { writable } from "svelte/store";

function createCart() {  
    let items: CartItem[] = [];

    /**
     * The following code initializes the cart with an existing one from local storage.
     * It is commented out because it is unsafe at this time. This means that cart will not save upon refresh until we can use either local storage safely or save cart to database after user login.
     */

    /** if(browser) {
        items = (window.localStorage.getItem("cart")) ? JSON.parse(window.localStorage.getItem("cart") || "") : []
    } **/ 

    const cart = writable(items);

    function saveToLocalStorage(): void {
        if(browser) {
            window.localStorage.clear();
            //window.localStorage.setItem("cart", JSON.stringify(items));
        }
    }

    function addItem(item: CartItem) {
        cart.update(() => {
            items.push(item);
            return items;
        });
        //saveToLocalStorage();
    }

    function removeItem(item: CartItem): void {
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
        //saveToLocalStorage();
    }
    function updateItem(item: CartItem): void {
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
        //saveToLocalStorage();
    }
    function clear(): void {
        items = []
        cart.set(items);
        //saveToLocalStorage();
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
        addItem,
        removeItem,
        updateItem,
        clear,
        exists,
        total
	}
}

export const cart = createCart();



