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
        gap: 8em;
        min-height: calc(100dvh - 4em);

        div {
            display: flex;
            align-items: center;
            justify-content: center;

            img {
                max-height: 60dvh;
                width: 100%;
                max-width: 60dvh;
                box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.05);
            }

            &:last-of-type {
                flex-direction: column;
                align-items: start;
                gap: 4em;

                span {
                    width: 100%;
                    div {
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        align-items: center;
                        width: 100%;

                        button {
                            height: 3em;
                            width: 3em;
                            border-radius: 100%;
                            border: none;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: black;

                            span {
                                &:last-of-type {
                                    position: absolute;
                                    width: 0.8em;
                                    border: solid 1px white;
                                    rotate: 90deg;
                                }

                                &:first-of-type {
                                    width: 0.8em;
                                    border: solid 1px white;
                                }
                            }
                        }


                    }

                    &:last-of-type {
                        width: 100%;
                        display: flex;
                        justify-content: space-between;
                        gap: 8em;

                        div {
                            width: 10em;
                            gap: 0;
                        }
                        
                        button {
                            &:only-of-type {
                                background-color: black;
                                border: none;
                                border-radius: 16px;
                                padding: 1.5em 4em;
                                
                                h5 {
                                    color: white;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    @media (width < 1600px) {
        section {
            flex-direction: column;
            padding-bottom: 2em;
            gap: 2em;

            div {
                width: 100%;
                &:last-of-type {
                    gap: 2em;
                    span {
                        div {
                            gap: 0;
                        }
                        &:last-of-type {
                            flex-direction: column;
                            gap: 2em;
                        }
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
                <h3>{name}</h3>
                <h3>${price}</h3>
            </div>
            <p>{detail}</p>
        </span>
        <span>
            <h4>{colors[0]}, {colors[1]}</h4>
        </span>
        <span>
            <div>
                <button>
                    <span></span>
                </button>
                <h3>1</h3>
                <button>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <button><h5>ADD TO CART</h5></button>
        </span>
    </div>
</section>