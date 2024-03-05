<script lang="ts">
	import type { PageData } from './$types';
	import './prism-night-owl.css';
	export let data: PageData;

	const { metadata, post: Post } = data;
</script>

<article class="prose dark:prose-invert py-4 px-4">
	<Post />
</article>
