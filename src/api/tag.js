/*
 * @Author: your name
 * @Date: 2021-02-16 22:11:15
 * @LastEditTime: 2021-02-16 22:11:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xkc-react-blog\src\api\tag.js
 */
import request from "@/http";

// 分页获取博客信息
export function getTagsInfo() {
  return request({
    url: "/blog/getTagsInfo",
  })
}