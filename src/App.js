import './App.css';
import ImageItem from './components/ImageList/ImageItem/ImageItem';
import ImageList from './components/ImageList/ImageList';
import InputFiles from './components/InputFiles/InputFiles';

function App() {
  return (
    <div>
      <InputFiles />
      <ImageList><ImageItem/></ImageList>
    </div>
  );
}

export default App;
