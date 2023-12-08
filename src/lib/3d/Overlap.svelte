<script lang="ts">
    import { T, useTask } from '@threlte/core'
    import { Grid, OrbitControls, Float } from '@threlte/extras'
    import { lockRotate, scenceNum } from '$lib/globals';
    import Scene1 from '$lib/3d/Scene1.svelte';
    import Scene2 from '$lib/3d/Scene2.svelte';
    import Scene3 from '$lib/3d/Scene3.svelte';
    import { tweened } from 'svelte/motion'; // Import tweened
	  import Scene4 from './Scene4.svelte';

    let zoom = 45

    // Create tweened stores
    let rotation = tweened({ x: 0, y: 0, z: 0});
    let cameraPosition = tweened([0, 5, 10] as [number, number, number]); // Create a tweened store for cameraPosition
    
    useTask((delta) => {
      if ($lockRotate == -1) {
        const f = 1 / 60 / delta // ~1 at 60fps
        rotation.update(n => ({ x: n.x, y: n.y + 0.002 * f, z: n.z })); // Update the store
        zoom = 85
      } else {
        rotation.set({ x: 0, y: $lockRotate, z: 0 }); // Set the new value
        zoom = 100
      }
    })

    lockRotate.subscribe((v) => {
      rotation.set({ x: 0, y: v, z: 0 });
      cameraPosition.set([0, 5, 10]);
    })
</script>
  
<T.Group rotation.y={$rotation.y}>  <!-- Use the $ prefix to get the current value -->
<Float 
rotationIntensity={0.5}
rotationSpeed={1}
>
    <T.OrthographicCamera
      bind:zoom
      position={$cameraPosition}
      makeDefault
      on:create={({ ref }) => {
        ref.lookAt(0, 0, 0);
      }}
    >
      <OrbitControls />
  </T.OrthographicCamera>
  <T.DirectionalLight position={[0, 10, 5]} intensity={1.5} />
  <T.AmbientLight intensity={0.7} />
</Float>
</T.Group>

<Grid sectionColor="#0f62fe" />

{#if $scenceNum == 1}
  <Scene1 />
{:else if $scenceNum == 2}
  <Scene2 />
{:else if $scenceNum == 3}
  <Scene3 />
{:else if $scenceNum == 4}
  <Scene4 />
{/if}