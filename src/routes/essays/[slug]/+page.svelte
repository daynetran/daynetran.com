<script>
	export let data;
</script>

<h1 style="--stagger:1" data-animate="" class="text-3xl font-bold">{data.office.title}</h1>
<br>
<section style="--stagger:2" data-animate="" class="flex flex-col font-serif">
	{@html data.office.content}
	<img class="rounded-lg" src={data.office.featuredImage.url} alt={data.office.featuredImage.title} />
</section>
