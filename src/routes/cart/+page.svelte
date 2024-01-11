<script lang="ts">
    import ProductOptions from "$lib/components/ProductOptions.svelte";
	import { cart } from "$lib/stores/cart.js";
</script>

<style lang="scss">
    button {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #FCFCFC;
        border: solid 0.1em #424242;
        padding: 1em;
        &:hover {
            h5 {
                color: #FCFCFC;
            }
            background-color: #424242;
        }
    }
    section {
        display: flex;
        flex-direction: column;
        gap: 4em;
        padding: 1em 0;
        
        span {
            display: flex;
            justify-content: space-between;
            align-items: center;
            div {
                flex-direction: column;
                justify-content: center;
                gap: 0;
            }
            
            a {
                text-decoration: none;
            }
        }

        div {
            display: flex;
            flex-wrap: wrap;
            gap: 1em;
            justify-content: center;

            div {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                max-width: clamp(400px, 30%, 30%);
                max-height: 800px;
                border: solid 0.1em #424242;
                padding: 1em;
                gap: 0;
                
                div {
                    flex-direction: row;
                    width: 100%;
                    max-width: none;
                    justify-content: space-between;
                    border: none;

                    h5 {
                        &:nth-of-type(2) {
                            color: rgb(133, 133, 133);
                        }
                    }

                    a {
                        text-decoration: none;
                    }
                    &:last-of-type {
                        gap: 1em;

                        span {
                            display: flex;
                            width: 100%;
                            justify-content: normal;
                            align-items: normal;
                            gap: 0em;

                            img {
                                max-height: auto;
                                width: 90%;

                            }
                            p {
                                width: 170%;
                            }
                        }
                        button {
                            width: 100%;
                        }
                    }
                }
            }
        }
    }
</style>

<section>
    <span>
        {#key $cart}
            <div>
                <h5>{cart.items.length} Items</h5>
                <h5>$ {cart.total()}</h5>
            </div>
        {/key}
        <button on:click={() => cart.clear()}><h5>Clear Cart</h5></button>
    </span>
    <div>
        {#each $cart as item} 
        <div>
            <div>
                <h5><a href="/shop/{item.product.id}">{item.product.title}</a></h5>
                <h5 class="number">${item.product.price}</h5>
            </div>
            <div>
                <span>
                    <a href="/shop/{item.product.id}"><img src={item.product.images[0]} alt="Thumbnail."></a>
                    <p>{item.product.description}</p>
                </span>
                <ProductOptions {item}></ProductOptions>
                <button on:click={() => cart.remove(item)}><h5>Remove item</h5></button>
            </div>
        </div>
        {/each}
    </div>    
</section>
