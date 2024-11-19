import React from 'react';
import MicButton from './micButton';
import TranscriptionContent from './transcriptionContent';

const MainContent = ({ transcription, recording, handleRecording }) => {
  return (
    <div className="main-content">
      <h2 className="title">Voice Transcription App</h2>
      <MicButton
        recording={recording} 
        handleRecording={handleRecording} 
      />
      {transcription && <TranscriptionContent transcription={transcription} />}
    </div>
  );
};

export default MainContent;