/*
 * @Author: your name
 * @Date: 2021-02-03 20:51:32
 * @LastEditTime: 2021-02-25 16:02:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xkc-react-blog\craco.config.js
 */
const CracoLessPlugin = require('craco-less');
const path = require("path");


module.exports = {
  // 配置less
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#1DA57A" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  // 配置 antd
  babel: {
    plugins: [
      [
        "import",
        {
          libraryName: "antd",
          libraryDirectory: "es",
          style: true, //设置为true即是less
        },
      ],
    ],
  },
  // webpack 配置
  webpack: {
    // 别名
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  // eslint
  eslint: {
    enable: false 
  }
};
