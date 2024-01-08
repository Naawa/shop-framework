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
            display: flex;
            justify-content: center;
            flex-direction: column;
            gap: 2em;
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
            <h4>Total: ${cart.total()}</h4>
        {/key}
        <button on:click={() => cart.clear()}><h5>Clear Cart</h5></button>
    </span>
    <br>
    <br>
    {#each $cart as item} 
        <div>
            <span>
                <h4><a href="/shop/{item.id}">{item.title}</a></h4>
                <h4>$ {item.price}</h4>
            </span>
            <p>{item.description}</p>
            <br>
            <QuantityCounter {item}></QuantityCounter>
            <button on:click={() => cart.remove(item)}><h5>Remove item</h5></button>
        </div>
        <br>
    {/each}
</section>
