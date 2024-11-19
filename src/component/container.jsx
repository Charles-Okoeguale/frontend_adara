import React from 'react';
import LoadingScreen from './loadingSpinner';
import MainContent from './mainContent';

const Container = ({ processing, transcription, recording, handleRecording }) => {
  return (
    <div className="container">
      {processing ? <LoadingScreen /> : <MainContent 
        transcription={transcription} 
        recording={recording} 
        handleRecording={handleRecording} 
      />}
    </div>
  );
};

export default Container;