<script lang="ts">
	import type { PageData } from './$types';
	import './prism-night-owl.css';
	import CopyCodeInjector from '$lib/components/dev/CopyCodeInjector.svelte';
	import PostHeader from '$lib/components/dev/PostHeader.svelte';

	export let data: PageData;

	const { metadata, post: Post } = data;
</script>

<article class="prose dark:prose-invert py-4">
	<PostHeader {metadata} />
	<CopyCodeInjector>
		<Post />
	</CopyCodeInjector>
</article>
