<script lang="ts">
    import { ComposedModal, ModalHeader, ModalBody, ModalFooter, Toggle, Dropdown } from "carbon-components-svelte";
    import { Confetti } from "svelte-confetti";
  
    let checked = false;

    function isIonic(val1 : number, val2 : number){
        const difference = Math.abs(val1 - val2);
        return difference > 1.7;
    }

    let dictTimeline = {
        "HCl" : isIonic(2.2, 3.16),
        "NaCl" : isIonic(0.93, 3.16),
        "NCl" : isIonic(3.04, 3.15),
        "MgO" : isIonic(1.31, 3.44)
    }

    let HClToggle = false;
    let NaClToggle = false;
    let NClToggle = false;
    let allright = false;

    $: HClCorrect = (HClToggle === dictTimeline["HCl"]);
    $: NaClCorrect = (NaClToggle === dictTimeline["NaCl"]);
    $: NClCorrect = (NClToggle === dictTimeline["NCl"]);

    $: allright = (HClCorrect && NaClCorrect && NClCorrect);

    export let open = false;
    export let openSecond = false;

    let enabledConfetti = false;

    function gotoSecond() {
        open = false;
        openSecond = true;
    }

    let firstDropdownItems = [
        {"id": "CH4", "text": "Carbon Tetrahydride"},
        {"id": "NH3", "text": "Ammonia"},
        {"id": "CO2", "text": "Carbon Dioxide"}
    ];

    let secondDropdownItems = [
        {"id": "NaOH", "text": "Sodium Hydroxide"},
        {"id": "CO2", "text": "Carbon Dioxide"},
        {"id": "H2O", "text": "Water"},
    ]

    let firstSelected : any = undefined;
    let secondSelected : any = undefined;

    let ASelected = false;
    let BSelected = false;
    let secondComplete = false;

    $: secondComplete = (
        firstSelected === "NH3" &&
        secondSelected === "H2O" &&
        ASelected &&
        !BSelected
    );

    function finish () {
        openSecond = false;
        enabledConfetti = true;
        setTimeout(() => {
            enabledConfetti = false;
        }, 5000);
    }
</script>
  
<ComposedModal bind:open on:submit={gotoSecond}>
    <ModalHeader title="Electronegativity Quiz" />
    <ModalBody hasForm>
        <p>Predict which of the following bonds are Ionic and which ones are Covalent.</p>
        <br />
        <Toggle bind:toggled={HClToggle} labelText="HCl (2.2 and 3.16)" labelA="Covalent" labelB="Ionic" />
        <br />
        <Toggle bind:toggled={NaClToggle} labelText="NaCl (0.93 and 3.16)" labelA="Covalent" labelB="Ionic" />
        <br />
        <Toggle bind:toggled={NClToggle} labelText="NCl (3.04 and 3.15)" labelA="Covalent" labelB="Ionic" />
        <br />
        <br />
    </ModalBody>

    <ModalFooter primaryButtonText="Proceed" primaryButtonDisabled={!allright} />
</ComposedModal>

<ComposedModal bind:open={openSecond} on:submit={finish}>
    <ModalHeader title="Electronegativity Quiz" />
    <ModalBody hasForm style="height: 50vh;">
        <p>Which molecules are polar?</p>
        <br />
        <Dropdown items={firstDropdownItems} bind:selectedId={firstSelected} />
        <br />
        <Dropdown items={secondDropdownItems} bind:selectedId={secondSelected} />
        <br />
        <Toggle bind:toggled={ASelected} labelText="What has a higher electronegativity, Hydrogen or Carbon?" labelA="Hydrogen" labelB="Carbon" />
        <br />
        <Toggle  bind:toggled={BSelected} labelText="What has a higher electronegativity, Oxygen or Nitrogen?" labelA="Oxygen" labelB="Nitrogen" />
        <br />
    </ModalBody>

    <ModalFooter primaryButtonText="Complete Quiz" primaryButtonDisabled={!secondComplete} />
</ComposedModal>

{#if enabledConfetti}
<div style="
    position: fixed;
    top: -50px;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    overflow: hidden;
    pointer-events: none;">
    <Confetti x={[-5, 5]} y={[0, 0.1]} delay={[500, 2000]} infinite duration={5000} amount={200} fallDistance="100vh" />
</div>
{/if}