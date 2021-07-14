import React from 'react';
import classes from './InputFiles.module.css';

const InputFiles = () => {
  return (
    <div className={classes.container}>
      <div className={classes["input-wrapper"]}>
        <label htmlFor="inputFiles" className="input-label">
          <span className={classes["input-span"]}>Click me!</span>
          <input type="file" className={[classes.container, classes['visually-hidden']].join(' ')} id="inputFiles" />
        </label>
      </div>
    </div>
  )
}



export default InputFiles
