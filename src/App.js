/*
 * @Author: your name
 * @Date: 2021-02-03 17:42:34
 * @LastEditTime: 2021-02-19 22:11:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xkc-react-blog\src\App.js
 */
// 布局
import Layout from "@/layout";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./App.css";
// hook
import { useTitle } from "@/Hooks";

function App() {

  let location = useLocation();
  
  useEffect(() => {
    useTitle(location.pathname);
  }, [location]);
  /* const fontSize = "16px";
  useEffect(() => {
    let body = document.documentElement || document.body;
    body.setAttribute("fontSize", fontSize);
  }, []); */
  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
