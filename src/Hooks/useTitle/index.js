/*
 * @Author: your name
 * @Date: 2021-02-19 21:53:26
 * @LastEditTime: 2021-02-20 00:02:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xkc-react-blog\src\Hooks\useTitle\index.js
 */
// nav 导航数组
import nav from "@/const/nav";

/**
 * 传入 url 设置网页标题
 * @param {string} path
 */
function useTitle(path) {
  let content = nav.filter((n) => n.path === path)[0];
  let title = content ? content.meta.title : "小卡车";
  document.title = `${title}`;
}

export default useTitle;
