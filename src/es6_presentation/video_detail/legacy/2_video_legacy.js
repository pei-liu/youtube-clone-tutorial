

var VideoDetailLegacy = function(props) {
  var videoId = props.video.id.videoId;
  var url = 'http://www.youtube.com/embed/' + videoId;

  return (
    <div>
      <iframe src={url}></iframe>

      <div className="details">
        <div>{props.video.snippet.title}</div>
        <div>{props.video.snippet.description}</div>
      </div>
    </div>
  );
}

// Topics
// 1. Template Strings
// 2. More Destructuring!
