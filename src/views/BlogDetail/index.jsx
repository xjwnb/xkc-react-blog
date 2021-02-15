import React, { useState, useEffect } from "react";
import { withRouter, useParams } from "react-router-dom";
import { getBlogInfoById } from "@/api/blog";
import "./index.less";
import moment from "moment";
import marked from "marked";
import hljs from "highlight.js";
// import "highlight.js/styles/default.css";
// import "highlight.js/styles/nnfx-dark.css";
import "highlight.js/styles/a11y-light.css";
// import "highlight.js/styles/arduino-light.css";
// import "highlight.js/styles/atelier-cave-light.css";
// import "highlight.js/styles/vs2015.css";
// import "highlight.js/styles/solarized-light.css";

hljs.highlightAll();

/* import "mavon-editor/dist/highlightjs/highlight.min.js";
import "mavon-editor/dist/css/index.css"; */
// import "mavon-editor/dist/markdown/github-markdown.min.css";
import "github-markdown-css";

function BlogDetail(props) {
  const [blogInfo, setblogInfo] = useState({});
  const { id } = useParams();
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
  useEffect(async () => {
    // let { id } = props.match.params;
    let blogDetailInfo = await getBlogInfoDataById(id);
    setblogInfo(blogDetailInfo);
    /* document.querySelectorAll("pre code").forEach((block) => {
      hljs.highlightBlock(block);
    }); */
    // hljs.highlightAll(document.querySelector(".blog-detail-info-content"));
  }, [id]);

  const getBlogInfoDataById = (id) => {
    return new Promise((resolve) => {
      getBlogInfoById(id)
        .then((res) => {
          if (res.code === 200) {
            resolve(res.data.blogDetailInfo[0]);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };
  function createMarkup() {
    // return { __html: blogInfo.htmlContent };
    return { __html: marked(blogInfo.content) };
  }
  return (
    <div className="blog-detail-info">
      <div className="blog-detail-info-title">{blogInfo.title}</div>
      <div className="blog-detail-info-show">
        <div className="blog-detail-info-show-div">
          <div className="blog-detail-info-show-title">分类</div>
          <div className="blog-detail-info-show-tag">
            {String(blogInfo.tag).replace(/,/g, "/")}
          </div>
        </div>
        <div className="blog-detail-info-show-div">
          <div className="blog-detail-info-show-title">日期</div>
          <div className="blog-detail-info-show-time">
            {moment(Date.parse(blogInfo.time)).format("YYYY-MM-DD HH:mm:ss")}
          </div>
        </div>
        <div className="blog-detail-info-show-div">
          <div className="blog-detail-info-show-title">访问量</div>
          <div className="blog-detail-info-show-visits">{blogInfo.visits}</div>
        </div>
      </div>
      <div
        className="markdown-body blog-detail-info-content"
        dangerouslySetInnerHTML={blogInfo.time && createMarkup()}
      ></div>
    </div>
  );
}

export default withRouter(BlogDetail);
