import React, { useEffect, useState } from "react";
import "./index.less";

export default function TagBtn(props) {
  const [toColor, settoColor] = useState("#ffffff");
  const [fromcolor, setfromcolor] = useState("#ffffff");
  useEffect(() => {
    setfromcolor(props.fromColor);
    settoColor(props.toColor);
  }, []);
  return (
    <div
      className="tag-btn"
      style={{
        // backgroundImage: `linear-gradient(to right, ${fromcolor} 0%,${toColor} 100%)`,
        backgroundColor: props.color,
      }}
    >
      {props.children}
    </div>
  );
}
