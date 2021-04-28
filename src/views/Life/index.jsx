/*
 * @Author: your name
 * @Date: 2021-04-27 16:33:41
 * @LastEditTime: 2021-04-27 17:18:15
 * @LastEditors: Please set LastEditors
 * @Description: 生活区页面
 * @FilePath: \xkc-react-blog\src\views\Life\index.js
 */

import React, { useState, useEffect } from "react";
// 请求
import { getLifeInfo } from "@/api/life";
// 组件
import { LifeDetail } from './components'

export default function Life() {
  // 生活区信息列表
  const [lifeInfo, setlifeInfo] = useState([]);
  // 总数
  const [total, settotal] = useState(0);

  useEffect(async () => {
    // 获取首页信息
    let lifeInfoData = await getLifeInfoData(0);
    setlifeInfo(lifeInfoData.data.lifeList);
    settotal(lifeInfoData.total);
  }, []);

  // 分页获取生活区信息
  const getLifeInfoData = (offset) => {
    return new Promise((resolve) => {
      getLifeInfo(offset).then((res) => {
        if (res.code === 200) {
          resolve(res);
        }
      });
    });
  };

  return (
    <div className="life-page">
      <div className="life-container">
        {
          lifeInfo.map(life => {
            return (
              <LifeDetail key={life.id} life={life} />
            )
          })
        }
      </div>
    </div>);
}
