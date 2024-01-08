<script lang="ts">
	import { cart } from "$lib/stores/cart";
    export let product: Product;

    let quantity: number;
    function decreaseQuantity(): void {
        if (product.quantity > 0) {
            product.quantity -= 1
        }
        if(cart.exists(product)) {
            cart.update(product);
        }
    }
    function increaseQuantity(): void {
        if (product.quantity < 5) {
            product.quantity += 1;
        }
        if(cart.exists(product)) {
            cart.update(product);
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
    <h5>{product.quantity}</h5>
    <button on:click={increaseQuantity}>
        <span></span>
        <span></span>
    </button>
</div>