<script>
    import Hero from "$lib/Hero.svelte";
</script>

<section class="flex flex-col items-center justify-center mx-auto ">
    <Hero/>
</section>



<style lang="postcss">
    :global(html) {
        background-color: theme(colors.gray.100);
    }
</style>