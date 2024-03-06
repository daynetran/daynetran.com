<script lang="ts">
	import { darkmode } from '$lib/stores/darkmode';
	import Moon from '$lib/components/svg/MoonIcon.svelte';
	import Sun from '$lib/components/svg/SunIcon.svelte';
	import { slide } from 'svelte/transition';

	let iconStyle: string = '';
	export { iconStyle };

	let inTransition = {
		duration: 400,
		delay: 500
	};

	let outTransition = {
		duration: 400
	};

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
		<div in:slide={inTransition} out:slide={outTransition}>
			<Moon class={iconStyle} />
		</div>
	{:else}
		<div in:slide={inTransition} out:slide={outTransition}>
			<Sun class={iconStyle} />
		</div>
	{/if}
</button>
