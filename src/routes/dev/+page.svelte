<script>
	import Intro from '$lib/components/dev/Intro.svelte';
	import Timeline from '$lib/components/dev/Timeline.svelte';
	import Skill from '$lib/components/dev/Skills.svelte';
	import Gear from '$lib/components/dev/Gear.svelte';

	// function scroll(){
	//     var getMeTo = document.getElementById("blue");
	//     getMeTo.scrollIntoView({behavior: 'smooth'}, true);
	// }
</script>

<section class="flex flex-col gap-y-12 mb-10">
	<Intro />
	<Timeline />
	<Skill />
	<Gear />
	<!-- Heroes? -->
	<!-- Blog -->
	<!-- Projects -->
</section>
