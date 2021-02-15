/*
 * @Author: your name
 * @Date: 2021-02-14 14:12:10
 * @LastEditTime: 2021-02-14 16:26:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xkc-react-blog\src\store\index.js
 */
import { createStore } from "redux";

import user from "./reducers";

export default createStore(
  user,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
