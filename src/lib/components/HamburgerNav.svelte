<script lang="ts">
	import { fly } from "svelte/transition";

    let showMenu: boolean = false;
    function toggleMenu() {
        showMenu = !showMenu;
        document.querySelector("button")?.classList.toggle("inactive")
    }
</script>
<style lang="scss">
    nav {
        padding: 0 4dvw;
        height: 4em;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: clamp(4vw, 4em, 12vw);
        
        a {
            text-decoration: none;
            &:first-of-type {
                margin-right: auto;
            }
            &:last-of-type {
                display: none;
            }
        }

        button {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: end;
            border: none;
            span {
                border: solid 1px;
                position: absolute;
                rotate: 45deg;
                width: 1em;
                &:last-of-type {
                    rotate: -45deg;
                }
            }
        }
    }

    .inactive {
        gap: 0.2em;
        align-items: end;
        span {
            position: relative;
            width: 1em;
            rotate: 0deg;
            &:last-of-type {
                width: 2em;
                rotate: 0deg;
            }
        }

        &:hover {
            span {
                width: 2em;
                &:last-of-type {
                    width: 1em;
                }
            }
        }
    }
    @media (width > 800px) {
        nav {
            button {
                display: none;
            }
        }
        div {
            display: none;
        }
    }
    @media (width < 800px) {
        nav {
            justify-content: space-between;
            a {
                display: none;
                &:last-of-type {
                    display: block;
                }
            }
        }
        div {
            position: fixed;
            top: 4em;
            left: 0;
            width: 100%;
            height: calc(100% - 4em);
            display: flex;
            flex-direction: column;
            gap: clamp(1vw, 2em, 6vw);
            align-items: center;
            a {
                text-decoration: none;
                &:first-child {
                    margin-top: 2em;
                }
            }
        }
    }
</style>

<nav>
    <a href="/"><b>UF</b></a>
    <a href="/shop"><b>SHOP</b></a>
    <a href="/cart"><b>CART</b></a>
    <a href="/"><b>UF</b></a> 
    <!-- Used for logo on mobile nav. Hidden on normal nav.-->
    <button on:click={toggleMenu} class="inactive">
        <span></span>
        <span></span>
    </button>
</nav>

{#if showMenu}
    <div in:fly={{ duration: 400, opacity: 0.4}} out:fly={{ delay: 400, duration: 400}}>
        <a on:click={toggleMenu} href="/" in:fly={{ delay: 50, duration: 400}} out:fly={{ delay: 50, duration: 400}}><b>UF</b></a>
        <a on:click={toggleMenu} href="/shop" in:fly={{ delay: 150, duration: 400}} out:fly={{ delay: 150, duration: 400}}><b>SHOP</b></a>
        <a on:click={toggleMenu} href="/cart" in:fly={{ delay: 250, duration: 400}} out:fly={{ delay: 250, duration: 400}}><b>CART</b></a>
    </div>
{/if}