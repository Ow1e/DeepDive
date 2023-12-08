<script lang="ts">
    import Circle from "./Circle.svelte";
    import { Text } from "@threlte/extras";
</script>

<Circle color="#d63366" position={[0, 0.75, -2.5]} size={0.75} />
<Circle color="#e5814b" position={[0, 0.65, -0.65]} size={0.65} />
<Circle color="#f1c21b" position={[0, 0.55, 1]} size={0.55} />
<Circle color="#8bc24a" position={[0, 0.45, 2.5]} size={0.45} />
<Circle color="#2095f2" position={[0, 0.35, 4]} size={0.35} />
<Circle color="#baa6cc" position={[0, 0.25, 5.5]} size={0.25} />

<Text
  text="F"
  color="white"
  fontSize={0.5}
  anchorX="50%"
  anchorY="100%"
  rotation={[0, Math.PI / 2, 0]}
  position={[0.75, 0.5, -2.5]}
/>

<Text
  text="N"
  color="white"
  fontSize={0.5}
  anchorX="50%"
  anchorY="100%"
  rotation={[0, Math.PI / 2, 0]}
  position={[0.65, 0.4, -0.65]}
/>

<Text
  text="C"
  color="white"
  fontSize={0.5}
  anchorX="50%"
  anchorY="100%"
  rotation={[0, Math.PI / 2, 0]}
  position={[0.55, 0.25, 1]}
/>

<Text
  text="B"
  color="white"
  fontSize={0.5}
  anchorX="50%"
  anchorY="100%"
  rotation={[0, Math.PI / 2, 0]}
  position={[0.45, 0.15, 2.5]}
/>

<Text
  text="Ca"
  color="white"
  fontSize={0.5}
  anchorX="50%"
  anchorY="100%"
  rotation={[0, Math.PI / 2, 0]}
  position={[0.35, 0.1, 4]}
/>

<Text
  text="Li"
  color="white"
  fontSize={0.5}
  anchorX="50%"
  anchorY="100%"
  rotation={[0, Math.PI / 2, 0]}
  position={[0.25, 0, 5.5]}
/>