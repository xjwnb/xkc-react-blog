import React from 'react';
import PropTypes from "prop-types";

import "./index.less";

function Avatar(props) {
  return (
    <div className="avatar">
      <img src={props.src} alt="avatar"/>
    </div>
  )
}

Avatar.displayName = "Avatar";

Avatar.propTypes = {
  src: PropTypes.string
}


export default Avatar;
