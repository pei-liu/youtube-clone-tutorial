import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import SearchBarLegacy from './components/search_bar_legacy';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import VideoDetailLegacy from './components/video_detail_legacy';
const API_KEY = 'AIzaSyCGe7jAKrhWzTW7joAckoXuScexU9ikORU';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };
    this.videoSearch('ukelele')
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0],
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
    return (
      <div>
        <SearchBarLegacy onSearchTermChange={videoSearch}/>
        <VideoDetailLegacy video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={(selectedVideo) => this.setState({selectedVideo})} />
      </div>
    );
  }
}

// Take this component's generated HTML and put it on the page (DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
