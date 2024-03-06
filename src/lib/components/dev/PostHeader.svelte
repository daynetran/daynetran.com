<script lang="ts">
	import type { MarkdownPost } from '../../../types';

	export let metadata: MarkdownPost['metadata'];

	function formatPublishedAt(date: string) {
		return new Date(date).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			timeZone: 'UTC'
		});
	}
</script>

<div class="text-4xl font-bold mb-4">
	{metadata.title}
</div>
<div>
	<span>Published: </span>
	<time datetime={metadata.publishedAt}>
		{formatPublishedAt(metadata.publishedAt)}
	</time>
</div>
