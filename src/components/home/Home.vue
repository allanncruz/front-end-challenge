<template>
    <div>

<!--    Componentes referente a estrutura principal da homepage -->

        <Showcase></Showcase>
        <Advantage></Advantage>
        <Versions></Versions>
        <Cars></Cars>

    </div>
</template>

<script>
    import Showcase from './showcase/Showcase.vue';
    import Advantage from './advantage/Advantage.vue';
    import Versions from './versions/Versions.vue';
    import Cars from './cars/Cars.vue';
    export default {
        components: {
            'Showcase' : Showcase,
            'Advantage' : Advantage,
            'Versions' : Versions,
            'Cars' : Cars,
        },
    }
</script>

<style></style>
