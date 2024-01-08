<script lang="ts">
	import { cart } from "$lib/stores/cart";
    export let item: CartItem;

    function decreaseQuantity(): void {
        if (item.quantity > 0) {
            item.quantity -= 1
        }
        if(cart.exists(item)) {
            cart.update(item);
        }
    }
    function increaseQuantity(): void {
        if (item.quantity < 5) {
            item.quantity += 1;
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
            height: 3em;
            width: 3em;
            border-radius: 100%;
            border: none;
            background-color: #2E2E2E;
            display: flex;
            justify-content: center;
            align-items: center;

            span {
                position: absolute;
                width: 1em;
                border: solid 1px #FFFCFC;
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
    <h5>{item.quantity}</h5>
    <button on:click={increaseQuantity}>
        <span></span>
        <span></span>
    </button>
</div>