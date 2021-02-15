/*
 * @Author: your name
 * @Date: 2021-02-03 17:42:34
 * @LastEditTime: 2021-02-16 00:25:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xkc-react-blog\src\App.js
 */
// 布局
import Layout from "@/layout";
import { useEffect } from "react";
import "./App.css";

function App() {
  const fontSize = "16px";
  useEffect(() => {
    let body = document.documentElement || document.body;
    body.setAttribute("fontSize", fontSize);
  }, []);
  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
