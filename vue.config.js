const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "^/api": {
        target: "https://join-rich-tvp.dev.marvelconnect.com/",
        ws: true,
        changeOrigin: true,
      },
    },
  },
});

// module.exports = {
//   devServer: {
//     proxy: {
//       "^/api": {
//         target: "https://takeaway.dev.marvelconnect.com/",
//         ws: true,
//         changeOrigin: true,
//       },
//     },
//   },
// };
