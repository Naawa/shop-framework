<script lang="ts">
    export let data;

    const { products } = data;
</script>

<style lang="scss">
    section {
        display: flex;
        flex-direction: row;
        gap: 4em;
        row-gap: 8em;
        justify-content: center;
        align-items: center;
        padding: 4em 8em;
        flex-wrap: wrap;
        min-height: calc(100vh - 4em);

        div {
            display: flex;
            flex-direction: column;
            gap: 1em;

            a {
                display: flex;
                flex-direction: column;
                gap: 1em;
            }

            img {
                height: 512px;
                width: 384px;
                box-shadow: 0 0 8px 4px #2E2E2E30;
            }
            span {
                display: flex;
                justify-content: space-between;
            }
        }
    }

    @media (width < 800px) {
        section {
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding: 2em 0;
            gap: 1em;
            row-gap: 3em;

            div {
                width: auto;
                height: 300px;
                overflow: hidden;

                img {
                    height: 200px;
                }
            }
        }
    }
</style>

<section>
    {#each products as product}
        <div>
            <a href="/shop/{product.id}">
                <img src={product.images[0]} alt="Thumbnail.">
                <h5>{product.title}</h5>
            </a>
            <span>
                <h5>{product.rating} &#9958;</h5>
                <h5>$ {product.price}</h5>
            </span>
        </div>
    {/each}
</section>