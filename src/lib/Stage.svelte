<script lang="ts">
    import { Canvas, useThrelte } from '@threlte/core';
	import Overlap from '$lib/3d/Overlap.svelte';
	import { Content } from 'carbon-components-svelte';

    import { lockRotate, scenceNum } from '$lib/globals';
</script>

<Content style="height: 100%; padding: 0; padding-top: 3rem;">
    {#if $scenceNum != 5}
    <Canvas>
        <Overlap />
    </Canvas>
    {:else}
    <div style="padding:1rem;overflow-y:auto; overflow-y: auto;">
        <br />
        <br />
        A cool video I reccomend :)
        <br />
        <br />
        <iframe src="https://www.youtube.com/embed/l2Pll0V4HdM" style="width: 100%;aspect-ratio:16/9;" title="How your split ends can help clean oil spills" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    {/if}
</Content>