/*
 * @Author: your name
 * @Date: 2021-02-03 20:38:33
 * @LastEditTime: 2021-02-19 23:59:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xkc-react-blog\src\const\navigation.js
 */
import Index from "@/views/Index";
import Comments from "@/views/Comments";
import TagsDetail from "@/views/TagsDetail";
import About from "@/views/About";
import Links from "@/views/Links";
import BlogDetail from "@/views/BlogDetail";
const nav = [
  {
    id: 1,
    name: "首页",
    path: "/xkcBlog",
    component: Index,
    meta: { title: "小卡车" },
  },
  {
    id: 2,
    name: "标签",
    path: "/xkcBlog/tagsDetail",
    component: TagsDetail,
    meta: { title: "标签" },
  },
  {
    id: 3,
    name: "友链",
    path: "/xkcBlog/links",
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
    path: "/xkcBlog/about",
    component: About,
    meta: { title: "关于" },
  },
  /* {
    id: 6,
    name: "关于",
    path: "/xkcBlog/blogDetail/:id",
    component: BlogDetail,
    meta: { title: "文章页" },
  } */
];

export default nav;
