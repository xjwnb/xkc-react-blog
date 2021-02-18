/*
 * @Author: your name
 * @Date: 2021-02-18 16:18:31
 * @LastEditTime: 2021-02-18 16:20:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xkc-react-blog\src\api\links.js
 */
import request from "@/http";

// 提交友链信息
export function postLinksInfo(linksInfo) {
  return request({
    url: "/blog/postLinksInfo",
    method: "post",
    data: {
      linksInfo
    }
  })
}