/*
 * @Author: your name
 * @Date: 2021-02-03 20:38:33
 * @LastEditTime: 2021-02-03 22:27:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xkc-react-blog\src\const\navigation.js
 */

const nav = [
  {
    id: 1,
    name: "首页",
    path: "/",
    component: () => import("@/views/Index")
  },
  {
    id: 2,
    name: "留言板",
    path: "/comments",
    component: () => import("@/views/Comments")
  }
];

export default nav;