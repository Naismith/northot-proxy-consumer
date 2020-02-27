const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    createProxyMiddleware("/shopify", {
      target: "https://naismithdev.myshopify.com/apps/proxy",
      changeOrigin: true,
      secure: false
    })
  );
};
