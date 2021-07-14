import React from 'react'

import classes from './ImageList.module.css';

const ImageList = (props) => {
  return (
    <div className={classes.container}>{props.children}</div>
  )
}

export default ImageList;
