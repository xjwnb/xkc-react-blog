/*
 * @Author: your name
 * @Date: 2021-04-27 16:41:26
 * @LastEditTime: 2021-04-28 17:25:51
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


// 根据 id 获取生活区详情页面
export function getLifeDetail(id) {
  return request({
    url: "/blog/getLifeDetail",
    params: {
      id
    }
  })
}

// 根据 id 增加访问量
export function updateLifeVisits(id) {
  return request({
    url: "/blog/updateLifeVisits",
    params: {
      id
    }
  })
}
