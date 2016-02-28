import React from 'react';

const VideoDetail = ({video}) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  return (
    <div>Video Detail Here!</div>
  );
};

export default VideoDetail;
