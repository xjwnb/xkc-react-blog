/*
 * @Author: your name
 * @Date: 2021-02-03 20:38:33
 * @LastEditTime: 2021-02-16 13:41:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xkc-react-blog\src\const\navigation.js
 */
import Index from "@/views/Index";
import Comments from "@/views/Comments";
import TagsDetail from "@/views/TagsDetail";
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
    name: "留言板",
    path: "/comments",
    component: Comments,
  },
];

export default nav;
