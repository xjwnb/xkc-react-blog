import React from "react";
import "./HotBlogItem.less";

function HotBlogItem(props) {
  return (
    <div className="hot-blog-item">
      <div className="hot-blog-item-img">
        <img src={props.hotBlog.picture} alt="hotBlogPicture" />
      </div>
      <div className="hot-blog-item-info">
        <div className="hot-blog-item-info-title">{props.hotBlog.title}</div>
        <div className="hot-blog-item-info-visits">{props.hotBlog.visits} 次围观</div>
      </div>
    </div>
  );
}

HotBlogItem.displayName = "HotBlogItem";

export default HotBlogItem;
