import React from 'react';
import TypewriterComponent from './typewriter';

const TranscriptionContent = ({ transcription }) => {
  return (
    <div className="transcription-content">
      <h3>Transcription:</h3>
      <TypewriterComponent
        text={transcription}
        fontSize="20px"
        fontWeight={700}
        color="lightblue"
        speed={30}
      />
    </div>
  );
};

export default TranscriptionContent;