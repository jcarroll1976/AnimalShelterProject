import ReactPlayer from 'react-player';

function VideoPlayer() {
  return (
    <ReactPlayer
      url={'https://www.pexels.com/video/a-group-of-deer-at-winter-1508533/l'}
      playing
      loop
      muted
      width="70%" // Increase width by 20%
      height="auto" // Maintain aspect ratio
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)' // Center the player
      }}
    />
  );
}

export default VideoPlayer;