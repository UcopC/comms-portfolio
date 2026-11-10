import { useState, useEffect } from 'react';
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

  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedIndex]);

  return (
    <div className='gallery-page'>
      <div className='gallery-container'>
        <div className='header-quote-box'>
          <p className='header-quote'>
            just know the earth is just a rock
            <br />
            without the voices of art
          </p>
        </div>
        <div className='gallery-header'>
          <div className='header-title-box'>
            <div className='title-wrapper'>
              <span className='red-badge-bg'></span>
              <h1 className='gallery-title'>GALLERY</h1>
            </div>
            <span className='gallery-number'>/02</span>
          </div>
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
        <div className='gallery-footer'>
          <span className='footer-right'>
            Background image by aopsan on Magnific
          </span>
        </div>
        {selectedIndex !== null && (
          <div className='lightbox-overlay' onClick={handleClose}>
            <button
              className='nav-arrow left'
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
            >
              ❮
            </button>
            <div
              className='lightbox-content'
              onClick={(e) => e.stopPropagation}
            >
              <button className='close-btn' onClick={handleClose}>
                X
              </button>
              <img src={images[selectedIndex].url} className='lightbox-image' />
            </div>
            <button
              className='nav-arrow right'
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
            >
              ❯
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Gallery;
