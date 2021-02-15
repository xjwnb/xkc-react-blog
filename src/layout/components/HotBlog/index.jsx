import React, { useEffect } from 'react';
import "./index.less";
// 组件
import HotBlogItem from "./HotBlogItem";

function HotBlog({hotBlogInfo}) {
  useEffect(() => {
  }, []);
  return (
    <div className="hot-blog">
      <div className="hot-blog-title">
        热门文章
      </div>
      <div className="hot-blog-content">
        {
          hotBlogInfo.map(hotBlog => {
            return (
              <HotBlogItem key={hotBlog.id} hotBlog={hotBlog} />
            )
          })
        }
      </div>
    </div>
  )
}

HotBlog.displayName = "HotBlog";

export default HotBlog;