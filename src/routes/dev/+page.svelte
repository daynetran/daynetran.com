<script>
    import Intro from "$lib/dev/components/Intro.svelte"
    import Timeline from "$lib/dev/components/Timeline.svelte"
    import Skill from "$lib/dev/components/Skills.svelte"
    import Gear from "$lib/dev/components/Gear.svelte"
    
    // function scroll(){
        //     var getMeTo = document.getElementById("blue");
        //     getMeTo.scrollIntoView({behavior: 'smooth'}, true);
        // }
    </script>
    
    <section class="flex flex-col gap-y-12 mb-10">
        <Intro/>
        <Timeline/>
        <Skill/>
        <Gear/>
        <!-- Heroes? -->
        <!-- Blog -->
        <!-- Projects -->
    </section>