<script lang="ts">
	import QuantityCounter from "./QuantityCounter.svelte";
    export let item: Item;
</script>

<style lang="scss">
    span {
        display: grid;
        grid-auto-flow: column;
        place-items: center;
        grid-template-areas: "styles quantity sizes";
        height: 4em;
        width: 100%;
        button {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #FCFCFC;
            border: solid 0.1em #424242;
            padding: 1em;
            height: 4em;
            width: 100%;
            &:hover {
                transform: scale(1.2);
                color: #FCFCFC;
                background-color: #424242;
            }
        }
    }
</style>


<span>
    <button>+ Styles</button>
    <QuantityCounter {item}></QuantityCounter>
    <button>+ Sizes</button>
</span>
