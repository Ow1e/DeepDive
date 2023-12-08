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
            I hope you enjoyed this website and learned something new about electronegativity!
        </p>
        <br />
        <h3>
            Resources I used and reccomend:
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
        <h1>Made with</h1>
        <br />
        <img src="/imgs/sveltekit.png" style="width: 60%; margin-top: 1rem; margin-bottom: 1rem;" alt="Svelte">
        <img src="/imgs/three.png" style="width: 50%; margin-top: 1rem; margin-bottom: 1rem;" alt="Three.js">
        <img src="/imgs/ts.png" style="width: 50%; margin-top: 1rem; margin-bottom: 1rem;" alt="TypeScript">
    </div>
</Content>