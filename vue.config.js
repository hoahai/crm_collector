const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/cyclcrm": {
        target: "https://app.cyclcrm.com",
        ws: true,
        changeOrigin: true,
        pathRewrite: { "^/cyclcrm": "" },
      },
      "/lessannoyingcrm": {
        target: "https://account.lessannoyingcrm.com",
        ws: true,
        changeOrigin: true,
        pathRewrite: { "^/lessannoyingcrm": "" },
      },
    },
  },
});
