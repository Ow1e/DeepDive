<script lang="ts">
    import Circle from "./Circle.svelte";

    import { Text } from "@threlte/extras";
</script>

<Circle color="#d63366" position={[0, 0.75, -2.5]} size={0.75} />
<Circle color="#baa6cc" position={[0, 0.75, -1.45]} size={0.3} />

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
  text="Li"
  color="white"
  fontSize={0.5}
  anchorX="50%"
  anchorY="100%"
  rotation={[0, Math.PI / 2, 0]}
  position={[0.3, 0.4, -1.45]}
/>

<Circle color="#f1c21b" position={[0, 0.55, 0]} size={0.55} />
<Circle color="#8bc24a" position={[0, 0.55, 0.5]} size={0.45} />

<Text
  text="C"
  color="white"
  fontSize={0.5}
  anchorX="50%"
  anchorY="100%"
  rotation={[0, Math.PI / 2, 0]}
  position={[0.55, 0.25, 0]}
/>

<Text
  text="Si"
  color="white"
  fontSize={0.5}
  anchorX="50%"
  anchorY="100%"
  rotation={[0, Math.PI / 2, 0]}
  position={[0.45, 0.25, 0.6]}
/>

<Circle color="#f1c21b" position={[0, 0.55, 2]} size={0.55} />
<Circle color="#f1c21b" position={[0, 0.55, 2.6]} size={0.55} />

<Text
  text="H"
  color="white"
  fontSize={0.5}
  anchorX="50%"
  anchorY="100%"
  rotation={[0, Math.PI / 2, 0]}
  position={[0.55, 0.25, 1.9]}
/>

<Text
  text="H"
  color="white"
  fontSize={0.5}
  anchorX="50%"
  anchorY="100%"
  rotation={[0, Math.PI / 2, 0]}
  position={[0.55, 0.25, 2.7]}
/>

