import './App.css';
import ImageItem from './components/ImageList/ImageItem/ImageItem';
import ImageList from './components/ImageList/ImageList';
import InputFiles from './components/InputFiles/InputFiles';
import {useState} from "react";

function App() {
  const [urls, setUrls] = useState([]);

  const addNewImageHandler = (data) => {
    setUrls(prevState => [...prevState, data]);
  }

  const deleteImageHandler = (id) => {
    setUrls(prevState => {
      const filteredImages = prevState.filter(image => image.id !== id);
      return [...filteredImages]
    })
  }

  const images = urls.map(url => (
    <ImageItem
      key={url.id}
      url={url}
      deleteImage={deleteImageHandler}
    />));

  return (
    <div>
      <InputFiles addNewImage={addNewImageHandler}/>
      <ImageList>{images}</ImageList>
    </div>
  );
}

export default App;
