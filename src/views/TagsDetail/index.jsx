import React, { useEffect, useState } from "react";
import { withRouter, useLocation, useHistory } from "react-router-dom";
import "./index.less";
// 组件
import { TagBtn } from "./components";
import { BlogItem } from "../Index/components";
// 请求
import { getTagsInfo } from "@/api/tag";
import { getBlogsInfoByTag } from "@/api/blog";

function TagsDetail(props) {
  // 标签内容
  const [tagsInfo, settagsInfo] = useState([]);
  // 点击的标签
  const [tagResult, setTagResult] = useState("");
  const [blogInfo, setblogInfo] = useState([]);
  const [blogCount, setblogCount] = useState(0);

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  let history = useHistory();
  let query = useQuery();
  let tag = query.get("tag");

  useEffect(async () => {
    let tagInfo = await getTagsInfoData();
    settagsInfo(tagInfo);
  }, []);

  useEffect(async () => {
    if (!tag) return;
    let tagValue = tag.trim();
    if (!tagValue) return;
    // 发送请求
    let blogInfos = await getBlogsInfoDataByTag(tagValue);
    // console.log(blogInfos);
    setblogInfo(blogInfos);
    setTagResult(tagValue);
    setblogCount(blogInfos.length);
  
  }, [tag]);

  let strArr = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  const getRandomColor = (strArr) => {
    let colorResult = "#";
    for (let i = 0; i < 6; i++) {
      let pos = Math.round(Math.random() * (strArr.length - 1));
      colorResult += strArr[pos];
    }
    return colorResult;
  };

  

  // 获取标签信息
  const getTagsInfoData = () => {
    return new Promise((resolve) => {
      getTagsInfo()
        .then((res) => {
          if (res.code === 200) {
            resolve(res.data.data.tagsInfo);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  // 根据标签获取博客信息
  const getBlogsInfoDataByTag = (tag) => {
    return new Promise((resolve) => {
      getBlogsInfoByTag(tag)
        .then((res) => {
          if (res.code === 200) {
            resolve(res.data.blogsInfo);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  // 标签点击事件
  const clickTagHandle = async (tag) => {
    // let blogInfos = await getBlogsInfoDataByTag(tag.name);
    // props.history.push(`/tagsDetail?tag=${tag.name}`)
    history.push(`/xkcBlog/tagsDetail?tag=${tag.name}`);
    /* setblogInfo(blogInfos);
    setTagResult(tag.name);
    setblogCount(blogInfos.length); */
  };

  return (
    <div className="tags-detail">
      {/* <div className="tags-detail-title">
        标签页
      </div> */}
      <div className="tags-div">
        {tagsInfo &&
          tagsInfo.map((tag) => {
            return (
              <div
                className="tag-btn-div"
                key={tag.id}
                onClick={() => clickTagHandle(tag)}
              >
                <TagBtn color={tag.color}>{tag.name}</TagBtn>
              </div>
            );
          })}
      </div>
      <div
        className="tag-selected-result"
        style={{ display: tagResult ? "block" : "none" }}
      >
        查询 {tagResult} 共 {blogCount} 条数据
      </div>
      <div className="blog-search-result">
        {
          blogInfo && blogInfo.map(blog => {
            return (
              <div key={blog.id} className="tags-detail-blog-item">
                <BlogItem blogInfo={blog} />
              </div>
            )
          })
        }
      </div>
    </div>
  );
}
export default withRouter(TagsDetail);
