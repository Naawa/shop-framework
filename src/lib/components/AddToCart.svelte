<script lang="ts">
    //Use cart store.
    function addToCart(): void {
        //
    }
</script>

<style lang="scss">
    button {
        background-color: #2E2E2E;
        color: #FFFCFC;
        padding: 1em 0;
        border-radius: 16px;

        h5 {
            color: #FFFCFC;
        }
    }
</style>


<button on:click={addToCart}><h5>ADD TO CART</h5></button>