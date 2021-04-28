import React, { useEffect, useState } from "react";
import { withRouter, useParams } from "react-router-dom";
// 样式
import "./index.less";
// 请求
import { getLifeDetail, updateLifeVisits } from "@/api/life";
// moment
import moment from "moment";
import marked from "marked";
import hljs from "highlight.js";
// import "highlight.js/styles/default.css";
// import "highlight.js/styles/nnfx-dark.css";
// import "highlight.js/styles/a11y-light.css";
// import "highlight.js/styles/arduino-light.css";
import "highlight.js/styles/atelier-cave-light.css";
// import "highlight.js/styles/vs2015.css";
// import "highlight.js/styles/solarized-light.css";

hljs.highlightAll();

/* import "mavon-editor/dist/highlightjs/highlight.min.js";
import "mavon-editor/dist/css/index.css"; */
// import "mavon-editor/dist/markdown/github-markdown.min.css";
import "github-markdown-css";

function LifeDetail(props) {
  // params 获取 id
  const [id, setid] = useState(useParams().id);
  // id 对应的文章详情
  const [lifeInfo, setlifeInfo] = useState({});
  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: true,
    smartLists: true,
    smartypants: true,
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    },
  });

  // 根据 id 获取生活区详情信息
  useEffect(async () => {
    let lifeDetailData = await getLifeDetailData(id);
    setlifeInfo(lifeDetailData);
  }, [id]);

  // 根据 id 增加生活区访问量
  useEffect(async () => {
    await updateAddLifeVisits(id);
  }, []);

  /**
   * 根据 id 请求增加访问量
   * @param {Number} id
   */
  function updateAddLifeVisits(id) {
    return new Promise((resolve) => {
      updateLifeVisits(id).then((res) => {
        if (res.code === 200) {
          resolve(res);
        }
      });
    });
  }

  /**
   * 根据参数 id 请求获取对应 id 的生活区内容详情
   * @param {String} id
   */
  function getLifeDetailData(id) {
    return new Promise((resolve) => {
      getLifeDetail(id).then((res) => {
        if (res.code === 200) {
          resolve(res.data.lifeDetail[0]);
        }
      });
    });
  }

  function createMarkup() {
    return { __html: marked(lifeInfo.content) };
  }
  return (
    <div className="life-detail-page">
      <div className="life-title">{lifeInfo.title}</div>
      <div className="life-detail-info">
        <div className="life-detail-info-show-div">
          <div className="life-detail-info-show-title">日期</div>
          <div className="life-detail-info-show-time">
            {moment(Date.parse(lifeInfo.time)).format("YYYY-MM-DD HH:mm:ss")}
          </div>
        </div>
        <div className="life-detail-info-show-div">
          <div className="life-detail-info-show-title">访问量</div>
          <div className="life-detail-info-show-visits">{lifeInfo.visits}</div>
        </div>
      </div>
      {/* 内容 */}
      <div
        className="markdown-body life-detail-info-content"
        dangerouslySetInnerHTML={lifeInfo.htmlContent && createMarkup()}
      ></div>
    </div>
  );
}

export default withRouter(LifeDetail);
