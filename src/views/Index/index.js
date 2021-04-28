/*
 * @Author: your name
 * @Date: 2021-02-03 20:40:48
 * @LastEditTime: 2021-04-28 22:10:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xkc-react-blog\src\views\Index\index.js
 */
import React, { useState, useEffect } from "react";
// redux
import { connect } from "react-redux";
// 请求
import { getBlogInfoByPage } from "@/api/blog";
// 组件
import { BlogItem } from "./components";
// antd
import { Pagination } from 'antd';
import "./index.less";

function Index(props) {
  // 分页获取的博客信息
  const [blogInfo, setBlogInfo] = useState([]);
  // 用户信息
  const [userInfo, setUserInfo] = useState({});

  useEffect(async () => {
    setUserInfo(props.userInfo);
    // 获取首页博客信息
    try {
      let blogInfoData = await getBlogInfo();
      setBlogInfo(blogInfoData);
      
    } catch (err) {
      console.log(err);
    }
  }, [props.userInfo]);

  // 分页点击事件
  const onPagChange = async (pageNumber) => {
    // console.log(pageNumber);
    let blogInfoData = await getBlogInfo(10 * (pageNumber - 1));
    setBlogInfo(blogInfoData);
  }

  return (
  <div className="index">
    {
      blogInfo && blogInfo.map(blog => {
        return (
          <div key={blog.id}>
            <BlogItem blogInfo={blog}/>
          </div>
        )
      })
    }  
    <div className="pagination">
    <Pagination pageSize={10} defaultCurrent={1} total={props.tabsInfo.blogCount} onChange={onPagChange} />
    </div>
  </div>)
}


// 获取博客信息
const getBlogInfo = (offset) => {
  return new Promise((resolve, reject) => {
    getBlogInfoByPage(offset)
      .then((res) => {
        if (res.code === 200) {
          resolve(res.data.blogInfo);
        }
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

const mapStateToProps = (state) => {
  return {
    userInfo: state.userReducer,
  };
};

Index.displayName = "Index";

export default connect(mapStateToProps)(Index);
