import React from 'react';
import AbstractBackground from '../src/components/AbstractBackground';
import "./App.css"
import CatContainer from './components/CatContainer';

function App() {
  const videoUrl = 'https://your-video-url.mp4'; // Replace with your video URL

  return (
    <div>
      <h1>Humane Society of Huron Valley</h1>
      {/*<AbstractBackground />
      <VideoPlayer videoUrl={videoUrl} />*/}
      <CatContainer />
    </div>
  );
}

export default App;