/*
 * @Author: your name
 * @Date: 2021-02-17 23:13:10
 * @LastEditTime: 2021-02-17 23:16:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xkc-react-blog\src\api\about.js
 */
import request from "@/http";

// 分页获取博客信息
export function getAboutInfo() {
  return request({
    url: "/blog/getAboutInfo",
  })
}