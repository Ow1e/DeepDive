<script lang="ts">
    import Circle from "./Circle.svelte";
	import NonPolar from "./NonPolar.svelte";
</script>

<Circle color="#f1c21b" position={[0, 1, 0]} size={0.55} />
<Circle color="#d63366" position={[0, 0.75, -1]} size={0.75} />
<Circle color="#d63366" position={[0, 0.75, 1]} size={0.75} />

<NonPolar position={[6, 0.75, 0]} min={1.5} max={6} />
