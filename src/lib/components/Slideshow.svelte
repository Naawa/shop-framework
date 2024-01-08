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
            box-shadow: 0 0 4px 1px #81818130;
            height: 640px;
            max-width: 640px;
        }
    }

    @media (width < 800px) {
        div {
            grid-auto-flow: row;
            max-height: 350px;
            span {
                grid-auto-flow: column;
            }

            img {
                width: 100%;
                max-height: 300px;
            }
        }
    }
</style>

<div>
    {#key src}
        <img {src} alt="Slideshow.">
    {/key}
    <span>      
        <button on:click={previousImage}></button>
        <button on:click={nextImage}></button>   
    </span>
</div>
