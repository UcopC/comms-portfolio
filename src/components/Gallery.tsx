import { useState } from 'react';
import './CSS/Gallery.css';

interface ImageItem {
  id: number;
  url: string;
}

const imageModules = import.meta.glob<{ default: string }>(
  '../assets/gallery/*.{png,jpg,jpeg,webp,PNG,JPG}',
  { eager: true },
);

function Gallery() {
  const [images] = useState<ImageItem[]>(() => {
    return Object.entries(imageModules).map(([path, module], index) => ({
      id: index + 1,
      url: module.default,
    }));
  });

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleNext = () => {
    if (selectedIndex !== null)
      setSelectedIndex((selectedIndex + 1 + images.length) % images.length);
  };

  const handlePrev = () => {
    if (selectedIndex !== null)
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
  };

  const handleClose = () => {
    setSelectedIndex(null);
  };

  return (
    <div className='gallery-container'>
      <div>
        <h1 className='gallery-title'>Gallery</h1>
      </div>
      <div className='gallery-grid'>
        {images.map((img, index) => (
          <div
            key={img.id}
            className='gallery-item'
            onClick={() => setSelectedIndex(index)}
          >
            <img src={img.url} loading='lazy' />
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div className='lightbox-overlay' onClick={handleClose}>
          <div
            className='lightbox-content'
            onClick={(e) => e.stopPropagation()}
          >
            <button className='close-btn' onClick={handleClose}>
              X
            </button>
            <button className='nav-arrow left' onClick={handlePrev}>
              ❮
            </button>

            <img src={images[selectedIndex].url} className='lightbox-image' />

            <button className='nav-arrow right' onClick={handleNext}>
              ❯
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
