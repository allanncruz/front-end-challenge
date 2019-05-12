<template>
  <div>
    <div class="advantage relative">
      <b-container>
        <b-row>
          <b-col md="4 advantage-itens" v-for="(advantage, index) of advantages" :key="index">
            <h3>{{advantage.title}}</h3>
            <h1>{{advantage.subTitle}}</h1>
            <p>{{advantage.description}}</p>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script src="./Advantage.js"></script>

<style lang="scss" src="./Advantage.scss"></style>
