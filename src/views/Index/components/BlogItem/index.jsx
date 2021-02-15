import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./index.less";
import moment from "moment";

function BlogItem(props) {
  const [blogInfo, setblogInfo] = useState(props.blogInfo);
  const [userInfo, setuserInfo] = useState({});

  useEffect(() => {
    if (props.userInfo.bgUrl) {
      setuserInfo(props.userInfo);
    }
  }, [props]);

  return (
    <div className="blog-item">
      <div className="blog-item-top">
        <div className="blog-item-top-avatar">
          <img src={userInfo.avatarUrl} alt="avatar" />
        </div>
        <div className="blog-item-top-info">
          <div className="blog-item-top-info-title">{blogInfo.title}</div>
          <div className="blog-item-top-info-time">
            {moment(Date.parse(blogInfo.time)).format("YYYY-MM-DD HH:mm:ss")}
            {
              blogInfo.tag.split(",").map((blog, index) => {
                return (
                  <span key={index}>{blog}</span>
                )
              })
            }
          </div>
        </div>
      </div>
      <div className="blog-item-content-description-info">
        {blogInfo.description_info}
      </div>
      <div
        className="blog-item-description-picture"
        style={{ backgroundImage: `url(${blogInfo.picture})` }}
      >
        {/* <img src={blogInfo.picture} alt="description_picture"/> */}
      </div>
    </div>
  );
}

BlogItem.displayName = "BlogItem";

const mapStateToProps = (state) => {
  return {
    userInfo: state.userReducer,
  };
};

export default connect(mapStateToProps)(BlogItem);
