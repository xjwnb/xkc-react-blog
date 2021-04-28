/*
 * @Author: your name
 * @Date: 2021-04-27 16:41:26
 * @LastEditTime: 2021-04-27 16:43:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xkc-react-blog\src\api\life.js
 */

import request from "@/http";

// 分页获取生活区信息
export function getLifeInfo(offset) {
  return request({
    url: "/blog/getLifeInfo",
    params: {
      offset,
    },
  });
}
