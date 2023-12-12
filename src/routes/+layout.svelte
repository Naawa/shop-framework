<script lang="ts">
	import Footer from "$lib/components/Footer.svelte";
	import Navigation from "$lib/components/Navigation.svelte";
    import "$lib/scss/styles.scss"
    
</script>

<Navigation></Navigation>
<Footer></Footer>
<slot />