/*
 * @Author: your name
 * @Date: 2021-02-13 15:17:57
 * @LastEditTime: 2021-02-14 16:42:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xkc-react-blog\src\api\user.js
 */

import request from "@/http";

// 获取用户信息
export function getUserinfo() {
  return request({
    url: "/blog/getUserinfo",
  });
}


// 获取前端 layout 中标签信息
export function getTabsInfo() {
  return request({
    url: "/blog/getTabsInfo"
  })
}

