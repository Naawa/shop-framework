<script lang="ts">
	import QuantityCounter from "$lib/components/QuantityCounter.svelte";
	import Slideshow from "$lib/components/Slideshow.svelte";
    import SizeOption from "$lib/components/SizeOption.svelte";
	import ColorOption from "$lib/components/ColorOption.svelte";
    import { cart } from "$lib/stores/cart.js";

    export let data;

    const { product } = data;
</script>

<style lang="scss">
    section {
        &:first-of-type {
            height: calc(100dvh - 4em);
            max-height: 1080px;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 4em;
            padding: 4em 0;

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
                }

                button {
                    background-color: #2E2E2E;
                    color: #FFFCFC;
                    padding: 1em 0;
                    border-radius: 16px;

                    h5 {
                        color: #FFFCFC;
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
                <h4>{product.title}</h4>
                <h4>$ {product.price}</h4>
            </span>
            <h5>{product.rating} &#9958;</h5>
        </div>
        <p>{product.description}.</p>
        <span>
            <ColorOption></ColorOption>
            <SizeOption></SizeOption>
        </span>
        {#key $cart}
            {#if cart.exists(product) == false}
                <QuantityCounter {product}></QuantityCounter>
                <button on:click={() => cart.add(product)}><h5>ADD TO CART</h5></button>
            {:else}
                <h5>ADDED TO <a href="/cart">CART</a></h5>
            {/if}
        {/key}
    </div>
</section>