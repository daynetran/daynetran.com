<script>
	export let data;
    console.log("HELLO WORLD")
</script>

<h1 style="--stagger:1" data-animate="" class="text-3xl font-bold">{data.office.title}</h1>
<br>
<section style="--stagger:2" data-animate="" class="flex flex-col font-serif">
	{@html data.office.content}
	<img class="rounded-lg" src={data.office.featuredImage.url} alt={data.office.featuredImage.title} />
</section>

<hr />  

<style>
	.flex {
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 100%;
	}

	.center {
		text-align: center;
	}

	img {
		max-width: 400px;
		height: auto;
	}

    p {
        font-size: larger
    }
</style>
