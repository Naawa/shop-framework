<script lang="ts">
	import { cart } from "$lib/stores/cart";
    export let item: Item;

    if(item.options.quantity > 5) {
        item.options.quantity = 5;
        cart.update(item);
    }
    if(item.options.quantity < 1) {
        item.options.quantity = 1;
        cart.update(item);
    }

    function decreaseQuantity(): void {
        if (item.options.quantity > 1) {
            item.options.quantity -= 1
        }
        if(cart.exists(item)) {
            cart.update(item);
        }
    }
    function increaseQuantity(): void {
        if (item.options.quantity < 5) {
            item.options.quantity += 1;
        }
        if(cart.exists(item)) {
            cart.update(item);
        }
    }
</script>

<style lang="scss">
    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 9em;
        gap: 1em;

        button {
            height: 2.25em;
            width: 2.25em;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #424242;
            color: #FFFCFC;
            padding: 1.25em;
            border: solid 2px #424242;

            span {
                color: #FFFCFC;
                position: absolute;
                width: 1em;
                border: solid 1px #FFFCFC;
            }
            &:hover {
                background-color: #FCFCFC;
                span {
                    border: solid 1px #424242;
                }
            }

            &:last-of-type {
                span {
                    &:last-of-type {
                        transform: rotate(90deg);
                    }
                }
            }
        }

    }
</style>

<div>
    <button on:click={decreaseQuantity}>
        <span></span>
    </button>
    <h5>{item.options.quantity}</h5>
    <button on:click={increaseQuantity}>
        <span></span>
        <span></span>
    </button>
</div>