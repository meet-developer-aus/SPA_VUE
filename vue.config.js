const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})


// module.exports = {
//   devServer: {
//     proxy: {
//       '/api': {
//         target: 'http://phpbackend:80', // Replace with the actual URL of your PHP backend
//         changeOrigin: true,
//         pathRewrite: {
//           '^/api': '/index.php/api', // Rewrite /api to /index.php in the backend
//         },
//       },
//     },
//   },
// };


