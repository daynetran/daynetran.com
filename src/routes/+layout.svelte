<script>
    import "../app.css";
    import Banner from "$lib/layout/Banner.svelte"
    import Header from "$lib/layout/Header.svelte";
</script>

<div class="bg-white dark:bg-black">
    <Banner/>
    <div class="flex flex-col max-w-[720px] min-h-screen mx-auto px-4">
        <Header/>
        <main class="pt-12">
            <slot />
        </main>
    </div>
</div>