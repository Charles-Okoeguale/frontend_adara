import './App.css';
import Container from './component/container';
import axios from 'axios';
import { useRef, useState } from 'react';

function App() {
  const [recording, setRecording] = useState(false);
  const [transcription, setTranscription] = useState('');
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const [processing, setProcessing] = useState(false)

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorderRef.current.onstop = handleStop;
      mediaRecorderRef.current.start();
      setTranscription('')
      setRecording(true);
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    }
  };

  const handleStop = async () => {
    setRecording(false);
    const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
    
    try {
      const formData = new FormData();
      formData.append('audio', audioBlob, 'recording.webm');
      setProcessing(true)
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/transcribe`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        credentials: 'include', 
      });
  
      setTranscription(response.data.transcription)
    } catch (error) {
      if (error.response) {
        console.error('Server error:', error.response.data);
        alert(`Error ${error.response.status}: ${error.response.statusText}`);
      } else if (error.request) {
        console.error('Network error:', error.request);
        alert('Network error. Please try again.');
      } else {
        console.error('Unknown error:', error);
        alert('An unknown error occurred.');
      }
    } finally {
      setProcessing(false)
    }
  };

  const handleRecording = () => {
    if (!recording) {
        startRecording()
    } else {
        stopRecording()
    }
  }
  return (
    <div className="App">
      <Container 
        processing={processing} 
        transcription={transcription} 
        recording={recording} 
        handleRecording={handleRecording} 
      />
    </div>
  );
}

export default App;
