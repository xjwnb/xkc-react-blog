/*
 * @Author: your name
 * @Date: 2021-02-13 14:14:22
 * @LastEditTime: 2021-02-13 16:26:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xkc-react-blog\src\http\index.js
 */

import axios from "axios";
import { message } from 'antd';

const service = axios.create({
  baseURL: "/reactBlogApi",
  timeout: 50000000,
});

service.interceptors.request.use(
  config => {
    return config;
  },
  err => {
    console.log("interceptors.request err", err);
    message.warning(err);
    return Promise.reject(err);
  }
);

service.interceptors.response.use(
  config => {
    let code = config.code;
    if (code >= 400) {
      message.warning(config.data.msg);
    }
    return config.data;
  },
  err => {
    console.log("interceptors.response err", err);
    message.warning(err);
    return Promise.reject(err);
  }
);

export default service;