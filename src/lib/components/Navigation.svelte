<style lang="scss">
    nav {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: clamp(6vw, 4em, 12vw);
        height: 6em;

        a {
            text-decoration: none;
            &:first-child {
                margin-right: auto;
            }
        }
    }
</style>

<nav>
    <a href="/"><b>UF</b></a>
    <a href="/shop">Shop</a>
    <a href="/cart">Cart</a>
</nav>