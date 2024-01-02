<script lang="ts">
	import Slideshow from "$lib/components/Slideshow.svelte";

    export let data;

    const { product } = data
    let detail: string = "320 GSM";
    let colors: string[] = ["Black", "White"];
</script>

<style lang="scss">
    section {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8em;
        min-height: calc(100dvh - 4em);
        
        div {
            width: clamp(200px, 100%, 400px);
            display: grid;
            grid-template-rows: 3em 5em;

            span {
                display: flex;
                justify-content: space-between;
            }
        }
    }

    @media (width < 1200px) {
        section {
            gap: 2em;
            flex-direction: column;
            justify-content: normal;
        }
    }
</style>

<section>
    <Slideshow images={product.images}></Slideshow>
    <div>
        <span>
            <h4>{product.title}</h4>
            <h4>$ {product.price}</h4>
        </span>
        <div>
            <h5>&#9958; {product.rating}</h5>
        </div>
        <p>{product.description}.</p>
    </div>
</section>