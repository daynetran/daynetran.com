<script lang="ts">
	import HomeIcon from '$lib/components/svg/HomeIcon.svelte';
	import DevIcon from '$lib/components/svg/DevIcon.svelte';
	import DarkModeButton from '$lib/components/DarkModeButton.svelte';
	import ThoughtIcon from '$lib/components/svg/ThoughtIcon.svelte';
	import CakeIcon from '$lib/components/svg/CakeIcon.svelte';

	let iconStyle: string = 'w-6 h-6 hover:rotate-12 dark:stroke-white';
</script>

<header class="">
	<nav class="flex justify-between items-center pt-8">
		<ul class="flex justify-center gap-x-8">
			<li><a href="/" title="home sweet home"><HomeIcon class={iconStyle} /></a></li>
			<li><a href="/dev" title="git push"><DevIcon class={iconStyle} /> </a></li>
			<li><a href="/dev/"><ThoughtIcon class={iconStyle} /></a></li>
			<li><a href="/dev"><CakeIcon class={iconStyle} /></a></li>
			<!-- <li>
            <Thought
            </li> -->
			<!-- <li>
                <a href="foodie" class="hover:underline" title="jesse, we need to cook.">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke-width="1.5" stroke="currentcolor" class="w-6 h-6 hover:rotate-12 hover:stroke-stone-500  ">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166c6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166c17.155 8.51 18 9.473 18 10.608v2.513m15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0l3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125h4.125a1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174a47.78 47.78 0 0 1 6 13.12m12.265 3.11a.375.375 0 1 1-.53 0l12 2.845l.265.265zm-3 0a.375.375 0 1 1-.53 0l9 2.845l.265.265zm6 0a.375.375 0 1 1-.53 0l15 2.845l.265.265z" />
                    </svg>                          
                </a>
            </li> -->
		</ul>
		<DarkModeButton {iconStyle} />
	</nav>
</header>
