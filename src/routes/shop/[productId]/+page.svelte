<script lang="ts">
	import AddToCart from "$lib/components/AddToCart.svelte";
	import QuantityCounter from "$lib/components/QuantityCounter.svelte";
	import Slideshow from "$lib/components/Slideshow.svelte";

    export let data;
    const { product } = data
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
        <QuantityCounter></QuantityCounter>
        <AddToCart></AddToCart>
    </div>
</section>