<style lang="scss">
    nav {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: clamp(4vw, 4em, 12vw);
        height: 4em;

        a {
            text-decoration: none;
            &:first-child {
                margin-right: auto;
            }
        }
    }
</style>

<nav>
    <a href="/"><b>Unnamed Brand</b></a>
    <a href="/shop"><b>SHOP</b></a>
    <a href="/cart"><b>CART</b></a>
</nav>