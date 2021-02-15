import React from "react";
import "./index.less";

function UserInfo({ userInfo }) {
  return (
    <div className="userinfo-content">
      <div className="userinfo-content-name">{userInfo.name}</div>
      <div className="userinfo-content-div">
        <div className="userinfo-content-div-info">
          <span className="iconfont icon-shuxie"></span>
          {userInfo.personal_profile}
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
