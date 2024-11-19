import React from 'react';
import Spinner from './spinner';
import { Mic } from 'lucide-react';

const MicButton = ({ recording, handleRecording }) => {
  return (
    <div className="mic-button" onClick={handleRecording}>
      {recording ? (
        <div className="recording-content">
          <Spinner/>
          <p className="recording-text">Press to stop recording</p>
        </div>
      ) : (
        <div className="start-recording-content">
          <Mic size={200} color={'lightgrey'} />
          <p className="start-recording-text">Press mic to start recording</p>
        </div>
      )}
    </div>
  );
};

export default MicButton;