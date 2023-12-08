<script>
    import { Button, Content, InlineNotification } from "carbon-components-svelte";

    import ArrowRight from "carbon-icons-svelte/lib/ArrowRight.svelte";

    import { lockRotate, scenceNum } from '$lib/globals';
	import { onMount } from "svelte";

    onMount(() => {
        lockRotate.set(-1);
        scenceNum.set(0);
    })
</script>

<Content style="display: flex; flex-direction: column; justify-content: space-between; height: 100%; padding: 1rem; padding-top: 4rem;">
    <div>
        <h1>Electronegativity Deep Dive</h1>
        <p>By Owen Shaule</p>
        <br />
        <InlineNotification
            kind="info"
            lowContrast
            hideCloseButton
            title="This is experimental!"
            subtitle="A lot of the systems in the website were made by scratch by me and are not perfect. If any bugs are found during marking please email me asap!"
        />
    </div>

    <Button kind="primary" style="align-self: flex-start;" icon={ArrowRight} href="/1">Get Started</Button>
</Content>