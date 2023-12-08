<script lang="ts">
	import { lockRotate, scenceNum } from "$lib/globals";
    import { Button, Content } from "carbon-components-svelte";
    import ArrowRight from "carbon-icons-svelte/lib/ArrowRight.svelte";
	import { onMount } from "svelte";

    onMount(() => {
        lockRotate.set(Math.PI / 4.3);
        scenceNum.set(1);
    })
</script>

<Content style="padding: 1rem; padding-top: 4rem; overflow-y: auto; height: 100vh;">
    <div>
        <h1>So what is Electronegativity?</h1>
        <br />
        <img src="/imgs/electronegativity-chart.jpg" alt="Electronegativity Chart" width="100%" />
        <br />
        <br />
        <p>
            Electronegativity is a measure of the tendency of an atom to attract a bonding pair of electrons. The Pauling scale is the most commonly used. Fluorine (the most electronegative element) is assigned a value of 4.0, and values range down to cesium and francium which are the least electronegative at 0.7.
        </p>
        <br />
        <h2>How is it connected?</h2>
        <br />
        <p>
            Electronegativity is connected to ionization energy and electron affinity. The higher the ionization energy or electron affinity, the higher the electronegativity. The higher the electronegativity, the more an atom attracts electrons.
        </p>
    </div>
    <br />
    <br />
    <Button kind="primary" style="" href="/2" icon={ArrowRight}>But how do we categorize bonds?</Button>
</Content>