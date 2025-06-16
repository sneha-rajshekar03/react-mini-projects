import { useState } from 'react';
import './App.css';

function App() {
  const [images, setImages] = useState(['https://picsum.photos/200?random=1']);

  const addImage = () => {
    const rand = Math.floor(Math.random() * 100);
    const newUrl = `https://picsum.photos/200?random=${rand}`;
    setImages([...images, newUrl]);
  };

  const deleteImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
  };

  return (
    <div className='c'>
      <div className='h'>
        <h2>Dynamic Gallery</h2>
        <button className="a" onClick={addImage}>Add</button>
      </div>

      {images.map((url, index) => (
        <div key={index} className='e'>
          <img className="i" src={url} alt={`pic-${index}`} />
          <p>Photo {index + 1}</p>
          <button className='db' onClick={() => deleteImage(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;
