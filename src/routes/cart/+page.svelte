<script lang="ts">
	import QuantityCounter from "$lib/components/QuantityCounter.svelte";
    import { cart } from "$lib/stores/cart";
</script>

<style lang="scss">
    section {
        padding: 4em 0;
        span {
            display: flex;
            justify-content: space-between;
        }
        button {
            padding: 1em 3em;
            border-radius: 1em;
            border: solid 1px
        }
        div {
            border: solid 1px;
            border-radius: 1em;
            padding: 2em 4em;
            margin: auto;
        }
    }
</style>

<section>
    <span>
        {#key $cart}
            <h5>Total: ${cart.total()}</h5>
        {/key}
        <button on:click={() => cart.clear()}><h5>Clear Cart</h5></button>
    </span>
    <br>
    <br>
    {#each $cart as product} 
        <div>
            <span>
                <h4><a href="/shop/{product.id}">{product.title}</a></h4>
                <p></p>
                <QuantityCounter {product}></QuantityCounter>
            </span>
            <h4>$ {product.price}</h4>
            <br>
            <br>
            <button on:click={() => cart.remove(product)}><h5>Remove product</h5></button>
        </div>
        <br>
    {/each}
</section>
