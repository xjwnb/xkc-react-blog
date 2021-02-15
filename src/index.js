/*
 * @Author: your name
 * @Date: 2021-02-03 17:42:34
 * @LastEditTime: 2021-02-15 14:52:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xkc-react-blog\src\index.js
 */
import React from "react";
import ReactDOM from "react-dom";
// 全局样式
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// iconfont
import "./assets/iconfont/iconfont.css";
import { BrowserRouter as Router } from "react-router-dom";
// store
import store from "@/store";
// redux
import { Provider } from "react-redux";



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
