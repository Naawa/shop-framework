<script lang="ts">
	import Footer from "$lib/components/Footer.svelte";
	import HamburgerNav from "$lib/components/HamburgerNav.svelte";
    import "$lib/scss/styles.scss"
    
</script>

<HamburgerNav></HamburgerNav>
<slot />
<Footer></Footer>