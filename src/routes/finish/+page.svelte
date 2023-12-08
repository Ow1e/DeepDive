<script lang="ts">
    import { Content, UnorderedList, ListItem, Link } from "carbon-components-svelte";
    import { lockRotate, scenceNum } from "$lib/globals";
    import { onMount } from "svelte";

    onMount(() => {
        scenceNum.set(5);
        lockRotate.set(-1);
    });
</script>

<Content style="display: flex; flex-direction: column; justify-content: space-between; height: 100%; padding: 1rem; padding-top: 4rem; overflow-y: auto;">
    <div>
        <h1>Thanks for checking this out!</h1>
        <br />
        <p>
            I hope you enjoyed this website and learnt something new about electronegativity!
        </p>
        <br />
        <h3>
            Resources
        </h3>
        <br />
        <UnorderedList>
            <ListItem>
                <Link href="https://chem.libretexts.org/Bookshelves/Introductory_Chemistry/Chemistry_for_Changing_Times_(Hill_and_McCreary)/04%3A_Chemical_Bonds/4.12%3A_Shapes_and_Properties-_Polar_and_Nonpolar_Molecules">
                    LibreTexts Chemistry
                </Link>
            </ListItem>
            <ListItem>
                <Link href="https://www.khanacademy.org/science/ap-chemistry-beta/x2eef969c74e0d802:molecular-and-ionic-compound-structure-and-properties/x2eef969c74e0d802:vsepr/v/dipole-moment">
                    Khan Academy
                </Link>
            </ListItem>
        </UnorderedList>
        <br />
        <br />
        <iframe style="width:100%;aspect-ratio:16/9;" src="https://www.youtube.com/embed/PVL24HAesnc" title="Polar &amp; Non-Polar Molecules: Crash Course Chemistry #23" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
</Content>