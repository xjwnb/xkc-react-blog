import React from 'react';
import LazyLoad  from "react-lazyload";
// 组件
import  Spinner from "./Spinner/index";

export default function LazyLoadImg(props) {
  const loadingGIF = "@/assets/images/loading/loading.gif";
  return (
    <LazyLoad
      // scroll={true}
      // height={100}
      // offset={[-100, 100]}
      // height={props.height}
      placeholder={<Spinner />}
      >
      { props.children }
    </LazyLoad>
  )
}
