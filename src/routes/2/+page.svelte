<script lang="ts">
    import { lockRotate, scenceNum } from "$lib/globals";
    import { Content, Accordion, AccordionItem, Button } from "carbon-components-svelte";
	import { onMount } from "svelte";
    import ArrowRight from "carbon-icons-svelte/lib/ArrowRight.svelte";

    onMount(() => {
        scenceNum.set(2);
        lockRotate.set(Math.PI / 1.7);
    });
</script>

<Content style="display: flex; flex-direction: column; justify-content: space-between; height: 100%; padding: 1rem; padding-top: 4rem; overflow-y: auto;">
    <div>
        <h1>So how do we categorize bonds by their Polarity?</h1>
        <br />
        <p>
            Chemists have categorized bonds into two categories, polar and non-polar. There are also two types of polar bonds, bonds that are polar with a covalent bond and bonds that are ionic (a metal and non metal combo).
            On the right is a interactive screen that shows the different types of bonds. On the left is a non-polar covalent bond, in the middle is a polar covalent bond, and on the right is a polar ionic bond.
        </p>
        <br />
        <p>
            I have used spheres to represent individual atoms and their size is based on their electronegativity. The bigger the sphere, the more electronegative the atom is.
        </p>
        <br />
        <br />
        <h2>Properties of Polar/Non Polar Bonds</h2>
        <br />
        <Accordion>
            <AccordionItem title="Non-Polar">
              <p>
                Non-Polar bonds are bonds that have an electronegativity difference of less than 0.4. This means that the electrons are shared (roughly) equally between the two atoms.
                These atoms have a very weak attraction to each other and are usually gases or liquids at room temperature when forming a compound. Non Polar molecules are also usually insoluble in water because they have no negative side to attract atoms.
              </p>
            </AccordionItem>
            <AccordionItem title="Polar Covalent">
              <p>
                Polar Covalent bonds are bonds that have an electronegativity difference of between 0.4 and 1.7. That means that the electrons are shared unequally between two atoms.
                These atoms have a weak attraction to each other and are usually liquids or solids at room temperature when forming a compound. Polar Covalent molecules are also usually soluble in water because they have a possitive and negative side to create hydrogen bonds.
              </p>
            </AccordionItem>
            <AccordionItem title="Polar Ionic">
              <p>
                Polar Ionic bonds are bonds that have an electronegativity difference of greater than 1.7. This means that the electrons are not shared between the two atoms but are rather attracted. 
                Polar Ionic bonds have a very high melting point, high solubility because of a powerful possitive and negative side, and are usually solids at room temperature when forming a compound.
              </p>
            </AccordionItem>
        </Accordion>
    </div>
    <Button kind="primary" style="align-self: flex-start;" icon={ArrowRight} href="/3">So how do we apply this?</Button>
</Content>