/*
 * @Author: your name
 * @Date: 2021-02-03 22:09:07
 * @LastEditTime: 2021-02-04 17:41:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xkc-react-blog\src\layout\index.js
 */
import React, { useState } from "react";
import "./index.less";
// 组件
import { Nav } from "@/components";

// const
import { nav } from "@/const";

export default function Layout() {
  const [bgUrl, setbgUrl] = useState("../assets/images/bg.jpg");
  return (
    <div className="layout">
      {/* header */}
      <header>
        <div className="layout-header">
          <div className="layout-logo">
            <span>xkcBlog</span>
          </div>
          <div className="layout-nav">
            <Nav nav={nav}></Nav>
          </div>
        </div>
      </header>
      {/* main */}
      <main>
        {/* 大图片 */}
        <div className="layout-top-big-image">
          {/* <img src={require('../assets/images/bg.jpg')} alt="背景图片"/> */}
        </div>
        {/* 分割 div */}
        <div className="layout-main-divrder"></div>
        {/* content */}
        <div className="layout-main-div"></div>
      </main>
    </div>
  );
}
