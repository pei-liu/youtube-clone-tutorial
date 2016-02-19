import React from 'react';

var VideoDetailLegacy = function(props) {
  if (!props.video) {
    return <div>Loading...</div>;
  }
  var videoId = props.video.id.videoId;
  var url = 'http://www.youtube.com/embed/' + videoId;
  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{props.video.snippet.title}</div>
        <div>{props.video.snippet.description}</div>
      </div>
    </div>
  );
}

export default VideoDetailLegacy;
