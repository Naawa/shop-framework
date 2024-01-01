<script lang="ts">
    let name: string = "Classic Hoodie";
    let price: number = 49;
    let detail: string = "320 GSM";
    let colors: string[] = ["Black", "White"];
    let image: string = "../Mockup.png";
</script>

<style lang="scss">
    section {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 16em;
        height: clamp(800px, calc(100dvh - 4em), 1280px);

        div {
            display: flex;
            align-items: center;
            justify-content: center;

            img {
                height: 512px;
                width: 384px;
            }

            &:last-of-type {
                flex-direction: column;
                align-items: start;
                gap: 4em;
                border: solid 1px red;

                span {
                    div {
                        display: flex;
                        flex-direction: row;
                        gap: 8em;
                    }

                    &:last-of-type {
                        display: flex;
                        justify-content: space-between;
                    }
                }
            }
        }
    }
</style>

<section>
    <div>
        <img src={image} alt={name}>
    </div>
    <div>
        <span>
            <div>
                <h2>{name}</h2>
                <h2>${price}</h2>
            </div>
            <p>{detail}</p>
        </span>
        <span>
            <h4>{colors[0]}, {colors[1]}</h4>
        </span>
        <span>
            <div>
                <button></button>
                <h3>1</h3>
                <button></button>
            </div>
            <button>ADD TO CART</button>
        </span>
    </div>
</section>