import PropTypes from 'prop-types';

import classes from './ImageList.module.css';

const ImageList = (props) => <div className={classes.container}>{props.children}</div>


ImageList.propTypes = {
  children: PropTypes.node.isRequired
}


export default ImageList;
