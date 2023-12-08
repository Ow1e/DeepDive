<script>
	import Stage from "$lib/Stage.svelte";
    import {
        Header,
        HeaderNav,
        HeaderNavItem,
        HeaderNavMenu,
        SkipToContent,
    } from "carbon-components-svelte";

    let isSideNavOpen = false;  

    import "carbon-components-svelte/css/g100.css";
</script>
  
<Header company="Owen Shaule" platformName="DeepDive" bind:isSideNavOpen href="/">
    <svelte:fragment slot="skip-to-content">
        <SkipToContent />
    </svelte:fragment>
</Header>

<div style="display: flex; height: 100vh;">
    <div style="flex: 1; border-right: 1px solid #393939;">
        <slot />
    </div>
    <div style="flex: 1; width:50%;">
        <Stage />
    </div>
</div>