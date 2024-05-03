import React from 'react';
import './Image.css'; // Import CSS file for styling

// ImageCard component
function ImageCard(props) {
  const { imageUrl, altText } = props;

  return (
    <div style={{ textAlign : 'center'  , marginTop: '10px' }}>
    <h1 > Image Card using Component</h1>
    <div className="image-card">
      <img src={imageUrl} alt={altText} className="image" />
      <h3>This is Image Card</h3>
    </div>

    </div>

  );
}

export default ImageCard;
