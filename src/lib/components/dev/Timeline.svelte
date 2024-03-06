<script lang="ts">
	import type { TimelineInfo } from '../../../types';
	import TimelineItem from './TimelineItem.svelte';

	let school: TimelineInfo = {
		title: "Bachelor's in Computer Science",
		year: 2023,
		location: 'Berkeley, CA',
		desc: `
            I graduated from the University of California, Berkeley with bachelor degrees in 
            Computer Science and Economics. I studied data structures, algorithms, database systems, 
            machine learning, artificial intelligence, and more.
            `,
		time_spent: 4,
		aside: 'Go Bears! I will always be grateful for my time there. 🐻'
	};

	let humanitas: TimelineInfo = {
		title: 'Software Engineering Intern',
		year: 2022,
		location: 'Palo Alto, CA',
		desc: `
            I spent a summer working for humanitas.ai, and I built several data pipelines for the 
            server-side infrastructure. The tech stack included the web-scraping ScraPy framework, 
            Google Cloud PostgreSQL, and various Python scripts.
            `,
		time_spent: 1,
		aside: 'Fun Fact: I once overloaded the IRS API service 😬'
	};

	let start: TimelineInfo = {
		title: 'Hello World',
		year: 2016,
		location: 'Fullerton, CA',
		desc: `
			I wrote my first lines of code (in Java) in the AP Computer Science class of my sophomore
			year of high school, kicking off a joyful journey of digital discovery and creation.
            `,
		time_spent: 8,
		aside: `I want to give a shoutout to Karel the Robot and Mr. Reid.`
	};
</script>

<section id="timeline" class="relative flex flex-col gap-y-8 justify-start items-start w-full">
	<h2
		id="timeline"
		style="--stagger:3"
		data-animate=""
		class="text-2xl font-bold decoration-4 text-stone-900 dark:text-white"
	>
		<a href="/dev#timeline">timeline</a>
	</h2>
	<ol class="flex flex-col">
		<li
			style="--stagger:4"
			data-animate=""
			class="group flex flex-col gap-y-4 pb-8 pl-4 border-l border-stone-500 dark:border-white"
		>
			<TimelineItem info={school} />
		</li>
		<li
			style="--stagger:5"
			data-animate=""
			class="group flex flex-col gap-y-4 pb-8 pl-4 border-l border-stone-500 dark:border-white"
		>
			<TimelineItem info={humanitas} />
		</li>
		<li
			style="--stagger:6"
			data-animate=""
			class="group flex flex-col gap-y-4 pl-4 border-l border-stone-500 dark:border-white"
		>
			<TimelineItem info={start} />
		</li>
	</ol>
</section>
