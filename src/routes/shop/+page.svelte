<script lang="ts">
    export let data;

    const { products } = data;
</script>

{#each products as product}
    <h6>{product.id}</h6>
    <a href="/shop/{product.id}">{product.title}</a>
    <h6>$ {product.price}</h6>
    <br>
{/each}