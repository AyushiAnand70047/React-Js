import React, { useState } from 'react';
import './Toggle.css'; // Import CSS file for styling

// ToggleContent component
function ToggleContent() {
  // State to track whether content is visible or hidden
  const [isContentVisible, setIsContentVisible] = useState(false);

  // Function to toggle content visibility
  const toggleContent = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <div className="toggle-content" style={{ textAlign: 'center', marginTop: '10px' }}>
    <h1>Toggle button using Use-State</h1>
      {/* Toggle button */}
      <button onClick={toggleContent} className="toggle-button">
        {isContentVisible ? 'Hide Content' : 'Show Content'}
      </button>

      {/* Content to toggle */}
      {isContentVisible && (
        <div className="content">
          <p>This is the content that can be toggled.</p>
          <p>Click the button to show/hide this content.</p>
        </div>
      )}
    </div>
  );
}

export default ToggleContent;
