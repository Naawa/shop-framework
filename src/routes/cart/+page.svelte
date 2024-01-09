<script lang="ts">
    import QuantityCounter from "$lib/components/QuantityCounter.svelte";
	import { cart } from "$lib/stores/cart.js";
</script>

<style lang="scss">
    section {
        span {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 8em 0 2em;
        }
        button {
            padding: 1em 3em;
            border: solid 1px;
            background-color: #FCFCFC;
            border: solid 0.1em #424242;
            padding: 1em;
            &:hover {
                background-color: #424242;
                h5 {
                    color: #FCFCFC;
                }
            }
        }
        div {
            span {
                margin: 0;
                height: 4em;
            }
            display: flex;
            justify-content: center;
            flex-direction: column;
            gap: 1em;
            border: solid 0.1em #424242;
            padding: 2em 4em;
            margin: auto;
            a {
                text-decoration: none;
            }
        }
    }
</style>

<section>
    <span>
        {#key $cart}
            <h4>${cart.total()}</h4>
        {/key}
        <button on:click={() => cart.clear()}><h5>Clear Cart</h5></button>
    </span>
    {#each $cart as item} 
        <div>
            <span>
                <h4><a href="/shop/{item.product.id}">{item.product.title}</a></h4>
                <h4 class="number">${item.product.price}</h4>
            </span>
            <p>{item.product.description}</p>
            <span><QuantityCounter {item}></QuantityCounter></span>
            <button on:click={() => cart.remove(item)}><h5>Remove item</h5></button>
        </div>
    {/each}
</section>
