<script>
	import Stage from "$lib/Stage.svelte";
    import {
        Header,
    } from "carbon-components-svelte";

    let isSideNavOpen = false;  

    import "carbon-components-svelte/css/g100.css";
</script>

<svelte:head>
    <title>Deep Dive</title>
</svelte:head>
  
<Header company="Owen Shaule" platformName="DeepDive" bind:isSideNavOpen href="/">
</Header>

<div style="display: flex; height: 100vh;">
    <div style="flex: 1; border-right: 1px solid #393939;">
        <slot />
    </div>
    <div style="flex: 1; width:50%;">
        <Stage />
    </div>
</div>