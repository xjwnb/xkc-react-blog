import React, { useState } from "react";
import "./index.less";

export default function LinkDiv(props) {
  const [link, setlink] = useState(props.link);
  return (
    <div className="link-div">
      <div className="link-div-info">
        <div className="link-div-info-name">
          <a href={link.website} target="_blank">{link.name}</a>
        </div>
        <div className="link-div-info-description">{link.description}</div>
      </div>
      <div className="link-div-logo">
        <img src={link.logoUrl} alt="logo" />
      </div>
    </div>
  );
}
