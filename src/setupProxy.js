const proxy = require("http-proxy-middleware");
module.exports = function(app) {
  console.log("Setup proxy is ever called");
  app.use(proxy("/api", { target: "http://localhost:8080/" }));
  // app.use(proxy("/api", { target: "http://192.168.99.100:8080/" }));
};
