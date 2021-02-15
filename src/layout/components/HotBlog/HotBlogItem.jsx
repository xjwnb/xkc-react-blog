import React from "react";
import "./HotBlogItem.less";
import { withRouter } from "react-router-dom";

function HotBlogItem(props) {

  const clickHandle = () => {
    props.history.push(`/blogDetail/${props.hotBlog.id}`);
  };

  return (
    <div className="hot-blog-item">
      <div className="hot-blog-item-img">
        <img src={props.hotBlog.picture} alt="hotBlogPicture" />
      </div>
      <div className="hot-blog-item-info">
        <div className="hot-blog-item-info-title" onClick={clickHandle}>
          {props.hotBlog.title}
        </div>
        <div className="hot-blog-item-info-visits">
          {props.hotBlog.visits} 次围观
        </div>
      </div>
    </div>
  );
}

HotBlogItem.displayName = "HotBlogItem";

export default withRouter(HotBlogItem);
