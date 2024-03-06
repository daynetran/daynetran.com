<script lang="ts">
	import type { TimelineInfo } from '../../../types/';
	export let info: TimelineInfo;
</script>

<div
	class="absolute w-3 h-3 bg-stone-700 dark:bg-white rounded-full mt-1.5 -left-1.5 border border-white"
></div>
<div class="flex flex-wrap gap-x-4 items-center justify-start">
	<span
		class="inline-block px-2 py-0.5 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white group-hover:bg-blue-500 group-hover:text-stone-900 rounded-md transition-colors duration-300 text-xs md:text-sm"
	>
		{info.year}
	</span>
	<h3 class="text-lg font-semibold text-stone-900 dark:text-white">
		{info.title}
	</h3>
</div>
<div class="flex gap-x-4 text-stone-700 dark:text-white text-sm">
	<div class="flex gap-x-1">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="w-5 h-5"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
			/>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
			/>
		</svg>
		{info.location}
	</div>
	<div class="flex gap-x-1">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="w-5 h-5"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
			/>
		</svg>
		{#if info.time_spent < 2}
			{info.time_spent} year
		{:else}
			{info.time_spent} years
		{/if}
	</div>
</div>

<p class="text-base text-stone-700 dark:text-white">
	{info.desc}
</p>

<div
	class="hidden lg:flex flex-wrap absolute w-[84px] -left-[96px] top-5 opacity-0 group-hover:opacity-100 group-hover:-translate-y-5 transition duration-300 ease-out"
>
	<p class="text-sm font-normal text-stone-700 dark:text-white">
		{info.aside}
	</p>
</div>
