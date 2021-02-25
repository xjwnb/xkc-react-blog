import React from 'react';
import LazyLoad  from "react-lazyload";
// 组件
import  Spinner from "./Spinner/index";

export default function LazyLoadImg(props) {
  const loadingGIF = "@/assets/images/loading/loading.gif";
  return (
    <LazyLoad
    scrollContainer="body"
      scroll={true}
      height={300}
      offset={-300}
      // debounce={500}
      // height={props.height}
      placeholder={<Spinner />}
      >
      { props.children }
    </LazyLoad>
  )
}
