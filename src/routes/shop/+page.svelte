<script lang="ts">
    export let data;

    const { products } = data;
</script>

<style lang="scss">
    section {
        display: flex;
        flex-direction: row;
        gap: 3em;
        justify-content: center;
        align-items: center;
        padding: 4em;
        flex-wrap: wrap;
        min-height: calc(100vh - 8em);

        div {
            display: flex;
            flex-direction: column;

            a {
                display: flex;
                flex-direction: column;
                text-decoration: none;
                gap: 1em;

                strong {
                    color: currentColor;
                }
            }

            img {
                max-height: 640px;
                max-width: 512px;
                box-shadow: 0 0 4px 1px #81818130;
            }

            strong {
                color: rgb(170, 170, 170);
            }
        }
    }

    @media (width < 800px) {
        section {
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding: 2em 0;
            gap: 1em;
            row-gap: 2em;

            div {
                width: auto;
                max-height: 400px;
                overflow: hidden;

                img {
                    height: 250px;
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
                <p>{product.title}</p>
            </a>
            <strong>$ {product.price}</strong>
        </div>
    {/each}
</section>