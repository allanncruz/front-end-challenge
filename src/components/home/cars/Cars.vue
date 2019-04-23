<template>
    <div class="cars text-center">
        <b-container>
            <h2>Conheça nossos carros</h2>
            <carousel class="carousel" :autoplay="true" :nav="false" :items="5">

                <template class="d-block" slot="prev">
                    <font-awesome-icon icon="chevron-left"></font-awesome-icon>
                </template>
                <template class="d-block" slot="next">
                    <font-awesome-icon icon="chevron-right"></font-awesome-icon>
                </template>

                <div class="item">
                    <img src="../../../assets/carros/ca.jpg" alt="">
                    <h6>Classic A</h6>
                </div>
                <div class="item">
                    <img src="../../../assets/carros/cc.jpg" alt="">
                    <h6>Classic C</h6>
                </div>
                <div class="item">
                    <img src="../../../assets/carros/cla.jpg" alt="">
                    <h6>Classic CLA</h6>
                </div>
                <div class="item">
                    <img src="../../../assets/carros/ca.jpg" alt="">
                    <h6>Classic A</h6>
                </div>
                <div class="item">
                    <img src="../../../assets/carros/cc.jpg" alt="">
                    <h6>Classic C</h6>
                </div>
                <div class="item">
                    <img src="../../../assets/carros/cla.jpg" alt="">
                    <h6>Classic CLA</h6>
                </div>
            </carousel>
        </b-container>
    </div>
</template>

<script>
    import { library } from '@fortawesome/fontawesome-svg-core'
    import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
    import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
    import carousel from 'vue-owl-carousel'

    library.add(faChevronLeft, faChevronRight)
    export default {
        components: { carousel },
    }
</script>

<style lang="scss" src="./Cars.scss"></style>
