<script lang="ts">
	import { darkmode } from '$lib/stores/darkmode';
	import Moon from '$lib/components/svg/Moon.svelte';
	import Sun from '$lib/components/svg/Sun.svelte';

	let iconStyle: string = '';
	export { iconStyle };

	function toggleDarkMode() {
		if ($darkmode) {
			$darkmode = false;
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		} else {
			$darkmode = true;
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		}
	}
</script>

<button on:click={toggleDarkMode}>
	{#if $darkmode}
		<Moon class={iconStyle} />
	{:else}
		<Sun class={iconStyle} />
	{/if}
</button>
