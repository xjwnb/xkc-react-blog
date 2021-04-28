import React, { useState } from "react";
import { withRouter, useParams } from "react-router-dom";
// 样式
import "./index.less";
// 组件
import { LazyLoadImg } from "@/components";
// moment
import moment from "moment";

function LifeDetail(props) {
  console.log(props.life);
  let { life } = props;

  // 点击标题跳转
  const handleClickTitle = (id) => {
    console.log(id)
  };
  return (
    <div className="life-detail">
      <div className="life-title" onClick={() => handleClickTitle(life.id)}>
        {life.title}
      </div>
      <div className="life-info">
        {life.isTop !== 0 ? <span className="isTop">{life.isTop}</span> : ""}
        <span className="time">
          {moment(Date.parse(life.time)).format("YYYY-MM-DD HH:mm:ss")}
        </span>
      </div>
      <div className="life-description-img-container">
        <LazyLoadImg>
          <img className="description-img" src={life.description_img} alt="" />
        </LazyLoadImg>
      </div>
      <div className="life-description-info">
        <span>{life.description_info}</span>
      </div>
    </div>
  );
}

export default withRouter(LifeDetail);
