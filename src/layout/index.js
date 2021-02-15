/*
 * @Author: your name
 * @Date: 2021-02-03 22:09:07
 * @LastEditTime: 2021-02-15 00:35:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xkc-react-blog\src\layout\index.js
 */
import React, { useState, useEffect } from "react";
import "./index.less";
// 组件
import { Nav } from "@/components";
import { Avatar, TabsInfo, UserInfo, HotBlog } from "./components";
// const
import { nav } from "@/const";
// 请求
import { getUserinfo, getTabsInfo } from "@/api/user";
import { getHotBlogInfo } from "@/api/blog";
// router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// views
import Index from "@/views/Index";
import Comments from "@/views/Comments";
// redux
import { connect } from "react-redux";
import { setUserInfo } from "@/store/actions/user";

function Layout(props) {
  /* const [bgUrl, setbgUrl] = useState(
    "http://xkc-oss-bucket.oss-cn-guangzhou.aliyuncs.com/bgUrl/1612786884782_bg.png"
  ); */
  // 用户数据
  const [userInfo, setUserInfo] = useState({});
  const [tabsInfo, setTabsInfo] = useState({});
  const [hotBlogInfo, setHotBlogInfo] = useState([]);

  useEffect(async () => {
    // 取得用户数据
    let userInfo = await getUserInfoData();
    setUserInfo(userInfo);
    // 将用户信息设置到 redux 中
    props.setUserInfoDispatch(userInfo);
    // 存储用户信息到本地
    localStorage.setItem("reactBlogUserInfo", userInfo);
    // 获取标签信息
    let tabsInfo = await getTabsInfoData();
    setTabsInfo(tabsInfo);
    // 获取热门博客信息
    let blogInfoHot = await getHotBlogInfoData();
    setHotBlogInfo(blogInfoHot);
  }, []);

  // 获取用户数据
  const getUserInfoData = () => {
    return new Promise((resolve) => {
      getUserinfo()
        .then((res) => {
          if (res.code === 200) {
            resolve(res.data.userinfoData);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };
  // 获取标签信息
  const getTabsInfoData = () => {
    return new Promise((resolve) => {
      getTabsInfo()
        .then((res) => {
          if (res.code === 200) {
            resolve(res.data.blogTabInfo);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  // 获取热门博客信息
  const getHotBlogInfoData = () => {
    return new Promise((resolve) => {
      getHotBlogInfo()
        .then(res => {
          if (res.code === 200) {
            resolve(res.data.blogHotInfo);
          }
        })
    })
  }

  return (
    <div className="layout">
      {/* <Router> */}
      {/* header */}
      <header>
        <div className="layout-header">
          <div className="layout-logo">
            <span>xkcBlog</span>
          </div>
          <div className="layout-nav">
            <Nav nav={nav}></Nav>
          </div>
        </div>
      </header>
      {/* main */}
      <main>
        {/* 大图片 */}
        <div
          className="layout-top-big-image"
          style={{ backgroundImage: `url(${userInfo.bgUrl})` }}
        ></div>
        {/* 分割 div */}
        <div className="layout-main-divrder">
          <div className="layout-main-divrder-content">
            {/* 头像 */}
            <div className="layout-main-divrder-avatar">
              <Avatar src={userInfo.avatarUrl} />
            </div>
            <div className="layout-main-divrder-tabsinfo">
              <TabsInfo tabsInfo={tabsInfo} />
            </div>
          </div>
        </div>
        {/* content */}
        <div className="layout-main-div">
          <div className="layout-main-content">
            <div className="layout-main-content-left">
              {/* 用户信息 */}
              <UserInfo
                userInfo={{
                  name: userInfo.name,
                  personal_profile: userInfo.personal_profile,
                }}
              />
            </div>
            <div className="layout-main-content-center">
              <Switch>
                {nav.map((route) => {
                  return (
                    <Route
                      key={route.id}
                      path={route.path}
                      exact
                      render={(routerProps) => {
                        return <route.component {...routerProps} tabsInfo={tabsInfo} />;
                      }}
                    ></Route>
                  );
                })}
              </Switch>
              {/* <Switch>
                    <Route path="/" exact component={Index}>
                    </Route>
                    <Route path="/comments" component={Comments}>
                    </Route>
                  </Switch> */}
            </div>
            <div className="layout-main-content-right">
              <div className="layout-main-content-right-hot">
                <HotBlog hotBlogInfo={hotBlogInfo} />
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* </Router> */}
    </div>
  );
}

/* const mapStateToProps = (state) => {
  return {
    user: state,
  };
}; */

const mapDispatchToProps = (dispatch) => {
  return {
    setUserInfoDispatch: (userInfo) => {
      dispatch(setUserInfo(userInfo));
    },
  };
};

export default connect(null, mapDispatchToProps)(Layout);
