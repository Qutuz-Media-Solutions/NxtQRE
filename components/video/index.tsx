import React from 'react';

function Video() {
  return (
    <video
      className="absolute min-h-full w-auto min-w-full max-w-none"
      autoPlay
      loop
      muted
      controls={false}
    >
      <source src="/video/bg-video.mp4" />
    </video>
  );
}

export default Video;
