/*
 * @Author: your name
 * @Date: 2021-02-14 16:42:41
 * @LastEditTime: 2021-02-15 13:55:24
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


// 通过 id 获取博客信息
export function getBlogInfoById(id) {
  return request({
    url: "/blog/getBlogInfoById",
    params: {
      id
    }
  })
}