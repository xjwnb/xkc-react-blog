import React, { useState, useEffect } from "react";
import "./index.less";

// react-router-dom
import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";
// antd
import { Menu } from "antd";
// withRouter
import { withRouter } from "react-router-dom";

function Nav(props) {
  // 当前索引
  const [currentIndex, setCurrentIndex] = useState("1");

  // 点击导航事件
  const handleMenu = ({ keyPath }) => {
    props.history.push(keyPath[0]);
  };
  return (
    <div className="app-nav">
      <Router basename="/xkcBlog">
        <Menu
          defaultSelectedKeys={[props.location.pathname]}
          mode="horizontal"
          onClick={handleMenu}
        >
          {props.nav.map((navigat) => {
            return (
              <Menu.Item key={navigat.path}>
                {/* <Link to={navigat.path}>{navigat.name}</Link> */}
                {navigat.name}
              </Menu.Item>
            );
          })}
        </Menu>
      </Router>
    </div>
  );
}

Nav.displayName = "Nav";

export default withRouter(Nav);

/* </div> */
