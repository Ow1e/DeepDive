<script lang="ts">
    import { lockRotate, scenceNum } from "$lib/globals";
    import { Content, Accordion, AccordionItem, Button } from "carbon-components-svelte";
	import { onMount } from "svelte";
    import ArrowRight from "carbon-icons-svelte/lib/ArrowRight.svelte";

    onMount(() => {
        scenceNum.set(4);
        lockRotate.set(Math.PI / 5);
    });
</script>

<Content style="display: flex; flex-direction: column; justify-content: space-between; height: 100%; padding: 1rem; padding-top: 4rem; overflow-y: auto;">
    <div>
        <h1>Symetry!</h1>
        <br />
        <img src="/imgs/shapes.jpg" style="width: 70%; margin-top: 1rem; margin-bottom: 1rem;" alt="Shapes">
        <br />
        <p>
            Polarity dosent just matter if the bonds are ionic or covalent, but if the whole compound is.
            All polar compounds will have a positive and negative side, and all non polar compounds will have no positive or negative side.
            But, to see if a compound is actually polar or non polar, you need to look at the shape of the compound and see if the forces cancel out.
            Intermoecular forces also bend the shape of the compound, so you will need to check your bond polarity and shape too.
        </p>
    </div>
    <Button kind="primary" style="align-self: flex-start;" icon={ArrowRight} href="/finish">Finish</Button>
</Content>