/*
 * @Author: your name
 * @Date: 2021-02-03 20:38:33
 * @LastEditTime: 2021-02-19 21:58:03
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
    meta: { title: "小卡车" },
  },
  {
    id: 2,
    name: "标签",
    path: "/tagsDetail",
    component: TagsDetail,
    meta: { title: "标签" },
  },
  {
    id: 3,
    name: "友链",
    path: "/links",
    component: Links,
    meta: { title: "友链" },
  },
/*   {
    id: 4,
    name: "留言板",
    path: "/comments",
    component: Comments,
  }, */
  {
    id: 5,
    name: "关于",
    path: "/about",
    component: About,
    meta: { title: "关于" },
  },
];

export default nav;
