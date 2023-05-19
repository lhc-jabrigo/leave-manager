const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/scss/styles.scss";`,
      },
    },
  },
  pages: {
    index: {
      // entry for the page
      entry: "src/main.js",
      title: "LH&Creatives: Leave Manager",
    },
  },
});
