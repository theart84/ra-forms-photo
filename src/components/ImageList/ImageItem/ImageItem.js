import classes from './ImageItem.module.css';

const ImageItem = props => {
  return (
    <div className={classes.container}>
      <div className={classes['image-box']}>
        <img src="https://st2.depositphotos.com/1064024/10755/i/950/depositphotos_107559180-stock-photo-little-boy-illustration.jpg" alt="userPic" className={classes['image-item']}/>
      </div>
      <button className={classes['btn-delete']}>x</button>
    </div>
  )
}



export default ImageItem
