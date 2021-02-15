import React from "react";
import PropTypes from "prop-types";
import "./index.less";

function TabsInfo({ tabsInfo }) {
  return (
    <div className="tabsinfo">
      <div className="tabsinfo-div">
        <div className="tabsinfo-txt">文章</div>
        <div className="tabsinfo-num">{tabsInfo.blogCount}</div>
      </div>
      <div className="tabsinfo-div">
        <div className="tabsinfo-txt">运行天数</div>
        <div className="tabsinfo-num">{tabsInfo.publishDay}</div>
      </div>
    </div>
  );
}

TabsInfo.displayName = "TabsInfo";
TabsInfo.propTypes = {
  tabsInfo: PropTypes.object
};

export default TabsInfo;
