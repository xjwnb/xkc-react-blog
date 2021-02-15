/*
 * @Author: your name
 * @Date: 2021-02-03 20:38:33
 * @LastEditTime: 2021-02-14 01:28:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xkc-react-blog\src\const\navigation.js
 */
import Index from "@/views/Index";
import Comments from "@/views/Comments";
const nav = [
  {
    id: 1,
    name: "首页",
    path: "/",
    component: Index
  },
  {
    id: 2,
    name: "留言板",
    path: "/comments",
    component: Comments
  }
];

export default nav;