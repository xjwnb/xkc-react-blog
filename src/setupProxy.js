/*
 * @Author: your name
 * @Date: 2021-02-13 14:33:27
 * @LastEditTime: 2021-02-13 14:34:41
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \xkc-react-blog\src\setupProxy.js
 */
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/reactBlogApi", {
      target: "http://localhost:1111",
      changeOrigin: true,
      pathRewrite: {
        "^/reactBlogApi": ""
      }
    })
  );
};
