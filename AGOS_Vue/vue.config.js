const cors = require("cors");
app.use(cors());
module.exports = {
  devServer: {
    proxy: {
      '/api/obra': {
        target: 'http://localhost:9000',
        changeOrigin: true
      }
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    }
  }
};
export default vueConfig;

