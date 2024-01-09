<script lang="ts">
    export let images: string[];

    let index = 0;
    let src = images[index];

    function nextImage() {
        if(index < images.length - 1) {
            index++;
            src = images[index];
        }
    }
    function previousImage() {
        if(index > 0) {
            index--;
            src = images[index];
        }
    }
</script>

<style lang="scss">
    div {
        display: grid;
        grid-auto-flow: column;
        place-items: center;
        gap: 2em;

        button {
            border: solid 2px #424242   ;
            height: 20px;
            width: 20px;
            border-radius: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            &:hover, :focus {
                transform: scale(1.5);
            }
        }

        img {
            box-shadow: 0 0 4px 1px #81818130;
        }
    }

    @media (width < 800px) {
        div {
            grid-auto-flow: column;
            height: fit-content;

            img {
                height: 50dvh;
                width: auto;
            }
        }
    }
</style>

<div>
    <button on:click={previousImage}></button>
    {#key src}
        <img {src} alt="Slideshow.">
    {/key}
    <button on:click={nextImage}></button>   
</div>
