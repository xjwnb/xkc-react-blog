/*
 * @Author: your name
 * @Date: 2021-02-14 14:20:13
 * @LastEditTime: 2021-02-14 14:21:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xkc-react-blog\src\store\actions\user.js
 */

import { USER_INFO } from "../actionTypes";

// 设置用户信息
export function setUserInfo(userinfo) {
  return {
    type: USER_INFO,
    userinfo
  }
}