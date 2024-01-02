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
        if(index > 1) {
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

        span {
            display: grid;
            grid-auto-flow: row;
            place-items: center;
            background-color: transparent;
            gap: 1em;

            button {
                border: solid 4px #2E2E2E;
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
        }

        img {
            box-shadow: 0 0 5px 2px #2E2E2E20;
            height: auto;
            max-width: 100%;
        }
    }

    @media (width < 1200px) {
        div {
            grid-auto-flow: row;
            height: 350px;
            span {
                grid-auto-flow: column;
                order: 1;
            }

            img {
                height: 300px;
                width: 100%;
            }
        }
    }
</style>

<div>
    <span>      
        <button on:click={previousImage}></button>
        <button on:click={nextImage}></button>   
    </span>
    {#key src}
        <img {src} alt="Slideshow.">
    {/key}
</div>
