<template>
  <div>
    <Header></Header>
    <Home></Home>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from './components/shared/header/Header.vue';
  import Home from './components/home/Home.vue';
  import Footer from './components/shared/footer/Footer.vue';
  export default {
    components: {
      'Header' : Header,
      'Home' : Home,
      'Footer' : Footer
    },
  }
</script>

<style lang="scss" src="./App.scss"></style>
