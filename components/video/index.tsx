import React from 'react';

function Video() {
  return (
    <video
      className="absolute min-h-full w-auto min-w-full object-cover rotate-y-180"
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
