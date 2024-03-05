<script lang="ts">
	import '../app.css';
	import Banner from '$lib/layout/Banner.svelte';
	import Header from '$lib/layout/Header.svelte';
	import ThemeInitializer from '$lib/components/ThemeInitializer.svelte';
</script>

<ThemeInitializer>
	<Banner />
	<Header />
	<main class="pt-12">
		<slot />
	</main>
</ThemeInitializer>
