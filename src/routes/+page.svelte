<script>
    import Hero from "$lib/home/Hero.svelte";
    import Preview from "$lib/home/Preview.svelte";
</script>

<section class="flex flex-col gap-y-10 items-center justify-center mx-auto ">
    <Hero/>
    <Preview/>
</section>



<style lang="postcss">
    :global(html) {
        background-color: theme(colors.gray.100);
    }
</style>