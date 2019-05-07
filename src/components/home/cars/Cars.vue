<template>
  <div class="cars text-center">
    <b-container>
      <h2>Conheça nossos carros</h2>
      <carousel
        class="carousel"
        :autoplay="true"
        :nav="false"
        :responsive="{0:{items:2}, 768:{items:3}, 980:{items:5}}"
      >
        <template class="d-block" slot="prev">
          <font-awesome-icon icon="chevron-left"></font-awesome-icon>
        </template>
        <template class="d-block" slot="next">
          <font-awesome-icon icon="chevron-right"></font-awesome-icon>
        </template>

        <!-- Listas de carros-->
        <div class="item" v-for="(car, index) of cars" :key="index">
          <img :src="car.thunb" :alt="car.title">
          <h6>{{car.title}}</h6>
        </div>
      </carousel>
    </b-container>
  </div>
</template>

<script src="./Cars.js"></script>

<style lang="scss" src="./Cars.scss"></style>
