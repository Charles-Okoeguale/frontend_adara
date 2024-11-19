import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="spinner2"></div>
        <p className="loading-text">Transcribing...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;