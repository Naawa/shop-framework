<script lang="ts">
	import ProductOptions from "$lib/components/ProductOptions.svelte";
	import Slideshow from "$lib/components/Slideshow.svelte";
    import { cart } from "$lib/stores/cart.js";

    export let data;
    const { product } = data;
    
    const item: Item = {
		product: { ...product },
        options: {
            quantity: 1,
        }
	}
</script>

<style lang="scss">
    section {
        &:first-of-type {
            min-height: calc(100dvh - 8em);
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 8em;
            padding: 2em 0;

            div {
                display: flex;
                flex-direction: column;
                width: clamp(300px, 100%, 600px);

                p {
                    margin: 1em 0;
                    min-height: 3em;
                    max-height: 100px;
                    overflow: hidden;
                }

                div {
                    gap: 0;
                        &:last-of-type {
                        gap: 1em;
                    }
                }

                span {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    h5 {
                        &:last-of-type {
                            color: rgb(133, 133, 133);
                        }
                    }
                }

                button {
                    background-color: #424242;
                    color: #FFFCFC;
                    padding: 1em 0;
                    border: solid 2px #424242;

                    h5 {
                        color: #FFFCFC;
                    }
                    
                    &:hover {
                        background-color: #FCFCFC;
                        h5 {
                            color: #424242;
                        }
                    }
                }
            }
        }
    }

    @media (width < 800px) {
        section {
            &:first-of-type {
                flex-direction: column;
                justify-content: center;
                gap: 3em;
            }
        }
    }
</style>

<section>
    <Slideshow images={product.images}></Slideshow>
    <div>
        <div>
            <span>
                <h5>{product.title}</h5>
                <h5>$ {product.price}</h5>
            </span>
            <h6>{product.rating} &#9958;</h6>
        </div>
        <p>{product.description}</p>
        <div>
            {#key $cart}
                {#if cart.exists(item) == false}
                    <ProductOptions {item}></ProductOptions>
                    <button on:click={() => cart.add(item)}><h5>ADD TO CART</h5></button>
                {:else}
                    <h5>ADDED TO <a href="/cart">CART</a></h5>
                {/if}
            {/key}
        </div>
    </div>
</section>