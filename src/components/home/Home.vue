<template>
    <div>

<!--    Componentes referente a estrutura principal da homepage -->

        <Showcase></Showcase>
        <Advantage></Advantage>
        <Versions></Versions>

    </div>
</template>

<script>
    import Showcase from './showcase/Showcase.vue';
    import Advantage from './advantage/Advantage.vue';
    import Versions from './versions/Versions.vue';
    export default {
        components: {
            'Showcase' : Showcase,
            'Advantage' : Advantage,
            'Versions' : Versions,
        },
    }
</script>

<style lang="scss" src="./Home.scss"></style>
