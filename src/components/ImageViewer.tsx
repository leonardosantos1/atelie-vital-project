import { useState } from 'react';
import '../styles/ImageViewer.css';

interface ImageViewerProps{
    imageUrl:string
}


export function ImageViewer( {imageUrl}:ImageViewerProps ) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  function toggleFullscreen ()  {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className={`image-viewer ${isFullscreen ? 'fullscreen' : 'notfullscreen'}`} onClick={toggleFullscreen}>
      <img src={imageUrl} alt="braid image" className="max-w-full max-h-full" />
    </div>
  );
};

