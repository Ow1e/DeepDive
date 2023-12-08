<script lang="ts">
    import { T } from '@threlte/core'

    export let color = "blue";
    export let position : [x: number, y: number, z: number] = [0, 0, 0];
    export let size = 1;
</script>

<T.Mesh bind:position>
    <T.SphereGeometry args={[size, 32, 32]} />
    <T.MeshStandardMaterial color={color} />
</T.Mesh>