import React, { useEffect, useState } from "react";
// 请求
import { getAboutInfo } from "@/api/about";
import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/a11y-light.css";
hljs.highlightAll();
import "./index.less";
import "github-markdown-css";

export default function About() {
  //  about 关于信息
  const [aboutInfo, setaboutInfo] = useState({});
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
    let aboutInfo = await getAboutInfoData();
    setaboutInfo(aboutInfo);
  }, []);

  // 获取 about 信息
  const getAboutInfoData = () => {
    return new Promise((resolve, reject) => {
      getAboutInfo()
        .then((res) => {
          if (res.code === 200) {
            resolve(res.data.aboutInfo);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  //
  const createMarkup = () => {
    return {
      __html: marked(aboutInfo.htmlContent),
    };
  };

  return (
    <div className="about-info">
      <div
        className="about-info-content markdown-body"
        dangerouslySetInnerHTML={aboutInfo.content && createMarkup()}
      ></div>
    </div>
  );
}
