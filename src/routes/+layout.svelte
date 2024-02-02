<script>
    import "../app.css";
    import Header from "$lib/layout/Header.svelte";
</script>

<div class="flex flex-col max-w-[960px] mx-auto px-2">
    <Header/>
    <main>
        <slot />
    </main>
</div>