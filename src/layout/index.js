/*
 * @Author: your name
 * @Date: 2021-02-03 22:09:07
 * @LastEditTime: 2021-02-04 10:00:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xkc-react-blog\src\layout\index.js
 */
import React from "react";
import "./index.less";
// 组件
import { Nav } from "@/components";

// const
import { nav } from "@/const";

export default function Layout() {
  return (
    <div className="layout">
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
      <main>
        
      </main>
    </div>
  );
}
