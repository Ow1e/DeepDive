<script lang="ts">
    import { T, useTask } from '@threlte/core'
    import Circle from './Circle.svelte';

    export let horizontal = false;
    export let flipped = false;
    export let max = 5;
    export let min = 2;

    let setback = false;

    export let position : [x: number, y: number, z: number] = [0, 0.75, 0];

    function move(axis : number, delta : number) {
        if (position[axis] > max) {
            setback = true;
        }
        
        if (position[axis] < min) {
            setback = false;
        }

        if (setback) {
            position[axis] -= delta;
        } else {
            position[axis] += delta;
        }
    }

    useTask((delta) => {
        if (horizontal) {
            move(2, 2*delta);
        } else {
            move(0, 2*delta);
        }
    });
</script>

<T.Group bind:position>
    <Circle color="#e5814b" position={[0, 0, 0]} size={0.65} />
    <Circle color="#f1c21b" position={[0.2, 0, 0.3]} size={0.47} />
    <Circle color="#f1c21b" position={[-0.4, 0, 0]} size={0.47} />
    <Circle color="#f1c21b" position={[0.2, 0, -0.3]} size={0.47} />
    <Circle color="#f1c21b" position={[0, 0.5, 0]} size={0.47} />

</T.Group>