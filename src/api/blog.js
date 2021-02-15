/*
 * @Author: your name
 * @Date: 2021-02-14 16:42:41
 * @LastEditTime: 2021-02-14 22:29:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xkc-react-blog\src\api\blog.js
 */
import request from "@/http";

// 分页获取博客信息
export function getBlogInfoByPage(offset = 0) {
  return request({
    url: "/blog/getBlogInfoByPage",
    params: {
      offset
    }
  })
}

// 热门博客信息
export function getHotBlogInfo() {
  return request({
    url: "/blog/getHotBlogInfo",
  })
}