<script lang="ts">
	import QuantityCounter from "$lib/components/QuantityCounter.svelte";
	import Slideshow from "$lib/components/Slideshow.svelte";
    import SizeOption from "$lib/components/SizeOption.svelte";
	import ColorOption from "$lib/components/ColorOption.svelte";
    import { cart } from "$lib/stores/cart.js";

    export let data;
    const { product } = data;
    
    const item: Item = {
		product: { ...product },
        options: {
            quantity: 1,
            color: "Black",
            size: "Large",
        }
	}
</script>

<style lang="scss">
    section {
        &:first-of-type {
            min-height: calc(100dvh - 8em);
            max-height: 1080px;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 4em;

            div {
                display: flex;
                flex-direction: column;
                width: clamp(300px, 100%, 600px);
                gap: 2em;

                div {
                    gap: 0;
                }

                span {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    h5 {
                        &:last-of-type {
                            color: rgb(170, 170, 170);
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
                gap: 2em;
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
        <p>{product.description}.</p>
        <span>
            <ColorOption></ColorOption>
            <SizeOption></SizeOption>
        </span>
        {#key $cart}
            {#if cart.exists(item) == false}
                <QuantityCounter {item}></QuantityCounter>
                <button on:click={() => cart.add(item)}><h5>ADD TO CART</h5></button>
            {:else}
                <h5>ADDED TO <a href="/cart">CART</a></h5>
            {/if}
        {/key}
    </div>
</section>