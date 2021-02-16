import React, { useEffect, useState } from "react";
import "./index.less";
// 组件
import { TagBtn } from "./components";
// 请求
import { getTagsInfo } from "@/api/tag";

function TagsDetail() {
  // 标签内容
  const [tagsInfo, settagsInfo] = useState([]);
  // 点击的标签
  const [tagResult, setTagResult] = useState("");

  useEffect(async () => {
    let tagInfo = await getTagsInfoData();
    settagsInfo(tagInfo);
  }, []);

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

  // 标签点击事件
  const clickTagHandle = (tag) => {
    console.log(tag);
  };

  return (
    <div className="tags-detail">
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
      <div className="tag-selected-result">{tagResult}</div>
    </div>
  );
}
export default TagsDetail;
