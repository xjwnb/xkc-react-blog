/*
 * @Author: your name
 * @Date: 2021-02-14 16:42:41
 * @LastEditTime: 2021-02-17 17:52:40
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

// 通过标签获取博客信息
export function getBlogsInfoByTag(tag) {
  return request({
    url: "/blog/getBlogsInfoByTag",
    params: {
      tag
    }
  })
}

// 增加博客访问量
export function updateBlogVisits(id) {
  return request({
    url: "/blog/updateBlogVisits",
    params: {
      id
    }
  })
}