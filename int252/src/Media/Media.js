import React from 'react';
import './Media.css'; // Import CSS file for styling

// MediaDisplay component
function MediaDisplay(props) {
  const { mediaType, mediaUrl } = props;

  return (
    <div className="media-display" style={{ textAlign : 'center'  , marginTop: '10px' }}>
    <h1>Media </h1>
      {mediaType === 'audio' && (
        <audio controls>
          <source src={mediaUrl} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      )}

      {mediaType === 'video' && (
        <video controls>
          <source src={mediaUrl} type="video/mp4" />
          Your browser does not support the video element.
        </video>
      )}
    </div>
  );
}

export default MediaDisplay;
