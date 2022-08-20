const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/cyclcrm": {
        target: "https://app.cyclcrm.com",
        pathRewrite: { "^/cyclcrm": "" },
      },
    },
  },
});
