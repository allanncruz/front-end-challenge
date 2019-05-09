module.exports = {
  publicPath: './',
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/styles/variables.scss";
          @import "@/assets/styles/customized.scss";
        `
      }
    }
  }
};