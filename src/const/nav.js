/*
 * @Author: your name
 * @Date: 2021-02-03 20:38:33
 * @LastEditTime: 2021-02-18 13:57:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xkc-react-blog\src\const\navigation.js
 */
import Index from "@/views/Index";
import Comments from "@/views/Comments";
import TagsDetail from "@/views/TagsDetail";
import About from "@/views/About";
import Links from "@/views/Links";
const nav = [
  {
    id: 1,
    name: "首页",
    path: "/",
    component: Index,
  },
  {
    id: 2,
    name: "标签",
    path: "/tagsDetail",
    component: TagsDetail,
  },
  {
    id: 3,
    name: "关于",
    path: "/about",
    component: About,
  },
  {
    id: 4,
    name: "友链",
    path: "/links",
    component: Links,
  },
  {
    id: 5,
    name: "留言板",
    path: "/comments",
    component: Comments,
  },
];

export default nav;
