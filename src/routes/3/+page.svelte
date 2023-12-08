<script lang="ts">
    import { lockRotate, scenceNum } from "$lib/globals";
    import { Content, Accordion, AccordionItem, Button } from "carbon-components-svelte";
	import { onMount } from "svelte";
    import ArrowRight from "carbon-icons-svelte/lib/ArrowRight.svelte";

    onMount(() => {
        scenceNum.set(3);
        lockRotate.set(Math.PI / 3);
    });
</script>

<Content style="display: flex; flex-direction: column; justify-content: space-between; height: 100%; padding: 1rem; padding-top: 4rem; overflow-y: auto;">
    <div>
        <h1>
            Polarity in Solutions
        </h1>
        <br />
        <p>
            Polar substances can only mix with another polar compound, and non-polar substances can only mix with another non-polar compound. 
            When you have a non polar substance in a polar solvent, the non polar substance will not dissolve in the polar solvent. 
            Think of it like oil and water, they don't mix. 
        </p>
        <div style="display: flex; justify-content: center; align-items: center;">
            <img src="/imgs/polarity.png" style="width: 50%; margin-top: 1rem; margin-bottom: 1rem;" alt="Polarity Picture">
        </div>
        <br />
        <p>
            You might of noticed that the example on the right is showing a polar substance refusing to mix with a non polar substance.
            But the moving compound looks like it should be polar by looking at its size.
        </p>
    </div>
    <Button kind="primary" style="align-self: flex-start;" icon={ArrowRight} href="/4">So why is that?</Button>
</Content>