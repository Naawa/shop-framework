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
        justify-content: center;
        align-items: center;
        height: 100%;
        width: min-content;

        button {
            min-height: 4em;
            min-width: 4em;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #424242;
            color: #FFFCFC;
            border: solid 0.1em #424242;


            span {
                color: #FFFCFC;
                position: absolute;
                width: 0.75em;
                border: solid 0.1em #FFFCFC;
            }
            &:hover {
                background-color: #FCFCFC;
                span {
                    border: solid 0.1em #424242;
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
        h5 {
            height: 100%;
            min-width: 3em;
            display: flex;
            justify-content: center;
            align-items: center;
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