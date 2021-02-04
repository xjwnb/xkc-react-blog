import React, { useState } from "react";
import "./index.less";

// react-router-dom
import { BrowserRouter as Router, Link } from "react-router-dom";
// antd
import { Menu } from "antd";

function Nav({ nav }) {
  // 当前索引
  const [currentIndex, setCurrentIndex] = useState("1");
  // 点击导航事件
  const handleClick = (e) => {
    console.log("click ", e);
    setCurrentIndex(e.key);
  };
  return (
    <div className="app-nav">
      <Router>
        <Menu onClick={handleClick} selectedKeys={[currentIndex]} mode="horizontal">
          {nav.map((navigat) => {
            return (
              <Menu.Item key={navigat.id}>
                <Link to={navigat.path}>{navigat.name}</Link>
              </Menu.Item>
            );
          })}
        </Menu>
      </Router>
    </div>
  );
}

Nav.displayName = "Nav";

export default Nav;
{
  /* <div className="app-nav-menu" key={navigat.id}>
                <Link to={navigat.path}>{navigat.name}</Link> */
}

/* </div> */
